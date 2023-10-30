"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductTable = ({productID,productName,category, price, image}) => {
  const { push } = useRouter();
   

  return (
    <tbody>
      <tr
        //   onClick={() => {
        //  push( `/dashboard/orders/${  orderID}`)

        //   }}
        onClick={() => {
          push(`/dashboard/products/${productID}`, {
            data: "encodeURIComponent(JSON.stringify({ name, location,  , status, time }))",
          });
        }}
        className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand "
      >
        <th
          scope="row"
          className="px-6 py-4 flex flex-row items-center  text-gray-900 whitespace-nowrap "
        >
          <img src={image} alt="image" className=" h-9 w-9 bg-red-300" />
         <p className="ml-3"> {productName}</p>
        </th>
        <td className="px-6 py-4 font-medium ">{productID}</td>
        <td className="px-6 py-4  ">
            {category} 
         
        </td>
        <td className={`px-6 py-4 `}>
           
          $  {price}
          
        </td>
        {/* <td className="px-6 py-4  ">{quantity}</td> */}
        <td className="px-6 py-4">
          <a className="font-medium text-blue-600   hover:underline">Edit</a>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductTable;
