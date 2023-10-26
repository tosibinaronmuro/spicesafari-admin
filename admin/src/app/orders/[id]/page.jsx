"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../../components/header";
import OrderIdTable from "../../../../../components/orderTable";
import Ordersummary from "../../../../../components/ordersummary";
import Billingaddress from "../../../../../components/billingaddress";

const OrderItem = ({ params }) => {
  const productOrder = [
    {
      id: 1,
      name: "Burger",
      price: "2,600",
      date: "28/09/2023",
      quantity: 3,
    },
    {
      id: 2,
      name: "pizza",
      price: "4,800",
      date: "28/09/2023",
      quantity: 1,
    },
    {
      id: 3,
      name: "coke",
      price: "600",
      date: "28/09/2023",
      quantity: 4,
    },
  ];
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  const [selectedOption, setSelectedOption] = useState("Pending");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setisOpen(false);
  };
  const { query, back } = useRouter();

  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <div>
        <Header title={"Order"} />
      </div>
      <div
        onClick={() => back()}
        className="flex space-x-3 cursor-pointer mt-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary"
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
      <div className="w-fill  m-3 p-3 mx-4 md:mx-44 lg:mx-44 bg-white rounded ">
        <div className="mx-3">
          <p className="font-logoFont font-extralight  text-3xl mb-3">
            Order #jbhv2t678
          </p>
          <div className="p-3 font-quicksand  ">
            <div className="flex justify-between flex-col md:flex-row lg:flex-row ">
              <div>
                <p>{`by {name}`}</p>
                <p>{`created on {date}`}</p>
                <div className="flex space-x-2 my-4 justify-start items-center ">
              <p>Status</p>
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
                          value="Pending"
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          onChange={handleOptionChange}
                        />
                        <label
                          htmlFor="filter-radio-example-1"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                        >
                          Pending
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="filter-radio-example-1"
                          type="radio"
                          value="On-Delivery"
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          onChange={handleOptionChange}
                        />
                        <label
                          htmlFor="filter-radio-example-1"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                        >
                          On-Delivery
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="filter-radio-example-1"
                          type="radio"
                          value="Delivered"
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          onChange={handleOptionChange}
                        />
                        <label
                          htmlFor="filter-radio-example-1"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                        >
                          Delivered
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="filter-radio-example-1"
                          type="radio"
                          value="Cancelled"
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          onChange={handleOptionChange}
                        />
                        <label
                          htmlFor="filter-radio-example-1"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                        >
                          Cancelled
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              </div>
            <Billingaddress/>
            </div>
            

            <Ordersummary/>

            <div className="flex flex-col space-y-5 my-14">
              <p className="font-logoFont text-2xl">Items in order</p>
              <OrderIdTable productOrder={productOrder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;  
