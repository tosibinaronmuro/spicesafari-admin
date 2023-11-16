"use client";
import React from "react";
// import useState from 'react'
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { isLogOut } from "@/Store/ToolkitQuery/authStore";
import { useRouter } from "next/navigation";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const User = useSelector((state) => state.auth.User);
  console.log("Navbar", User);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(isLogOut());
    router.push("/signin");
  };
  return (
    <>
      <nav
        id='top'
        className='relative flex flex-wrap font-garmond items-center justify-between  px-2 py-3 text-tertiary bg-secondary mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full lg:ml-10 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start md:w-auto md:static md:block md:justify-start'>
            {/* <a className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/next.svg"
                alt="ISEEA Logo"
                width={90}
                height={30}
                priority
              />
            </a> */}
            <p>
              <span className='lg:text-4xl text-2xl font-logoFont text-primary'>
                SpiceSafari
              </span>{" "}
              <span className='font-logoFont'>Kitchen</span>
            </p>

            <button
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='rounded block md:hidden lg:hidden  p-2 text-tertiary transition hover:text-tertiary/75'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex md:flex flex-grow items-center max-h-0  overflow-hidden md:overflow-visible lg:overflow-visible transition-max-h ease-in-out duration-1000 " +
              (navbarOpen ? "max-h-screen" : "max-h-0")
            }>
            <ul className='flex  mt-3 lg:mt-none md:mt-none w-full lg:w-auto md:w-auto   flex-col lg:flex-row md:flex-row list-none lg:ml-auto md:ml-auto '>
              <li className=' w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300'>
                <a
                  className=' lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-7 text-sm md:text-sm lg:text-base py-2 md:px-2 md:py-2 lg:px-5 flex'
                  href='/'>
                  Home
                </a>
              </li>
              <li className=' w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300'>
                <a
                  className=' lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-7 text-sm md:text-sm lg:text-base py-2 md:px-2 md:py-2 lg:px-5 flex'
                  href='/menu'>
                  Menu
                </a>
              </li>
              {/* logic with teneary operator to check isloggedin before displaying favorites */}
              <li className=' w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300'>
                <a
                  className=' lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-7 text-sm md:text-sm lg:text-base py-2 md:px-2 md:py-2 lg:px-5 flex'
                  href='/favorites'>
                  Favorites
                </a>
              </li>
              <li className=' w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300'>
                <a
                  className=' lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-7 text-sm md:text-sm lg:text-base py-2 md:px-2 md:py-2 lg:px-5 flex'
                  href='/cart'>
                  Cart
                </a>
              </li>
              <li className=' w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300'>
                <a
                  className=' lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-7 text-sm md:text-sm lg:text-base py-2 md:px-2 md:py-2 lg:px-5 flex'
                  href='/orders'>
                  Orders
                </a>
              </li>
              {/* <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-7 text-sm md:text-sm lg:text-base py-2 md:px-2 md:py-2 lg:px-5 flex"
                  href="/signin"
                >
                  Sign in
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="mx-1 flex justify-center items-center" viewBox="0 0 512 512"> <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                </a>
              </li> */}
              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-7 py-2 md:px-3 lg:px-7  hover:bg-gray-100   w-full lg:w-auto transition ease-in-out delay-150  text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300'>
                    <span className=' lg:inline-flex lg:w-auto w-full text-sm md:text-sm lg:text-base   rounded items-center   text-tertiary transition hover:text-tertiary/75  flex'>
                      {" "}
                      Account{" "}
                    </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className='mt-2 space-y-1 px-4 lg:absolute transition-max-h ease-in-out duration-1000 bg-secondary lg:z-40'>
                    {User ? (
                      <>
                        <li>
                          <a
                            href='/profile'
                            className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                            Profile
                          </a>
                        </li>

                        <li>
                          <button
                            onClick={handleLogout}
                            type='submit'
                            className='w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700'>
                            Log out
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <a
                            href='/signin'
                            className='block rounded-lg  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                            Sign in
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                </details>
              </li>

              <li>
                <button>
                  {/* <a
                    className="group relative inline-block focus:outline-none focus:ring"
                    href="/donate"
                  >
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative  inline-block border-2 border-current font-Poiret font-semibold px-4 py-2 text-sm   uppercase tracking-widest text-tertiary group-active:text-opacity-75">
                    Reservations
                    </span>
                  </a> */}
                  <a
                    className='inline-block rounded-full border border-primary px-8 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring  '
                    href='/download'>
                    Reservations
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
