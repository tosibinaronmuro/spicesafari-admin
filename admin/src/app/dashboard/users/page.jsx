 "use client"
import React from "react";
import UserListItem from "../../../../components/userItem";
import Header from "../../../../components/header";
import { useViewAllusersQuery } from "@/Store/Api_Slices/userSlice";

 


const UserList = () => {
  const { data , isLoading } =  useViewAllusersQuery()
  console.log(data?.users)
  return (
    <div className='overflow-y-scroll max-h-[100vh]'> 
    <div>
        <Header title={"Users"}/>
    </div>
    {/* ... (dropdown button and search input) */}
    {/* admin users */}
    <div className="relative overflow-x-auto shadow-md min-h-[100dvh] p-4 font-quicksand md:p-6">
    <table className="w-full     text-sm text-left text-gray-500 ">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
      <tbody>
        {data?.users.map((user,index) => (
          <UserListItem key={index} user={user} />
        ))}
      </tbody>
    </table>
    </div>
  </div>
);
}

export default UserList;


 