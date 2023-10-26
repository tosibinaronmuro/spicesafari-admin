import React from "react";
import Header from "../../../components/header";
import TableItem from "../../../components/tableItem";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useAllOrdersQuery } from "@/Store/Api_Slices/orderSlice";

const page = () => {
//  const dispatch=useDispatch()
  // const { data: dataa, isLoading } =  useAllOrdersQuery()
//   console.log(dataa)
// const user = useSelector((state) => state.auth.User.user);
  
// console.log(user)
const data = [
  {
    name: "John Bowen",
    location: "15th Adelaide St, JBurg",
    orderID: "6627819730erfa",
    order: ["sushi", "water", "salad"],
    price: "2800",
    status: "Pending",
    time: "10 secs ago",
  },
  {
    name: "Alice Johnson",
    location: "25th Oak Street, NY",
    orderID: "8921372905jkld",
    order: ["burger", "fries", "soda"],
    price: "1500",
    status: "Delivered",
    time: "1 hour ago",
  },
  {
    name: "Bob Smith",
    location: "7th Main St, Chicago",
    orderID: "3642817390sqwe",
    order: ["pasta", "wine", "cheesecake"],
    price: "3500",
    status: "Cancelled",
    time: "2 days ago",
  },
  {
    name: "Emily Davis",
    location: "12th Elm Ave, LA",
    orderID: "1098273461poiuy",
    order: ["pizza", "coke", "spaghetti"],
    price: "4200",
    status: "On-Delivery",
    time: "30 mins ago",
  },
  {
    name: "Michael Wilson",
    location: "3rd Maple Lane, Toronto",
    orderID: "5892017458zxcvb",
    order: ["sushi", "sake", "tempura"],
    price: "3200",
    status: "Pending",
    time: "5 hours ago",
  },
  {
    name: "Olivia Brown",
    location: "9th Pine Road, Sydney",
    orderID: "7328901745mnvxc",
    order: ["burger", "fries", "milkshake"],
    price: "1800",
    status: "Delivered",
    time: "3 days ago",
  },
  {
    name: "David Lee",
    location: "18th Birch Street, London",
    orderID: "2098347612lkjhg",
    order: ["pasta", "wine", "tiramisu"],
    price: "2800",
    status: "Cancelled",
    time: "1 week ago",
  },
  {
    name: "Sophia Taylor",
    location: "22nd Cedar Blvd, Paris",
    orderID: "9038712946vbnmn",
    order: ["sushi", "sake", "edamame"],
    price: "3100",
    status: "On-Delivery",
    time: "2 hours ago",
  },
  {
    name: "William Harris",
    location: "10th Oakwood Dr, Berlin",
    orderID: "1729384056asdfg",
    order: ["pizza", "coke", "spaghetti"],
    price: "4300",
    status: "Delivered",
    time: "4 days ago",
  },
  {
    name: "Ava Clark",
    location: "6th Willow Lane, Madrid",
    orderID: "7893450123mnbvc",
    order: ["burger", "fries", "soda"],
    price: "1600",
    status: "Pending",
    time: "6 hours ago",
  },
];
  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <div>
        <Header title={"Orders"} />
      </div>

      <div className="relative overflow-x-auto shadow-md p-4 font-quicksand md:p-6">
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Order details
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {data?.map((item, index) => {
            return (
              <TableItem
                key={index}
                name={item.name}
                location={item.location}
                order={item.order}
                orderID={item.orderID}
                price={item.price}
                status={item.status}
                time={item.time}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default page;
