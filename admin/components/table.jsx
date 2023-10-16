import React from "react";
import TableItem from "./tableItem";

const OrderTable = ({ data }) => {
  return (
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
        {data.map((item, index) => {
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
  );
};

export default OrderTable;
