import React from 'react'

function Signup() {
  return (
     <form className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
      <h1 className="font-bold text-2xl m-0">Create Account</h1>
      <input
        type="text"
        placeholder="Name"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />
      <input 
         type="number"
         placeholder='Enter your mobile number'
          className="bg-gray-200 py-3 px-4 my-2 w-full"
      
      />
       <input 
         type="text"
         placeholder='Enter your current address'
          className="bg-gray-200 py-3 px-4 my-2 w-full"
      
      />

      <button className="rounded-full  bg-blue-400 text-white text-xs font-bold py-3 px-12 tracking-wider uppercase active:scale-95">
        Sign Up
      </button>
    </form>
  )
}

export default Signup;