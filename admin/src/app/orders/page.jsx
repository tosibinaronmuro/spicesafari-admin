"use client";
import React from "react";
import Header from "../../../components/header";
import TableItem from "../../../components/tableItem";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { useAllOrdersQuery } from "@/Store/Api_Slices/orderSlice";

const page = () => {
  //  const dispatch=useDispatch()
  const { data: dataa, isLoading } = useAllOrdersQuery();
  //   console.log(dataa)

  return (
    <div className='overflow-y-scroll max-h-[100vh]'>
      <div>
        <Header title={"Orders"} />
      </div>

      <div className='relative overflow-x-auto shadow-md p-4 font-quicksand md:p-6'>
        <table className='w-full text-sm text-left text-gray-500  '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Customer Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Location
              </th>
              <th scope='col' className='px-6 py-3'>
                Order details
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Time
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          {dataa?.map((item, index) => {
            return (
              <TableItem
                key={index}
                name={item.name}
                location={item.location}
                order={item.order}
                orderID={item.orderID}
                price={item.price}
                status={item.status}
                time={item.time}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default page;
