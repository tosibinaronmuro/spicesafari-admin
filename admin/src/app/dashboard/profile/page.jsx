"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../components/header";
const page = () => {
  const router = useRouter();
  return (
    <div className=" overflow-y-scroll max-h-[100vh]  ">
     <div>
        <Header title={"Profile"} />
      </div>
      <div className=" flex flex-col space-y-5  m-5 ">
        <div className="bg-white border rounded-2xl p-5 ">
          <div className="flex justify-between">
            <p className="font-logoFont ">Personal Information</p>
            <div>
              <button className="flex text-sm text-gray-500 justify-center items-center border-2 rounded-2xl p-2 px-4">
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
                <p>edit</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row m-2 space-x-3 md:space-x-3 lg:space-x-10 px-2 md:px-5 lg:px-10 ">
            <div>
              <img
                className="  w-full h-72 rounded-t-lg object-cover "
                src="https://imgs.search.brave.com/BYh3RHJpTE5W_UUeJ_UlhcqVJsLYz4J4YWi0yko4eRE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNS8yMi8zNy9i/bGFuay1wcm9maWxl/LXBpY3R1cmUtOTcz/NDYwXzEyODAucG5n"
                alt=""
              />
            </div>
            <div className=" lg:p-5 md:p-2 p-2 grid  lg:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">First Name </p>
                <p className=" ">Tosiron </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Last Name </p>
                <p className=" ">Jegede </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">E-mail </p>
                <p className=" ">Tosiron@spicesafari.com </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Phone </p>
                <p className=" ">+234 123 456 7890 </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Bio </p>
                <p className=" ">Foodie </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded-2xl p-5 ">
          <div className="flex justify-between">
            <p className="font-logoFont ">Address</p>
            <div>
              <button className="flex text-sm text-gray-500 justify-center items-center border-2 rounded-2xl p-2 px-4">
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
                <p>edit</p>
              </button>
            </div>
          </div>
          <div className=" p-5 grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Country</p>
                <p className=" ">Nigeria </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">City/State </p>
                <p className=" ">Kuje,FCT </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Postal Code</p>
                <p className=" ">900103</p>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
