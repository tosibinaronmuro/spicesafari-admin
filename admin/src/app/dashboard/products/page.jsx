import React from "react";
import Header from "../../../../components/header";
import ProductTable from "../../../../components/productTable";

const page = () => {
  const data=[
    {
      "Product ID": "A1b2C",
      "Product Name": "Spaghetti Bolognese",
      "Category": "Pasta",
      "Price": 12.99,
      "Quantity": 3
    },
    {
      "Product ID": "X3yZ7",
      "Product Name": "Chicken Alfredo",
      "Category": "Pasta",
      "Price": 14.99,
      "Quantity": 4
    },
    {
      "Product ID": "K9pQ2",
      "Product Name": "Margherita Pizza",
      "Category": "Pizza",
      "Price": 10.99,
      "Quantity": 2
    },
    {
      "Product ID": "D4eE1",
      "Product Name": "Caesar Salad",
      "Category": "Salad",
      "Price": 7.99,
      "Quantity": 5
    },
    {
      "Product ID": "P5oF8",
      "Product Name": "Hamburger",
      "Category": "Burger",
      "Price": 9.99,
      "Quantity": 6
    },
    {
      "Product ID": "Z0vY4",
      "Product Name": "Chocolate Brownie",
      "Category": "Dessert",
      "Price": 5.99,
      "Quantity": 8
    },
    {
      "Product ID": "G7sK1",
      "Product Name": "Green Smoothie",
      "Category": "Beverage",
      "Price": 3.49,
      "Quantity": 10
    },
      {
        "Product ID": "R3sT7",
        "Product Name": "Chicken Tacos",
        "Category": "Mexican",
        "Price": 9.49,
        "Quantity": 4
      },
      {
        "Product ID": "L8zW1",
        "Product Name": "Greek Salad",
        "Category": "Salad",
        "Price": 8.99,
        "Quantity": 5
      },
      {
        "Product ID": "M2aB6",
        "Product Name": "BBQ Ribs",
        "Category": "BBQ",
        "Price": 16.99,
        "Quantity": 3
      },
      {
        "Product ID": "S4pQ9",
        "Product Name": "Mushroom Risotto",
        "Category": "Italian",
        "Price": 11.99,
        "Quantity": 2
      },
      {
        "Product ID": "W5vD8",
        "Product Name": "Sushi Platter",
        "Category": "Japanese",
        "Price": 18.99,
        "Quantity": 1
      },
      {
        "Product ID": "N9xY2",
        "Product Name": "Cheesecake",
        "Category": "Dessert",
        "Price": 6.99,
        "Quantity": 6
      },
      {
        "Product ID": "C7bA4",
        "Product Name": "Fried Chicken",
        "Category": "Fast Food",
        "Price": 8.49,
        "Quantity": 7
      },
      {
        "Product ID": "F2oO9",
        "Product Name": "Veggie Stir-Fry",
        "Category": "Asian",
        "Price": 10.49,
        "Quantity": 5
      },
      {
        "Product ID": "J4eK7",
        "Product Name": "Pancakes",
        "Category": "Breakfast",
        "Price": 7.99,
        "Quantity": 8
      },
      {
        "Product ID": "A1hN8",
        "Product Name": "Tiramisu",
        "Category": "Dessert",
        "Price": 6.99,
        "Quantity": 4
      },
      {
        "Product ID": "X9sT3",
        "Product Name": "Beef Burrito",
        "Category": "Mexican",
        "Price": 10.99,
        "Quantity": 3
      },
      {
        "Product ID": "P5iF6",
        "Product Name": "Vegetable Soup",
        "Category": "Soup",
        "Price": 5.99,
        "Quantity": 9
      },
      {
        "Product ID": "B7qL2",
        "Product Name": "Grilled Salmon",
        "Category": "Seafood",
        "Price": 13.99,
        "Quantity": 3
      },
      {
        "Product ID": "K0vR8",
        "Product Name": "Mango Smoothie",
        "Category": "Beverage",
        "Price": 4.49,
        "Quantity": 10
      }
    
    
  ]
  
  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <div>
        <Header title={"Products"} />
      </div>
      <div>
        <div className="w-fill items-center flex justify-end mx-5  ">
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
              <path
                d="M12 15.5V8.5"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            New Products
          </button>
        </div>
        <div className="w-fill  m-3 p-3 mx- bg-white rounded ">
<div className="flex flex-col">
  
<form className="flex items-center">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-Width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  " placeholder="Search product name..." required></input>
    </div>
    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary  ">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-Width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>
<div className="relative overflow-x-auto shadow-md p-4 font-quicksand md:p-6">
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product ID
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 flex justify-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {data.map((item, index) => {
            return (
              <ProductTable productID={item["Product ID"]} productName={item["Product Name"]} category={item.Category} price={item.Price} quantity={item.Quantity}/>
            );
          })}
        </table>
      </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default page;
