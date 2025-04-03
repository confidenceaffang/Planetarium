import React from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="overflow-hidden flex text-white items-center bg-black justify-center h-screen w-screen ">
      <div className="p-4 rounded-l w-96">
        <h1 className="text-4xl text-white mb-10 text-center font-bold text-center mb-6">
          Welcome Back
        </h1>
        <div className="flex mb-1 ">
          <button className=" flex mt-5 border-2 w-full items-center text-white justify-center py-3 rounded-full font-semibold">
            <FcGoogle className="mr-3 flex flex-row text-2xl text-center justify-center items-center text-center " />
            Continue with Google
          </button>
        </div>
        <div className="flex mb-10 ">
          <button className=" flex mt-5 border-2 text-white text-center w-full items-center justify-center py-3 rounded-full font-semibold">
            Continue with Phone Number
          </button>
        </div>

        <div className="mb-4">
          <label className="mb-10 text-sm text-white">Email or username</label>
          <input
            type="email"
            placeholder="Email or username"
            className="w-full border-2 p-3 bg-black rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="mb-10 text-sm text-white">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border-2 p-3 bg-black rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Link>
          <span className="text-blue-600">Forgot password?</span>
        </Link>

        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Continue
        </button>
        <div className="mt-5">
          <h2 className="text-white text-sm">
            Don't have an account?
            <Link to="/signup">
              <span className="text-blue-600"> Sign up </span>
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Login;
