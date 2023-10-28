"use client";
import Header from "../../../components/header";

import Chart from "../../../components/chart";
import ActiveCharts from "../../../components/ActiveCharts";
import OrderTable from "../../../components/table";

import { useDispatch } from "react-redux";
import { useAllOrdersQuery } from "@/Store/Api_Slices/orderSlice";
import OrderSkeleton from "../../../components/skeletons/orderSkeleton";

const Page = () => {
  const dispatch = useDispatch();
  const { data: data, isLoading } = useAllOrdersQuery();

  return (
    <div className='overflow-y-scroll max-h-[100vh]'>
      <Header title={"Dashboard"} />
      <div className='px-5 mt-3 space-y-3'>
        <p className=' font-logoFont'>Live Activity</p>
        {/* <ActiveCharts /> */}
      </div>
      <div className='px-5 mt-3 space-y-3'>
        <p className=' font-logoFont'>Recent Orders</p>
        <OrderTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Page;
