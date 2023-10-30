import React from "react";

const Categories = ({ handleClick }) => {
  const Category = [
    "Drinks",
    "Snacks",
    "Burgers",
    "Pizza",
    "Pasta",
    "Rice",
    "Salads",
    "Sandwiches",
    "Desserts",
    "Beverages",
    "Coffee",
    "Appetizers",
  ];
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-between   h-auto py-3 w-fit  m-5  relative top-50 z-60 items-center rounded-lg bg-white text-center shadow-md shadow-gray/90 hover:transition-all ">
        {Category.map((item, index) => {
          return (
            <span
            // onClick={handleClick(item)} 
              key={index}
              className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 m-1.5 hover:p-1.5 hover:px-3 hover:bg-emerald-400 text-emerald-700 hover:transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-ms-1 me-1.5 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="whitespace-nowrap text-sm">{item}</p>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
