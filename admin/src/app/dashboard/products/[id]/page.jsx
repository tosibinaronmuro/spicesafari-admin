"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../../components/header";

const page = () => {
  const { query, back } = useRouter();
  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <div>
        <Header title={"Product"} />
      </div>
      <div
        onClick={() => back()}
        className="flex space-x-3 mt-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary"
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
        <div className="mx-3 flex justify-between items-center">
          <p className="font-logoFont font-extralight  text-3xl mb-3">
            Product #A1B2c
          </p>
          <div className="flex space-x-2">
            <button className=" text-gray-500 m-5 border  focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.7002 16.25C19.0002 17.33 19.8402 18.17 20.9202 18.47"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C13.0402 15 14.0402 15.15 14.9702 15.43"
                  stroke="gray"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Edit Product</p>
            </button>

            <button
              type="button"
              className="text-white m-5 bg-primary  focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  "
            >
              <svg
                className="w-5 h-5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 12H15.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* <path
                d="M12 15.5V8.5"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              /> */}
              </svg>
              Delete Product
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row m-2 space-x-3 md:space-x-3 lg:space-x-10 px-2 md:px-5 lg:px-10 ">
          <div className="flex flex-col">
            <img
              className="  w-full h-72 rounded-t-lg object-cover "
              src="https://imgs.search.brave.com/BYh3RHJpTE5W_UUeJ_UlhcqVJsLYz4J4YWi0yko4eRE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNS8yMi8zNy9i/bGFuay1wcm9maWxl/LXBpY3R1cmUtOTcz/NDYwXzEyODAucG5n"
              alt=""
            />

            <div className="flex space-x-3 p-3 justify-center">
              <div>
                <img
                  data-tooltip-target="tooltip-roberta"
                  className="w-10 h-10 rounded bg-gray-500"
                  src="/docs/images/people/profile-picture-4.jpg"
                  alt=" "
                ></img>
              </div>
              <div>
                <img
                  data-tooltip-target="tooltip-roberta"
                  className="w-10 h-10 rounded bg-gray-500"
                  src="/docs/images/people/profile-picture-4.jpg"
                  alt=" "
                ></img>
              </div>
              <div>
                <img
                  data-tooltip-target="tooltip-roberta"
                  className="w-10 h-10 rounded bg-gray-500"
                  src="/docs/images/people/profile-picture-4.jpg"
                  alt=" "
                ></img>
              </div>
            </div>
          </div>
          <div>
            <div className="flex space-y-2 flex-col">
              <div>

                <p className="text-gray-400 text-xs">Category </p>
                <p className="text-gray-600">Pasta</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Name </p>
                <p className="font-logoFont text-xl">Spaghetti Bolonese</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Price </p>
                <p className="font-logoFont text-primary  text-xl">$2,300</p>
              </div>
            </div>

            <div className="flex space-x-3 mt-3">
              <div className="flex flex-col">
                <p className="text-gray-400 text-xs">Rating </p>
                <p className="ml-2 text-sm font-bold text-gray-900 ">4.95</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-400 text-xs">Reviewers </p>

                <p className="text-sm font-medium text-gray-900 underline hover:no-underline  ">
                  73 reviews
                </p>
              </div>
            </div>
            <div className="flex my-4 flex-col">
            <p className="text-gray-400 text-xs">Description </p>
            <p className="text-sm w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime eaque minus quisquam quam veritatis quibusdam blanditiis earum consectetur odio fugiat aspernatur qui recusandae exercitationem explicabo, ipsa adipisci architecto soluta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
