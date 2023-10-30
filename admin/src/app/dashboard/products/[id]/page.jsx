"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../../components/header";
import Delete from "../../../../../components/buttons/delete";
import Edit from "../../../../../components/buttons/edit";
import ProductImage from "../../../../../components/products/productImage";
import ProductDetails from "../../../../../components/products/productDetails";
import Modal from "../../../../../components/modals/productEditModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useViewSingleProductQuery,useDeleteProductMutation } from "@/Store/Api_Slices/productSlice";

const page = ({ params }) => {
  const { data, isLoading } = useViewSingleProductQuery({ id: params.id });
  console.log(data)
  const [deleteProduct, { data:deleteData, isLoading: updateloading, isSuccess }] =useDeleteProductMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const modal = useRef(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { query, back } = useRouter();

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
  const handleDelete= async()=>{
    try {
      
        await deleteProduct(
          { id: data._id},
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // }
        ).unwrap()
      back()
    } catch (error) {
      if (error.data && error.data.msg) {
        setIsError(true);
        console.log(error);
        setErrorMessage(error.data.msg);
        if (error.data.msg === "Error: Invalid public key, retry login") {
          router.push("/signin");
        } else {
          console.log("error");
        }
      } else {
        setErrorMessage("An error occurred");
      }
    }
  }

  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <div>
        <Header title={"Product"} />
      </div>
      <div
        onClick={() => back()}
        className="flex space-x-3 cursor-pointer mt-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" fill-current"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
        <span>Back</span>
      </div>
      <div className="w-fill  m-3 p-3 mx-4 md:mx-44 lg:mx-44 bg-white rounded ">
        <div className="mx-3 flex justify-between items-center">
          <p className="font-logoFont font-extralight  text-xl mb-3">
            Product #{data?._id}
          </p>
          <div className="flex space-x-2">
            <div ref={trigger}>
              {" "}
              <Edit 
                text={"Edit Product"}
                handlemodal={() => setModalOpen(true)}
              />
            </div>

            <Delete text={"Delete Product"} handleDelete={handleDelete} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row m-2 space-x-3 md:space-x-3 lg:space-x-10 px-2 md:px-5 lg:px-10 ">
          <ProductImage mainimg={data?.image} />
          <ProductDetails
            category={data?.category}
            name={data?.title}
            price={data?.price}
            // quantity={data?.quantity}
            rating={data?.rating}
            description={data?.description}
          />
        </div>
      </div>

      {modalOpen ? (
        <Modal
          // modalOpen={modalOpen}
          // handleopenmodal={() => setModalOpen(true)}
          hanleclosedmodal={() => setModalOpen(false)}
          // trigger={trigger}
          modal={modal}
          text={"Edit Product"}
          data={data}
        />
      ) : null}
    </div>
  );
};

export default page;
