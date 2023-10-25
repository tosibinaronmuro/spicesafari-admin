import React from "react";

const SuccessAlert = ({name,message }) => {
  return (
    <div
      id="alert-2"
      className=" col-span-10 flex justify-between items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50    "
      role="alert"
    >
      <div className="flex">
        <svg
          className="  w-4 h-4 pt-1 flex justify-center items-center"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 flex justify-center items-center text-sm font-medium">
          {message} <span className="capitalize ml-1">{name}</span>
        </div>
      </div>
      {/* <button
        type="button"
        onClick={()=>handleClose}
        className="ml-aNameuto -mx-1.5 -my-1.5 bg-red-50   text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-2"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default SuccessAlert;
