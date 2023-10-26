import React from 'react';

const OrderItem = ({ name, price, date, quantity, handleCancel }) => {
  
  

  return (
    <tr className="bg-white border-b text-xs md:text-sm lg:text-sm hover:bg-gray-50">
      <th scope="row" className="px-2 py-3 md:px-6 lg:px-6 font-medium text-gray-900 whitespace-nowrap">
        {name}
      </th>
      <td className="px-2 py-3 md:px-6 lg:px-6">${price}</td>
      <th scope="row" className="px-2 py-3 md:px-6 lg:px-6 font-medium text-gray-900 whitespace-nowrap">
        {date}
      </th>
      <td className="px-2 py-3 md:px-6 lg:px-6">
        <span className={`font-medium  `}>{quantity}</span>
      </td>
       
    </tr>
  );
};

export default OrderItem;
