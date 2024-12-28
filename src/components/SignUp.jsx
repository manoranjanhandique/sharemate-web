import { useState } from "react"
import {signUpFormValidation} from "../utils/userValidation"
import axios from "axios"
import { BASE_URL } from "../utils/constants"

const SignUp = () => {
const [formData, setFormData]=useState({
  username:"",
  email:"",
  gender:"",
  phone:"",
  password:"",
  confirmPassword:""

})
const [error, setError]=useState({
  username:"",
  email:"",
  gender:"",
  phone:"",
  password:"",
  confirmPassword:""
})

const [success, setSuccess]=useState(null)

const handleInput=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setFormData({...formData,[name]:value});
  setError({...error,[name]:''})
}

const handleSubmit=async (e)=>{
  e.preventDefault();
  setSuccess(null);
  const data = { ...formData };
  const validationErrors=signUpFormValidation(formData);
  if(Object.keys(validationErrors).length > 0){
    setError(validationErrors);
    return;
  }
  try {
    // console.log(typeof formData)
    const response = await axios.post(
      BASE_URL+'/signup',
      data,
      { withCredentials: true }
    );
    if(response){
      setSuccess("Registration successful.")
      setFormData({
        username:"",
        email:"",
        gender:"",
        phone:"",
        password:"",
        confirmPassword:""
      })
    }

    console.log("Server response:", response.data)
  } catch (error) {
    if(error.response){
      const errorMessages = error?.response?.data?.errors || [];
      const errorFields={};
      errorMessages.forEach((message)=>{
        if(message.includes('Username')){
          errorFields.username=message
        }
        if(message.includes('Email')){
          errorFields.email=message
        }
        if(message.includes('Gender')){
          errorFields.gender=message
        }
        if(message.includes('Phone')){
          errorFields.phone=message
        }
        if(message.includes('Password')){
          errorFields.password=message
        }
        if(message.includes('Confirm password')){
          errorFields.confirmPassword=message
        }
      });
      setError(errorFields);
      console.error('Validation errors:', errorFields);
    }else{
      console.error('An unexpected error occurred:', error);
    }
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-40 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-6">Create Account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border  rounded-md focus:outline-none focus:ring-2 ${error.username ?'border-red-600' : 'border-gray-600' } focus:ring-blue-500 bg-gray-700`} 
              placeholder="Enter your username"
            />
            {error.username && <small className="text-red-500 mt-1" role="alert">{error.username}</small>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border  rounded-md focus:outline-none focus:ring-2 ${error.email ?'border-red-600' : 'border-gray-600' } focus:ring-blue-500 bg-gray-700`}
              placeholder="you@example.com"
            />
            {error.email && <small className="text-red-500 mt-1" role="alert">{error.email}</small>}
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-300">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border  rounded-md focus:outline-none focus:ring-2 ${error.gender ?'border-red-600' : 'border-gray-600' } focus:ring-blue-500 bg-gray-700`}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {error.gender && <small className="text-red-500 mt-1" role="alert">{error.gender}</small>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border  rounded-md focus:outline-none focus:ring-2 ${error.phone ?'border-red-600' : 'border-gray-600' } focus:ring-blue-500 bg-gray-700`}
              placeholder="Enter your phone number"
            />
            {error.phone && <small className="text-red-500 mt-1" role="alert">{error.phone}</small>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border  rounded-md focus:outline-none focus:ring-2 ${error.password ?'border-red-600' : 'border-gray-600' } focus:ring-blue-500 bg-gray-700`}
              placeholder="********"
            />
            {error.password && <small className="text-red-500 mt-1" role="alert">{error.password}</small>}
          </div>
          {/* Confirm Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInput}
              className={`block w-full p-3 mt-1 border  rounded-md focus:outline-none focus:ring-2 ${error.confirmPassword ?'border-red-600' : 'border-gray-600' } focus:ring-blue-500 bg-gray-700`}
              placeholder="********"
            />
            {error.confirmPassword && <small className="text-red-500 mt-1" role="alert">{error.confirmPassword}</small>}
          </div>
          {success && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <span className="block sm:inline">{success}</span>
        </div>
      )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="text-sm text-gray-400 mt-4">
  <p>
    By creating an account, you agree to our 
    <a href="/terms" className="text-blue-500 hover:underline">Terms and Conditions</a> 
    and 
    <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>.
  </p>
</div>
      </div>
    </div>
  )
}

export default SignUp