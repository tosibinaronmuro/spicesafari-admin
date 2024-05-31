"use client"
import React from 'react'
// import { useLogoutQuery } from "../src/app/Store/Api_Slices/authSlice";
// import { isLogOut } from "../src/app/Store/ToolkitQuery/authStore";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Sidenav = () => {
  // const router=useRouter()
  // const dispatch = useDispatch();
  // const {Logout} = useLogoutQuery();
  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     dispatch(isLogOut(await Logout));
  //     router.push("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const user = useSelector((state) => state.auth.User?.admin||"");
 
  return (
    <div className="flex h-screen font-quicksand  flex-col justify-between border-e bg-white">
    <div className="px-4 py-6">
      <div
        className="grid h-auto  place-content-center rounded-lg bg-gray-100 text-xs  "
      >
       <div className="mx-auto flex flex-col justify-center items-center p-2  ">
               
                <span className="lg:text-xl text-lg font-logoFont text-primary">
                  SpiceSafari
                </span> 
                <span className="font-logoFont">Kitchen</span>
             

              
            </div>
      </div>
  
      <ul className="mt-6 space-y-1">
        <li>
          <a
            href="/dashboard/"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            Dashboard
          </a>
        </li>
  
       
        <li>
          <a
            href="/dashboard/orders"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Orders
          </a>
        </li>
  
        <li>
          <a
            href="/dashboard/products"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/dashboard/users"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Users
          </a>
        </li>
  
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Account </span>
  
              <span
                className="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
  
            <ul className="mt-2 space-y-1 px-4">
              <li>
                <a
                  href="/dashboard/profile"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Profile
                </a>
              </li>
  
              
  
              <li>
                <div
                //  onClick={handleLogout}
                  >
                  <button
                    
                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  
    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-10 w-10 rounded-full object-cover"
        />
  
        <div>
          <p className="text-xs">
            <strong className="block font-medium">{user?.name||"default"}</strong>
  
            <span>{ user?.email||"default@default.com"}</span>
          </p>
        </div>
      </a>
    </div>
  </div>
  )
}

export default Sidenav