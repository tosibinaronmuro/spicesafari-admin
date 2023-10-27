import React from "react";
import TableItem from "./tableItem";
import OrderSkeleton from "./skeletons/orderSkeleton";

const OrderTable = ({ data,isLoading }) => {
  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  }
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
  );
};

export default OrderTable;
