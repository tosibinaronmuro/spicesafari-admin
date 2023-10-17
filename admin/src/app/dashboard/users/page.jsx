 
import React from "react";
import UserListItem from "../../../../components/userItem";
import Header from "../../../../components/header";

const users = [
  {
    id: 1,
    name: "Neil Sims",
    email: "neil.sims@spicesafari.com",
    position: "React Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Bonnie Green",
    email: "bonnie@spicesafari.com",
    position: "Designer",
    status: "Active",
  },
  {
    id: 3,
    name: "Michelle Ogbe",
    email: "jese@spicesafari.com",
    position: "Vue JS Developer",
    status: "Active",
  },
  {
    id: 4,
    name: "Oyinlade oluwafeyikemi",
    email: "thomes@spicesafari.com",
    position: "UI/UX Engineer",
    status: "Active",
  },
  {
    id: 5,
    name: "Jacob Banks",
    email: "leslie@spicesafari.com",
    position: "SEO Specialist",
    status: "Suspended",
  },
];


const UserList = () => (
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
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
    </div>
  </div>
);

export default UserList;


 