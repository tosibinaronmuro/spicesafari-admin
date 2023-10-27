"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderSkeleton = () => {
  return (
    <tbody>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
      <tr className="bg-white border-b cursor-pointer hover:bg-gray-100 font-quicksand ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4 flex,flex-col">
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="flex space-x-1 text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
          <div className="text-xs">
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className={`px-6 py-4 `}>
          <div
            className={`whitespace-nowrap rounded-full    w-fit px-2.5 py-0.5 text-sm`}
          >
            <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderSkeleton;
