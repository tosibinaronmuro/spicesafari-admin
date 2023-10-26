"use client";
import React, { useEffect, useRef, useState } from "react";

const ProfileModal = ({
  handleopenmodal,
  hanleclosedmodal,
  modal,
  trigger,
  modalOpen,
  text
}) => {
  // close on click outside

  return (
    <div>
      <div className="container mx-auto py-20">
        <div
          className={`fixed top-0 left-0 flex z-40  h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5`}
        >
          <div
            ref={modal}
            // onFocus={handleopenmodal}
            // onBlur={hanleclosedmodal}
            className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
          >
            <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
              {text}
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <form action="">
              <div className="flex flex-col p-2 m-2 ">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                  >
                   Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="john doe"
                    
                  ></input>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                  >
                   Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="admin@admin.com"
                    
                  ></input>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                  >
                   Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="080123456789"
                    
                  ></input>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="bio"
                    className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                  >
                   Bio
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="admin jones"
                    
                  ></input>
                </div>
                <div className="flex flex-row jusitfy-between space-x-2">
                <div className="mb-6">
                  <label
                    htmlFor="country"
                    className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                  >
                   Country
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Nigeria"
                    defaultValue={"Nigeria"}
                  ></input>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="state"
                    className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                  >
                   City/State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="F.C.T"
                     
                  ></input>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="postal"
                    className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                  >
                   Postal Code
                  </label>
                  <input
                    type="text"
                    id="postal"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="900103"
                     
                  ></input>
                </div></div>
                 </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-1/2 px-3">
                  <button
                    onClick={hanleclosedmodal}
                    className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button
                    type="submt"
                    className={`block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-primary bg-primary hover:bg-opacity-90`}
                  >
                    <p> Submit </p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
