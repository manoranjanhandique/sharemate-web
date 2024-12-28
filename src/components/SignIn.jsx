import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {signInFormValidation} from "../utils/userValidation"
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/authSlice";
import { BASE_URL } from "../utils/constants";
const SignIn = () => {
  const [formData, setFormData]=useState({
    email:"manoranjanhandique@gmail.com",
    password:"Mano@1234"
  })
  const [error,setError]=useState({
    email:"",
    password:""
  })
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData({...formData,[name]:value});
    setError({...error,[name]:''})
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const validationErrors=signInFormValidation(formData);
    if(Object.values(validationErrors).length > 0){
      setError(validationErrors);
      return;
    }
    try {
      const response=await axios.post(BASE_URL+"/signin",formData,{
        withCredentials: true
      })
      if(response){
        setFormData({
          email: "",
          password: "",
        });
        // console.log('Login Successfull',response?.data?.data)
        dispatch(addUser(response?.data?.data))
        navigate('/dashboard')
      }
    } catch (error) {
      if(error.response){
        console.log(error.response)
        const errorMessages=error?.response?.data?.errors || [];
        const errorFields={};
        errorMessages.forEach((message)=>{
          errorFields.email=message;
          errorFields.password=message;
        });
        setError(errorFields);
        console.error('Validation errors:', errorFields);
      }else{
        console.error('An unexpected error occurred:', error);
      }      
    }
  }
  return (
    <div className="flex items-center justify-center w-full bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-40 rounded-lg shadow-lg my-20">
        <h1 className="text-2xl font-bold text-center text-white">Log In</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border ${error.email ?'border-red-600' : 'border-gray-600' } rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400`}
              placeholder="you@example.com"
            />
            {error.email && <small className="text-red-500 mt-1" role="alert">{error.email}</small>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border ${error.password ?'border-red-600' : 'border-gray-600' } rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400`}
              placeholder="********"
            />
            {error.password && <small className="text-red-500 mt-1" role="alert">{error.password}</small>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-300">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-300 mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-medium text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SignIn