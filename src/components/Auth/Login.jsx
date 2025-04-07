import React from "react";
import sample from "../../assets/samplevid.mp4";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isemail, setisEmail] = useState(false);
  const [ispassword, setisPassword] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setisEmail(true);
      {
        isemail && "email correct";
      }
    } else {
      console.log("Enter a correct email");
      setisEmail(false);
    }

    if (password.trim()) {
      setisPassword(true);
      {
        ispassword && "password correct";
      }
    } else {
      console.log("Password cannot be empty");
      setisPassword(true);
    }
  };
  return (
    <section>
      <div>
        <video
          className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
          autoPlay
          loop
          muted
        >
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col lg:flex-row fixed top-1/4 w-full px-8 gap-8 ">
        <div className="flex-1">
          <div className="text-left">
            <h1 className="text-4xl lg:text-7xl font-bold">
              <Typewriter words={["Welcome Back"]} typeSpeed={100} />
            </h1>
          </div>
        </div>
        <div className="flex-1 items-center justof-center text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-10">Sign In Form</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              console.log("Submitted");
            }}
          >
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full opacity-55 max-w-md p-3 mb-8 rounded-xl text-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              minLength={3}
              maxLength={70}
              placeholder="Email Address"
            />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full opacity-55 max-w-md p-3 mb-8 rounded-xl text-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              minLength={3}
              maxLength={70}
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full max-w-md p-3 rounded-xl text-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
