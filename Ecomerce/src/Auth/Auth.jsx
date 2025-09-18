import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import SignInForm from "./Login";
// import SignUpForm from "./Signup";
import Signup from "./Signup";
import Login from "./Login";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  // true = show Sign In, false = show Sign Up
  const [signIn, setSignIn] = useState(true);

  // Sync state with current URL on mount and when URL changes
  useEffect(() => {
    if (location.pathname === "/auth/signup") {
      setSignIn(false);
    } else {
      // default to sign in for /auth/login and others
      setSignIn(true);
    }
  }, [location.pathname]);

  // Handler to toggle form and update URL accordingly
  const toggleForm = (showSignIn) => {
    setSignIn(showSignIn);
    if (showSignIn) {
      navigate("/auth/login", { replace: true });
    } else {
      navigate("/auth/signup", { replace: true });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Auth Page</h1>

      <div className="bg-white rounded-lg shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[678px] max-w-full min-h-[400px]">
        
        {/* Sign Up */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ease-in-out ${
            !signIn ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Signup />
        </div>

        {/* Sign In */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ease-in-out z-10 ${
            !signIn ? "translate-x-full" : ""
          }`}
        >
          <Login />
        </div>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-500 ease-in-out z-50 ${
            !signIn ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`bg-blue-300 relative -left-full h-full w-[200%] transition-transform duration-500 ease-in-out ${
              !signIn ? "translate-x-1/2" : ""
            }`}
          >
            {/* Left Overlay Panel */}
            <div
              className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-500 ease-in-out ${
                !signIn ? "translate-x-0" : "-translate-x-1/5"
              }`}
            >
              <h1 className="font-bold text-2xl">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => toggleForm(true)}
                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 tracking-wider uppercase active:scale-95"
              >
                Sign In
              </button>
            </div>

            {/* Right Overlay Panel */}
            <div
              className={`absolute right-0 flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-500 ease-in-out ${
                !signIn ? "translate-x-1/5" : "translate-x-0"
              }`}
            >
              <h1 className="font-bold text-2xl">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                Enter your personal details and start your journey with us
              </p>
              <button
                onClick={() => toggleForm(false)}
                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 tracking-wider uppercase active:scale-95"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
