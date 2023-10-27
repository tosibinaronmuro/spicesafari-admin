"use client"
import React from "react";
import Header from "../../../../components/header";
import TableItem from "../../../../components/tableItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAllOrdersQuery } from "@/Store/Api_Slices/orderSlice";
import OrderSkeleton from "../../../../components/skeletons/orderSkeleton";

const page = () => {
 const dispatch=useDispatch()
  const { data , isLoading } =  useAllOrdersQuery()
  
  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  }
   
  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <div>
        <Header title={"Orders"} />
      </div>

      <div className="relative overflow-x-auto shadow-md p-4 font-quicksand md:p-6">
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Order details
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {isLoading ? (
              <OrderSkeleton/>
            ) : data && data.length > 0 ? (
              data.map((order, index) => (
                <TableItem
                key={index}
                name={order.userId?.name}
                location={order.location}
                order={order.products}
                orderID={order._id}
                price={order.price}
                status={order.status}
                time={formatDate(order.createdAt)}
              />
              ))
            ) : (
              <>
                <tr>No order found!</tr>
              </>
            )}
          
        </table>
      </div>
    </div>
  );
};

export default page;
