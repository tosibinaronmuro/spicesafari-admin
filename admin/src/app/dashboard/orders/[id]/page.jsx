"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../../components/header";
import OrderIdTable from "../../../../../components/orderTable";
import Ordersummary from "../../../../../components/ordersummary";
import Billingaddress from "../../../../../components/billingaddress";
import {
  useSingleOrderQuery,
  useUpdateOrderMutation,
} from "@/Store/Api_Slices/orderSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const OrderItem = ({ params }) => {
  const dispatch = useDispatch();
  const { back } = useRouter();
  const [updateOrder, { isLoading: updateloading, isSuccess }] =
    useUpdateOrderMutation();
  const { data, isLoading } = useSingleOrderQuery({ id: params.id });
  const [isOpen, setisOpen] = useState(false);
  const statusRef = useRef();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  }
  const { token } = useSelector((state) => state.auth.User);

  const toggle = () => {
    setisOpen(!isOpen);
  };
 

  const handleUpdateOrder = async (event, id) => {
    const statusvalue = statusRef.current.value;

    setisOpen(false);
    try {
      dispatch(
        await updateOrder(
          { id: data._id, body: { status: statusvalue } },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).unwrap()
      );
    } catch (error) {
      if (error.data && error.data.msg) {
        setIsError(true);
        console.log(error);
        setErrorMessage(error.data.msg);
        if (error.data.msg === "Error: Invalid public key, retry login") {
          router.push("/signin");
        } else {
          console.log("error");
        }
      } else {
        setErrorMessage("An error occurred");
      }
    }
  };
  let statusColor = " ";
  let statusBGColor = " ";

  switch (data?.status) {
    case "On-Delivery":
      statusColor = "text-purple-600";
      statusBGColor = "bg-purple-100";
      break;
    case "Pending":
      statusColor = "text-yellow-600";
      statusBGColor = "bg-yellow-100";
      break;

    case "Delivered":
      statusColor = "text-green-600";
      statusBGColor = "bg-green-100";

      break;
    case "Cancelled":
      statusColor = "text-red-600";
      statusBGColor = "bg-red-100";

      break;
    default:
      statusColor = "text-yellow-600";
      statusBGColor = "bg-yellow-100";

      break;
  }
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
      {isLoading ? (
        <div className="flex m-auto justify-center items-center h-[60vh]">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="w-fill  m-3 p-3 mx-4 md:mx-44 lg:mx-44 bg-white rounded ">
          <div className="mx-3">
            <p className="font-logoFont font-extralight  text-3xl mb-3">
              Order {data?._id}
            </p>
            <div className="p-3 font-quicksand  ">
              <div className="flex justify-between flex-col md:flex-row lg:flex-row ">
                <div>
                  <p>by {data?.userId.name}</p>
                  <p>created on {formatDate(data?.createdAt)}</p>
                  <div className="flex space-x-2 my-4 justify-start items-center ">
                    <p>Status</p>
                    {updateloading ?<div role="status">
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>:<div className={`whitespace-nowrap rounded-full  ${statusColor}   ${statusBGColor}  w-fit px-2.5 py-0.5 text-sm`}>
                       {data?.status}
                    </div>}
                  </div>
                  <div className="flex space-x-2 my-4 justify-start items-center ">
                    <p>Change Status</p>
                    <div>
                      <div>
                        <select
                          name="HeadlineAct"
                          id="HeadlineAct"
                          className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
                            
                          onChange={handleUpdateOrder}
                          ref={statusRef}
                        >
                          <option className="z-10 block absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow" value=" "> </option>
                          <option className="z-10 block absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow" value="Pending">Pending</option>
                          <option className="z-10 block absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow" value="On-Delivery">On-Delivery</option>
                          <option className="z-10 block absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow" value="Delivered">Delivered</option>
                          <option className="z-10 block absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow" value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <Billingaddress
                  userId={data?.userId}
                  lcation={data?.location}
                />
              </div>

              <Ordersummary
                price={data?.price}
                number={data?.products.length}
              />

              <div className="flex flex-col space-y-5 my-14">
                <p className="font-logoFont text-2xl">Items in order</p>
                <OrderIdTable productOrder={data?.products} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
