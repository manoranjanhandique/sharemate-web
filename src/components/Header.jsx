// import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '/images/logo.png'
import logoname from '/images/logoname.png'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeUser } from '../store/slices/authSlice';
const Header = () => {
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSignOut=async()=>{
    try {
      await axios.post("http://localhost:8000/api/logout",{},{
        withCredentials: true
      })
      dispatch(removeUser());
      return navigate('/signin')
    } catch (error) {
      console.log(error.message)
    }

  }
  return (
    <div className="navbar bg-gray-800 h-24 border-b border-gray-700 flex p-2  items-center fixed w-full z-10">
      <div className="navbar-start">
        <div className="flex items-center p-2">
          <img
            src={logo}
            alt="Logo"
            className="w-[80px] h-[81px] rounded-full absolute animate-spin"
            style={{ animationDuration: "5s" }}
          />
          <img
            src={logoname}
            alt="Logo"
            className="w-[250px] h-20 rounded-lg ml-[49px] hidden sm:block"
          />
        </div>
      </div>
      <div className="flex ml-1 lg:hidden">
        <a className="btn btn-ghost text-xl ">ShareMate</a>
      </div>
      <div className="navbar-center ml-auto text-lg hidden lg:flex">
        <nav className="my-auto">
          <ul className="menu menu-horizontal flex space-x-5 px-4">
            <Link to="/home">
              <li
                className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
              >
                Home
              </li>
            </Link>
            <Link to="/create-group">
              <li className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Groups
              </li>
            </Link>
            <Link to="/signin">
              <li className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Expenses
              </li>
            </Link>
            <Link to="/signin">
              <li className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Trip Your Plan
              </li>
            </Link>
            <Link to="/signin">
              <li className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Payments
              </li>
            </Link>
            <Link to="/signin">
              <li className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Notifications
              </li>
            </Link>
            <Link to="/signin">
              <li className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                About us
              </li>
            </Link>

            {user ? (
              <li className="relative">
              <details className="group">
                <summary className="cursor-pointer text-gray-300 hover:text-white font-medium">
                  {user.username}
                </summary>
                <ul className="p-2 mt-2 bg-gray-700 rounded-lg shadow-lg hidden group-open:block">
                  <li className="hover:bg-gray-600 rounded-md">
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Settings</a>
                  </li>
                  <li className="hover:bg-gray-600 rounded-md">
                    <a onClick={handleSignOut} className="block px-4 py-2 text-gray-300 hover:text-white">Logout</a>
                  </li>
                </ul>
              </details>
            </li>
            ) : (
              <Link to="/signin">
                <li className="block rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Log In
                </li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-48 p-2 shadow-lg absolute right-0 top-full"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Groups</a>
            </li>
            <li>
              <a>Expenses</a>
            </li>
            <li>
              <a>Trip</a>
            </li>
            <li>
              <a>Payments</a>
            </li>
            <li>
              <a>Notifications</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
