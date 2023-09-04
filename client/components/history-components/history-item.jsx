import React from 'react'

const HistoryItem = ({name,price , date}) => {
  return (
    <tr className="bg-white border-b   hover:bg-gray-50  ">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "></input>
                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="px-2 py-3 md:px-6 lg:px-6  font-medium text-gray-900 whitespace-nowrap  ">
                       {name}
                    </th>
                    <td className="px-2 py-3 md:px-6 lg:px-6 ">
                        ${price}
                    </td>
                    <th scope="row" className="px-2 py-3 md:px-6 lg:px-6  font-medium text-gray-900 whitespace-nowrap  ">
                       {date}
                    </th>
                    <td className="px-2 py-3 md:px-6 lg:px-6 ">
                        {/* shoots a delete request */}
                    <a href="#" className="font-medium text-red-600   hover:underline">Remove</a>
                    </td>
                </tr>
  )
}

export default HistoryItem