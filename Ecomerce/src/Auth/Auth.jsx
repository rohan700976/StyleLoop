import React, { useState } from "react";
import SignInForm from "./Login";
import SignUpForm from "./Signup";

const Auth = () => {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const isSignUp = type === "signUp";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f5f7] font-['Montserrat'] px-4">
      <h2 className="text-2xl font-bold mb-4">Sign in/up Form</h2>
      <div
        className={`relative w-full max-w-3xl min-h-[480px] bg-white rounded-lg shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)] overflow-hidden transition-all duration-700 ${
          isSignUp ? "right-panel-active" : ""
        }`}
      >
        <div
          className={`absolute top-0 h-full w-1/2 transition-transform duration-700 z-[2] ${
            isSignUp ? "translate-x-full" : ""
          }`}
        >
          <SignInForm />
        </div>

        <div
          className={`absolute top-0 h-full w-1/2 opacity-0 transition-all duration-700 z-[1] ${
            isSignUp ? "translate-x-full opacity-100 z-[5] animate-fade-in" : ""
          }`}
        >
          <SignUpForm />
        </div>

        <div
          className={`absolute top-0 h-full w-1/2 left-1/2 overflow-hidden transition-transform duration-700 z-[100] ${
            isSignUp ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white transition-transform duration-700 ${
              isSignUp ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* Overlay Left */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 ${
                isSignUp ? "translate-x-0" : "-translate-x-[20%]"
              }`}
            >
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 my-5">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="bg-transparent border border-white text-white rounded-full px-10 py-3 text-xs font-bold uppercase tracking-widest"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>

            {/* Overlay Right */}
            <div
              className={`absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 ${
                isSignUp ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 my-5">
                Enter your personal details and start journey with us
              </p>
              <button
                className="bg-transparent border border-white text-white rounded-full px-10 py-3 text-xs font-bold uppercase tracking-widest"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
