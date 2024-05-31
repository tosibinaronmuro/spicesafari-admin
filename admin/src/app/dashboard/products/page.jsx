"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../../../components/header";
import ProductTable from "../../../../components/productTable";
import Add from "../../../../components/buttons/add";
import Modal from "../../../../components/modals/productModal";
import { useDispatch, useSelector } from "react-redux";

import { useViewAllProductQuery } from "@/Store/Api_Slices/productSlice";
import ProductSkeleton from "../../../../components/skeletons/productSkeleton";

const page = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const modal = useRef(null);
  const { data, isLoading } = useViewAllProductQuery({ key: search });
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className='overflow-y-scroll max-h-[100vh]'>
      <div>
        <Header title={"Products"} />
      </div>
      <div>
        <div
          ref={trigger}
          className='w-fill items-center flex justify-end mx-5  '>
          <Add text={"New Products"} handlemodal={() => setModalOpen(true)} />
        </div>
        <div className='w-fill  m-3 p-3 mx- bg-white rounded '>
          <div className='flex flex-col'>
            <form className='flex items-center'>
              <label htmlFor='simple-search' className='sr-only'>
                Search
              </label>
              <div className='relative w-full'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'>
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='text'
                  id='simple-search'
                  onChange={(e) => setSearch(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  '
                  placeholder='Search product name...'
                  required></input>
              </div>
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                }}
                className='p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary  '>
                <svg
                  className='w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <span className='sr-only'>Search</span>
              </button>
            </form>
            <div className='relative overflow-x-auto shadow-md p-4 font-quicksand md:p-6'>
              <table className='w-full text-sm text-left text-gray-500  '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Product Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Product ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Category
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Price
                    </th>
                    {/* <th scope='col' className='px-6 py-3  '>
                      Quantity
                    </th> */}
                    <th scope='col' className='px-6 py-3'>
                      Action
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <ProductSkeleton />
                ) : data && data.length > 0 ? (
                  data.map((item, index) => (
                    <ProductTable
                      key={index}
                      productID={item._id}
                      productName={item.title}
                      category={item.category}
                      price={item.price}
                      // quantity={item.quantity}
                      image={`https://spice-safari-backend.onrender.com/${item.image}`}
                    />
                  ))
                ) : (
                  <>
                    <p>{search} not found</p>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>

      {modalOpen ? (
        <Modal
          modalOpen={modalOpen}
          handleopenmodal={() => setModalOpen(true)}
          hanleclosedmodal={() => setModalOpen(false)}
          trigger={trigger}
          modal={modal}
          text={"Add New Product"}
        />
      ) : null}
    </div>
  );
};

export default page;
