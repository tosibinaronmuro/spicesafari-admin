"use client";
import React from "react";
import { useRouter } from "next/navigation";



const TableItem = ({ name, location, price, orderID ,order, status, time }) => {
  
  const {push} = useRouter(); 
  let statusColor = " ";
  let statusBGColor = " ";

  switch (status) {
    case "On-Delivery":
      statusColor = "text-purple-600";
      statusBGColor = "bg-purple-100";
      break;
    case "Pending":
      statusColor = "text-yellow-600";
      statusBGColor = "bg-yellow-100";
      break;

    case "Delivered":
      statusColor = "text-green-600";
      statusBGColor = "bg-green-100";

      break;
    case "Cancelled":
      statusColor = "text-red-600";
      statusBGColor = "bg-red-100";

      break;
    default:
      statusColor = "text-yellow-600";
      statusBGColor = "bg-yellow-100";

      break;
  }

  return (
    <tbody>
      <tr
      //   onClick={() => {
      //  push( `/dashboard/orders/${  orderID}`)
             
          
      //   }}
        onClick={() => {
          push( `/dashboard/orders/${  orderID}`,{
            
              data: "encodeURIComponent(JSON.stringify({ name, location,  , status, time }))",
            
          });
        }}
        className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand "
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {name}
        </th>
        <td className="px-6 py-4">{location}</td>
        <td className="px-6 py-4 flex,flex-col">
          <p className="text-xs">order id: {  orderID}</p>
          <div className="flex space-x-1 text-xs">
            order :
            {  order?.map((order, index) => {
              return (
                <p key={index} className="text-xs">
                  {order.title},
                </p>
              );
            })}
          </div>
          <p className="text-xs">total: ${  price}</p>
        </td>
        <td className={`px-6 py-4 `}>
          <p
            className={`whitespace-nowrap rounded-full  ${statusColor}   ${statusBGColor}  w-fit px-2.5 py-0.5 text-sm`}
          >
            {status}
          </p>
        </td>
        <td className="px-6 py-4">{time}</td>
        <td className="px-6 py-4">
          <a className="font-medium text-blue-600   hover:underline">Edit</a>
        </td>
      </tr>
    </tbody>
  );
};

export default TableItem;
