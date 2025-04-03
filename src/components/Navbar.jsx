import logo from "../assets/logo.png";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { Link } from "react-router-dom";
/*import { CanvasTexture } from "three";*/
import Planets from "./Planets";
import { useState } from "react";

const Navbar = () => {
  const [up, setup] = useState(false);
  const handleMouseEnter = () => {
    setup(true);
  };
  const handleMoueLeave = () => {
    setup(false);
  };
  const [ishover, setIshover] = useState(false);
  const [ishover1, setIshover1] = useState(false);
  return (
    <main className="bg- py-20">
      <section className="flex justify-center items-center">
        <nav className="py-8 ">
          <div className="bg-gray-800 text-gray-400 rounded-full font-semibold drop-shadwow-md">
            <div className="flex flex-row">
              <div>
                <img src={logo} alt="logo" width={70} height={70} />
              </div>
              <div className="flex text-center items-center">
                <div
                  className="flex text-center items-center"
                  onMouseEnter={() => {
                    setIshover(true);
                  }}
                  onMouseLeave={() => {
                    setIshover(false);
                  }}
                >
                  <button
                    className="ml-10"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMoueLeave}
                  >
                    Products
                  </button>
                  {ishover ? (
                    <RxCaretUp className="ml-2 items-center text-center" />
                  ) : (
                    <RxCaretDown className="ml-2 items-center text-center" />
                  )}
                </div>
                <div
                  className="flex items-center text-center"
                  onMouseEnter={() => {
                    setIshover1(true);
                  }}
                  onMouseLeave={() => setIshover1(false)}
                >
                  <button className="ml-10">Resources</button>
                  {ishover1 ? (
                    <RxCaretUp className="ml-2 items-center text-center" />
                  ) : (
                    <RxCaretDown className="ml-2 items-center text-center" />
                  )}
                </div>
                <button className="ml-10">Docs</button>
                <button className="ml-10">Community</button>
                <button className="ml-10">Pricing</button>
              </div>
              <div className="flex gap-4 my-1">
                <Link to="/login">
                  <button className="ml-20 rounded-full py-1 px-4 bg-gray-600 hover:text-gray-300">
                    Log In
                  </button>
                </Link>
                <button className=" rounded-full mr-2 py-1 px-4 bg-gray-600 hover:text-gray-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <div>sun</div>
        <Planets />
      </section>
    </main>
  );
};

export default Navbar;
