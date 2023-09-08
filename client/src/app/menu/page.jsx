"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HistoryItem from "../../../components/history-components/history-item";
import Search from "../../../components/search-component";
import Categories from "../../../components/categories";
import Card from "../../../components/menu-components/card";

const page = () => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  const [selectedOption, setSelectedOption] = useState("Last 30 days");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setisOpen(false);
  };
  const customStyle = {
    position: "absolute",
    inset: "auto auto 0px 0px",
    margin: "0px",
    transform: "translate3d(522.5px, 3847.5px, 0px)",
  };
  return (
    <div className=" min-h-[70vh] p-3 md:p-10 lg:p-10">
      <div
        onClick={() => router.back()}
        className="flex space-x-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary"
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
      <div className="flex justify-center items-center text-2xl text-primary my-5">
        
       Our menu
      </div>
      <div>
      <div className="  flex justify-center items-center">
       <Search/>
       </div>
       <div className="flex justify-start pl-[10%] items-center text-xl text-primary my-5">
        
       Categories
      </div>
       <Categories/>
      </div>
      <div>
      <div className="flex justify-start pl-[10%] items-center text-xl text-primary my-5">
        
       {`{Search Query}`}
       </div>
        
        {/* map function here */}
        <div className="flex flex-wrap justify-center w-full px-[5%]">
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
        <Card button1={'favorite'} button2={"order"}/>
         
      </div>
      </div>
    </div>
  );
};

export default page;
