"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../../components/header";

const page = () => {
  const { query, back } = useRouter();
  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <div>
        <Header title={"Product"} />
      </div>
      <div
        onClick={() => back()}
        className="flex space-x-3 mt-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary"
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
          <p className="font-logoFont font-extralight  text-3xl mb-3">Pizza</p>
          <button
            type="button"
            className="text-white m-5 bg-primary  focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  "
          >
           
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 12H15.5"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* <path
                d="M12 15.5V8.5"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              /> */}
            </svg>
            Delete Product
          </button>
        </div>
         
          
      
      </div>
    </div>
  );
};

export default page;
