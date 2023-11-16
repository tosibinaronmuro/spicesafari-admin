"use client";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "../../next.config";

const Card = ({
  Img,
  name,
  price,
  tag,
  rating,
  linking,
  button1,
  button2,
  handleButton1,
  handleButton2,
}) => {
  return (
    <div className='  w-96'>
      <div className='group object-cover hover:transition-all transition duration-500 group-hover:scale-105 relative block  rounded-lg hover:shadow-md hover:shadow-black/20 bg-white m-3 pb-4  shadow-sm shadow-indigo-100'>
        <div className='absolute end-4 top-4 z-10 border border-primary rounded-full bg-white p-1 m-1 px-2 text-gray-900 transition hover:text-gray-900/75'>
          <span className='text-primary text-xs font-medium'>{tag}</span>

          {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg> */}
        </div>

        <img alt='Home' src={Img} className='h-56 rounded-md w-full  ' />

        <div className='mt-2'>
          <Link href={`/menu/${linking}`}>
            <div className='flex flex-col'>
              <div className='flex justify-between mx-4 m-3'>
                <dl>
                  <div>
                    <dt className='sr-only'>Name</dt>

                    <dd className='font-medium group-hover:underline group-hover:underline-offset-4'>
                      {name}
                    </dd>
                  </div>
                </dl>
                <div>
                  <dt className='sr-only'>Price</dt>

                  <dd className='text-sm text-gray-500'>${price} </dd>
                </div>
              </div>
              {/* <div className=" px-5 mb-1 text-xs h-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                repellat dolorem deserunt distinctio in quisquam, eos vero ipsa
                ipsum laudantium dolores, suscipit, maiores inventore est esse
                possimus eveniet. Obcaecati, distinctio.
              </p>
            </div> */}
              <div className='flex justify-end items-center px-2 py-2'>
                <svg
                  className='w-4 h-4 text-yellow-300 mr-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'>
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <p className='ml-2 text-sm font-bold text-gray-900 '>
                  {parseFloat(rating).toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
          <div className='flex space-x-2 mx-[10%] justify-between'>
            <button onClick={handleButton1}>
              {/* <a className="flex justify-center items-center rounded border border-primary bg-primary px-7 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="m-1 fill-current"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
                {button1}
              </a> */}

              {button1 == "favorite" ? (
                <a className='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-secondary'>
                  {/* <span className="absolute -start-full transition-all duration-500 group-hover:start-4"> */}
                  <span className=' '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='1em'
                      viewBox='0 0 576 512'
                      // className="m-1 fill-current rtl:rotate-180"
                      className='m-1 fill-current '>
                      <path d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z' />
                    </svg>
                  </span>

                  <span className='text-sm font-medium '>
                    {/* <span className="text-sm font-medium transition-all group-hover:ms-4"> */}
                    {button1}
                  </span>
                </a>
              ) : button1 == "remove" ? (
                <a
                  className='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-secondary'
                  href='/download'>
                  {/* <span className="absolute -start-full transition-all duration-500 group-hover:start-4"> */}
                  <span className=' '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='1em'
                      viewBox='0 0 576 512'
                      // className="m-1 fill-current rtl:rotate-180"
                      className='m-1 fill-current '>
                      <path d='M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
                    </svg>
                  </span>

                  <span className='text-sm font-medium'>
                    {/* <span className="text-sm font-medium transition-all group-hover:ms-4"> */}
                    {button1}
                  </span>
                </a>
              ) : null}
            </button>
            <button onClick={handleButton2}>
              {/* <a className="flex justify-center items-center rounded border border-primary px-7 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="m-1 fill-current"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                {button2}
              </a> */}
              <a className='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-secondary'>
                <span className=' '>
                  {/* <span className="absolute -end-full transition-all duration-500 group-hover:end-4"> */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 576 512'
                    // className="m-1 fill-current rtl:rotate-180"
                    className='m-1 fill-current '>
                    <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
                  </svg>
                </span>

                {/* <span className="text-sm font-medium transition-all group-hover:me-4"> */}
                <span className='text-sm font-medium '>{button2}</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
