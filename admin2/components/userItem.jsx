"use client"
import React, {useState} from "react";

const UserListItem = ({ user }) => { 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };
  
      
    return (
  <tr className="bg-white border-b     hover:bg-gray-50  ">
    <th
      scope="row"
      className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
    >
      {/* <img
        className="w-10 h-10 rounded-full"
        src={`/docs/images/people/profile-picture-${user.id}.jpg`}
        alt={`${user.name} image`}
      /> */}
      <div className="pl-3">
        <div className="text-base font-semibold">{user.name}</div>
        <div className="font-normal text-gray-500">{user.email}</div>
      </div>
    </th>
    <td className="px-6 py-4">{user.position}</td>
    <td className="px-6 py-4">
      <div className="flex items-center">
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            user.status === "Active" ? "bg-green-500" : "bg-red-500"
          } mr-2`}
        ></div>
        {user.status}
      </div>
    </td>
    <td className="px-6 py-4">
    <div className="relative inline-block">
      <button
        id="dropdownMenuIconButton"
         
        onClick={handleDropdownToggle}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100  "
        type="button"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
          
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          id="dropdownHover"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseLeave}
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44   absolute right-0 mt-2"
        >
          <ul
            className="py-2 text-sm text-gray-700  "
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100  "
              >
                View User
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100  "
              >
                Suspend User
              </a>
            </li>
            
          </ul>
        </div>
      )}
    </div>
    </td>
  </tr>
);
}
export default UserListItem
