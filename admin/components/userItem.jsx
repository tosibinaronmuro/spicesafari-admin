"use client"
import React, {useState} from "react";
import { useSuspendUserMutation } from "@/Store/Api_Slices/userSlice";
import { useDispatch,useSelector } from "react-redux";

const UserListItem = ({ user }) => { 
  const dispatch = useDispatch();
   const [suspendUser, {isLoading}]=useSuspendUserMutation()
   const { token } = useSelector((state) => state.auth.User);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };
  console.log(user )
  const handleSuspend= async ()=>{
    try {
      dispatch(
        await suspendUser(
          { id: user._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).unwrap()
       
      );
      console.log("done")
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
  }
      
    return (
  <tr className="bg-white border-b     hover:bg-gray-50  ">
    <th
      scope="row"
      className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
    >
      {/* <img
        className="w-10 h-10 rounded-full"
        src={`/docs/images/people/profile-picture-${user.id}.jpg`}
        alt={`${user.name} image`}
      /> */}
      <div className="pl-3">
        <div className="text-base font-semibold">{user.name}</div>
        <div className="font-normal text-gray-500">{user.email}</div>
      </div>
    </th>
    <td className="px-6 py-4 capitalize">{user.role}</td>
    <td className="px-6 py-4">
      <div className="flex items-center">
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            !user.isSuspended   ? "bg-green-500" : "bg-red-500"
          } mr-2`}
        ></div>
        {!user.isSuspended   ? "Active" : "Suspended"}
      </div>
    </td>
    <td className="px-6 py-4">
      <div onClick={handleSuspend} className={`cursor-pointer  ${user.isSuspended   ? "text-blue-500" : "text-red-500"}`}>
      {isLoading ? (
         
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-5 h-5 flex justify-center mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
      ) : ( !user.isSuspended   ? "Suspend User" : "Unsuspend User")}
      </div>
    
    </td>
  </tr>
);
}
export default UserListItem
