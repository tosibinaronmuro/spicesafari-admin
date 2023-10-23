import React from 'react';

const HistoryItem = ({ name, price, date, status, handleCancel }) => {
  let statusColor = '';
  let actionText = '';

  switch (status) {
    case 'Pending':
        statusColor = 'blue-600';
        actionText='Cancel-Order';
        break;
      case 'On-Delivery':
        statusColor = 'purple-600';
        actionText='Cancel-Order';
        break;
      case 'Delivered':
        statusColor = 'green-600';
        actionText='Remove';
        break;
      case 'Cancelled':
        statusColor = 'red-600';
        actionText='Remove';
        break;
      default:
        statusColor = 'blue-600';
        actionText='Remove';
        break;
  }

  const handleAction = () => {
    if (status === 'Pending' || status === 'On-Delivery') {
      handleCancel(
        
      ); 
    } else {
      
    }
  };

  return (
    <tr className="bg-white border-b text-xs md:text-sm lg:text-sm hover:bg-gray-50">
      <th scope="row" className="px-2 py-3 md:px-6 lg:px-6 font-medium text-gray-900 whitespace-nowrap">
        {name?.map((name,index)=>{
          return <p key={index}>{name.title}</p>
        })}
      </th>
      <td className="px-2 py-3 md:px-6 lg:px-6">${price}</td>
      <th scope="row" className="px-2 py-3 md:px-6 lg:px-6 font-medium text-gray-900 whitespace-nowrap">
        {date}
      </th>
      <td className="px-2 py-3 md:px-6 lg:px-6">
        <span className={`font-medium text-${statusColor}`}>{status}</span>
      </td>
      <td className="px-2 py-3 md:px-6 lg:px-6">
        <button onClick={handleAction} className={`font-medium text-red-600 hover:underline`}>
          {actionText}
        </button>
      </td>
    </tr>
  );
};

export default HistoryItem;
