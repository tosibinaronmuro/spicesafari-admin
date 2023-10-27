 import OrderItem from './orderitem'
import React from 'react'

const OrderIdTable = ({productOrder}) => {
  
  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  }
  return (
    <table className="w-full text-sm text-left text-gray-500  ">
    <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
      <tr>
        <th scope="col" className="px-2 py-3 md:px-6 lg:px-6 ">
          Product name
        </th>
        <th scope="col" className="px-2 py-3 md:px-6 lg:px-6 ">
          Price
        </th>
        <th scope="col" className="px-2 py-3 md:px-6 lg:px-6 ">
          Date
        </th>
        <th scope="col" className="px-2 py-3 md:px-6 lg:px-6 ">
          Quantity
        </th>
      
      </tr>
    </thead>
    <tbody>
     {productOrder?.map((order, index)=>{
      return  <OrderItem key={index} name={order.title} price={order.price} date={formatDate(order.createdAt)} quantity={order.quantity} />
    
     })}
    </tbody>
  </table>
  )
}

export default OrderIdTable