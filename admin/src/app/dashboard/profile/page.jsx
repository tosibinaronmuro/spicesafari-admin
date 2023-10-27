"use client";
import React, { useState,useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../../components/header";
import Edit from "../../../../components/buttons/edit";
import ProfileModal from "../../../../components/modals/profileModal";
const page = () => {

  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);
// close on click outside
useEffect(() => {
  const clickHandler = ({ target }) => {
    if (!modal.current) return;
    if (
      !modalOpen ||
      modal.current.contains(target) ||
      trigger.current.contains(target)
    )
      return;
    setModalOpen(false);
  };
  document.addEventListener("click", clickHandler);
  return () => document.removeEventListener("click", clickHandler);
});
  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className=" overflow-y-scroll max-h-[100vh]  ">
     <div>
        <Header title={"Profile"} />
      </div>
      <div className=" flex flex-col space-y-5  m-5 ">
        <div className="bg-white border rounded-2xl p-5 ">
          <div className="flex justify-between">
            <p className="font-logoFont ">Personal Information</p>
            <div ref={trigger}> <Edit text={"Edit Profile"}  handlemodal={() => setModalOpen(true)} /></div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row m-2 space-x-3 md:space-x-3 lg:space-x-10 px-2 md:px-5 lg:px-10 ">
            <div>
              <img
                className="  w-full h-72 rounded-t-lg object-cover "
                src="https://imgs.search.brave.com/BYh3RHJpTE5W_UUeJ_UlhcqVJsLYz4J4YWi0yko4eRE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNS8yMi8zNy9i/bGFuay1wcm9maWxl/LXBpY3R1cmUtOTcz/NDYwXzEyODAucG5n"
                alt=""
              />
            </div>
            <div className=" lg:p-5 md:p-2 p-2 grid  lg:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">First Name </p>
                <p className=" ">Tosiron </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Last Name </p>
                <p className=" ">Jegede </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">E-mail </p>
                <p className=" ">Tosiron@spicesafari.com </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Phone </p>
                <p className=" ">+234 123 456 7890 </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Bio </p>
                <p className=" ">Foodie </p>
              </div>
            </div>
          </div>
        </div> 
        <div className="bg-white border rounded-2xl p-5 ">
          <div className="flex justify-between">
            <p className="font-logoFont ">Address</p>
            {/* <div>
            <Edit text={"Edit Profile"}/>
            </div> */}
          </div>
          <div className=" p-5 grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Country</p>
                <p className=" ">Nigeria </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">City/State </p>
                <p className=" ">Kuje,FCT </p>
              </div>
              <div className="text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1">
                <p className="text-gray-400 text-xs">Postal Code</p>
                <p className=" ">900103</p>
              </div>
              
            </div>
        </div>
      </div> 
      
      {modalOpen ? (
        <ProfileModal
          modalOpen={modalOpen}
          handleopenmodal={() => setModalOpen(true)}
          hanleclosedmodal={() => setModalOpen(false)}
          trigger={trigger}
          modal={modal}
          text={"Edit Profile"}
        />
      ) : null}
    </div>
  );
};

export default page;
