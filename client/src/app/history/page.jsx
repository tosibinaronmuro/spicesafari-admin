"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HistoryItem from "../../../components/history-components/history-item";

const page = () => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  const [selectedOption, setSelectedOption] = useState("Last 30 days");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setisOpen(false);
  };
  const customStyle = {
    position: "absolute",
    inset: "auto auto 0px 0px",
    margin: "0px",
    transform: "translate3d(522.5px, 3847.5px, 0px)",
  };
  return (
    <div className=" min-h-[70vh] p-3 md:p-10 lg:p-10">
      <div
        onClick={() => router.back()}
        className="flex space-x-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" fill-current"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
        <span>Back</span>
      </div>
      <div className="flex justify-center items-center text-xl my-5">
        
        Order History
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          <div>
            <button
              onClick={toggle}
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className=" inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              {selectedOption}
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 md:mx-2 lg:mx-2  w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <div
              id="dropdownRadio"
              className={
                isOpen
                  ? "z-10 block absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
                  : "hidden"
              }
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value="Last day"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                    >
                      Last day
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value="Last 7 days"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                    >
                      Last 7 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value="Last month"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                    >
                      Last month
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value="Last year"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                    >
                      Last year
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500  "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-56 md:w-80 lg:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for items"
            ></input>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
              <th scope="col" className="p-2 lg:p-4 md:p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  ></input>
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <HistoryItem name={"Burger"} price={20} date={"28/09/2023"} />
            <HistoryItem name={"Burger"} price={20} date={"28/09/2023"} />
            <HistoryItem name={"Burger"} price={20} date={"28/09/2023"} />
            <HistoryItem name={"Burger"} price={20} date={"28/09/2023"} />
            <HistoryItem name={"Burger"} price={20} date={"28/09/2023"} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
