"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductSkeleton = ( ) => {
  return (
    <tbody>
      <tr
        className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand "
      >
        <th
          scope="row"
          className="px-6 py-4 flex flex-row items-center  text-gray-900 whitespace-nowrap "
        >
          <img   alt="image" className=" h-9 w-9 bg-red-300" />
         <div className="ml-3"> <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div></div>
        </th>
        <td className="px-6 py-4 font-medium "> <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div></td>
        <td className="px-6 py-4  ">
        <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
         
        </td>
        <td className={`px-6 py-4 `}>
           
        <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          
        </td>
        <td className="px-6 py-4  "> <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div></td>
        <td className="px-6 py-4">
        <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductSkeleton;
