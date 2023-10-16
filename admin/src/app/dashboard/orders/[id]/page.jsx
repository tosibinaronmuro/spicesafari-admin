"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../../components/header";

const OrderItem = ( {params}) => {
  const { query, back } = useRouter();
  console.log(" query ===>" + query, " params  ===>"+ params)
  return (
    <div>
      <div>
        <Header title={"Order"}/>
      </div>
      <div
        onClick={() =>  back()}
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
       </div>
  )
}

export default OrderItem