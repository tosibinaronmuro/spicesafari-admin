"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({chartTitle,data,color,growth,total,backgroundColor}) => {
  const chartRef = useRef(null);
const chartData=data
  useEffect(() => {
    
    const data = {
      labels: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      datasets: [{
        label: `New ${chartTitle}`,
        data:chartData,
        backgroundColor: backgroundColor,
        borderColor: color,
        borderWidth: 2,
        fill: 'start',
      }],
    };

    // Chart configuration options
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    };

    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow font-quicksand  my-3 mx-2 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900   pb-2">{total}</h5>
          <p className="text-base font-normal text-gray-500  ">{chartTitle} this week</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500    text-center">
          {growth}%
          <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t   justify-between">
        {/* ... Rest of your component ... */}
        <canvas ref={chartRef}></canvas>
        {/* ... Rest of your component ... */}
      </div>
    </div>
  );
};

export default ChartComponent;
