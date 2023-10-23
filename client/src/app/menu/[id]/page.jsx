"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import ProductImage from "../../../../components/products/productImage";
import ProductDetails from "../../../../components/products/productDetails";
import { useViewSingleProductQuery } from "@/Store/Api_Slices/productSlice";
const page = ({ button1, button2, handleButton1, handleButton2, params }) => {
  const { data } = useViewSingleProductQuery({ id: params.id });
  console.log(data);
  const { back } = useRouter();
  return (
    <div className='overflow-y-scroll max-h-[100vh]'>
      <div
        onClick={() => back()}
        className='flex space-x-3 cursor-pointer mt-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className=' fill-current'
          height='1em'
          viewBox='0 0 512 512'>
          <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z' />
        </svg>
        <span>Back</span>
      </div>
      <div className='w-fill  m-3 p-3 mx-4 md:mx-44 lg:mx-44 bg-white rounded '>
        <div className='mx-3 flex justify-between items-center'>
          <p className='font-logoFont font-extralight  text-3xl mb-3'>
            Product {params.id}
          </p>
          <div className='flex space-x-2 mx-[10%] justify-between'>
            <button onClick={() => handleButton1}>
              {/* <a className="flex justify-center items-center rounded border border-primary bg-primary px-7 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="m-1 fill-current"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
                {button1}
              </a> */}

              <a
                className='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-secondary'
                href='/download'>
                {/* <span className="absolute -start-full transition-all duration-500 group-hover:start-4"> */}
                <span className=' '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 576 512'
                    // className="m-1 fill-current rtl:rotate-180"
                    className='m-1 fill-current '>
                    <path d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z' />
                  </svg>
                </span>

                <span className='text-sm font-medium '>
                  {/* <span className="text-sm font-medium transition-all group-hover:ms-4"> */}
                  {button1}
                </span>
              </a>
            </button>
            <button onClick={() => handleButton2}>
              {/* <a className="flex justify-center items-center rounded border border-primary px-7 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="m-1 fill-current"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                {button2}
              </a> */}
              <a className='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-secondary'>
                <span className=' '>
                  {/* <span className="absolute -end-full transition-all duration-500 group-hover:end-4"> */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 576 512'
                    // className="m-1 fill-current rtl:rotate-180"
                    className='m-1 fill-current '>
                    <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
                  </svg>
                </span>

                {/* <span className="text-sm font-medium transition-all group-hover:me-4"> */}
                <span className='text-sm font-medium '>{button2}</span>
              </a>
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row m-2 space-x-3 md:space-x-3 lg:space-x-10 px-2 md:px-5 lg:px-10 '>
          <ProductImage
            mainimg={data && `http://localhost:4000/${data.image}`}
          />
          <ProductDetails
            name={data && data.title}
            price={data && data.price}
            rating={parseFloat(data && data.rating).toFixed(2)}
            description={data && data.description}
            category={data && data.category}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
