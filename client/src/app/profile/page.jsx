"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Edit from "../../../components/buttons/edit";
import ProfileModal from "../../../components/modals/prodileModal";
import RouteProctector from "@/Store/RouteProtector";
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
    <RouteProctector>
      <div className=' min-h-[70vh] p-3 md:p-10 lg:p-10'>
        <div
          onClick={() => router.back()}
          className='flex space-x-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className=' fill-current'
            height='1em'
            viewBox='0 0 512 512'>
            <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z' />
          </svg>
          <span>Back</span>
        </div>
        <div className='flex justify-center items-center text-2xl text-primary my-5'>
          Your Profile
        </div>
        <div className=' flex flex-col space-y-5 m-auto bg-white p-3 rounded-2xl lg:max-w-[70%]'>
          <div className='bg-white border rounded-2xl p-5 '>
            <div className='flex justify-between'>
              <p className='font-logoFont '>Personal Information</p>
              <div ref={trigger}>
                {" "}
                <Edit
                  text={"Edit Profile"}
                  handlemodal={() => setModalOpen(true)}
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row m-2 space-x-3 md:space-x-3 lg:space-x-10 px-2 md:px-5 lg:px-10 '>
              <div>
                <img
                  className='  w-full h-72 rounded-t-lg object-cover '
                  src='https://imgs.search.brave.com/BYh3RHJpTE5W_UUeJ_UlhcqVJsLYz4J4YWi0yko4eRE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNS8yMi8zNy9i/bGFuay1wcm9maWxl/LXBpY3R1cmUtOTcz/NDYwXzEyODAucG5n'
                  alt=''
                />
              </div>
              <div className=' lg:p-5 md:p-2 p-2 grid  lg:grid-cols-2 md:grid-cols-2 gap-4'>
                <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                  <p className='text-gray-400 text-xs'>First Name </p>
                  <p className=' '>Tosiron </p>
                </div>
                <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                  <p className='text-gray-400 text-xs'>Last Name </p>
                  <p className=' '>Jegede </p>
                </div>
                <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                  <p className='text-gray-400 text-xs'>E-mail </p>
                  <p className=' '>Tosiron@spicesafari.com </p>
                </div>
                <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                  <p className='text-gray-400 text-xs'>Phone </p>
                  <p className=' '>+234 123 456 7890 </p>
                </div>
                <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                  <p className='text-gray-400 text-xs'>Bio </p>
                  <p className=' '>Foodie </p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white border rounded-2xl p-5 '>
            <div className='flex justify-between'>
              <p className='font-logoFont '>Address</p>
            </div>
            <div className=' p-5 grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4'>
              <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                <p className='text-gray-400 text-xs'>Country</p>
                <p className=' '>Nigeria </p>
              </div>
              <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                <p className='text-gray-400 text-xs'>City/State </p>
                <p className=' '>Kuje,FCT </p>
              </div>
              <div className='text-sm flex flex-col space-y-2 my-2 lg:mx-3 md:mx-3 mx-1'>
                <p className='text-gray-400 text-xs'>Postal Code</p>
                <p className=' '>900103</p>
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
    </RouteProctector>
  );
};

export default page;
