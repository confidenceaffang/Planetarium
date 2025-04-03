import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <section className="flex items-center bg-gray-800 justify-center h-screen w-screen ">
      <div className="p-8 rounded-l  w-96">
        <div className="flex justify-center items-center">
          <img src={logo} width={120} alt="Logo" />
        </div>
        <h2 className="text-2xl text-center font-bold text-center mb-6">
          Get Started
        </h2>
        <h3 className="text-center text-gray-300 mb-5">
          Log in to Planetarium to continue to Dashboard.
        </h3>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address*"
            className="w-full border-2 p-3 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password*"
            className="w-full border-2 p-3 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Link>
          <span className="text-blue-600">Forgot password?</span>
        </Link>

        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Continue
        </button>
        <div className="mt-5">
          <h2>
            Don't have an account?
            <Link to="/signup">
              <span className="text-blue-600"> Sign up </span>
            </Link>
          </h2>
        </div>
        <div className="mt-5 ">
          <h3 className="text-center">OR</h3>
        </div>
        <div className="flex ">
          <button className=" flex mt-5 border-2 rounded-l w-full items-center justify-center py-3 rounded-xl font-semibold">
            <FcGoogle className="mr-3 flex flex-row text-2xl text-center justify-center items-center text-center " />
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
