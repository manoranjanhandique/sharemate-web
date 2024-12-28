import { useSelector } from "react-redux";

// import React from 'react';
const Dashboard = () => {
  const user=useSelector(store=>store.user)
  return (
    <div className="flex min-h-screen bg-gray-900 p-8">
      {/* Profile Section */}
      <div className="w-1/4 bg-gray-800 text-white p-6 rounded-lg shadow-lg mr-8">
        <h2 className="text-2xl font-semibold text-green-400 mb-6">Profile</h2>
        
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="mb-4">
          <p className="font-semibold">{user && user.username}</p>
          <p>{user && user.email}</p>
          <p>{user && user.gender}</p>
          <p>{user && user.phone}</p>
        </div>

        <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">
          Edit Profile
        </button>
      </div>

      {/* Main Content (Right Side) */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Group Card */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Groups</h3>
            <p>View and manage your groups, members, and activities.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">Manage Groups</button>
          </div>

          {/* Trip Plan Card */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Plan Trip</h3>
            <p>Plan your upcoming trips with your groups.</p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200">Manage Trip</button>
          </div>

          {/* Expenses Card */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Expenses</h3>
            <p>Track shared expenses and manage balances.</p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200">View Expenses</button>
          </div>

          {/* Payments Card */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-red-400 mb-4">Payments</h3>
            <p>Manage your payments, settlements, and history.</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">View Payments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
