import React from "react";
import ChartComponent from "./chart";

const ActiveCharts = () => {
  const orderData = [
    {
      chartTitle: "Users",
      growth: "12",
      data: [65, 64, 56, 26, 35, 56],
      total: 362,
      color: "purple",
      backgroundColor: "rgb(233 213 255)",
    },
    {
      chartTitle: "Orders",
      growth: "35",
      data: [15, 14, 17, 26, 12, 25],
      total: 116,
      color: "green",
      backgroundColor: "rgb(187 247 208)",
    },
    {
      chartTitle: "Products",
      growth: "27",
      data: [15, 16, 17, 26, 27, 30],
      total: 30,
      color: "blue",
      backgroundColor: "rgb(191 219 254)",
    },
  ];
  return (
    <div className=' flex     flex-wrap my-3 justify-start items-center '>
      {orderData.map((data) => {
        return (
          <ChartComponent
            chartTitle={data.chartTitle}
            growth={data.growth}
            data={data.data}
            color={data.color}
            total={data.total}
            backgroundColor={data.backgroundColor}
          />
        );
      })}
    </div>
  );
};

export default ActiveCharts;
