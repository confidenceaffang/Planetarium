import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"
import { LuLayoutDashboard } from 'react-icons/lu'
import { CiCalendar } from 'react-icons/ci'
import { BsCopy } from 'react-icons/bs'
import { IoChatbubbleEllipsesOutline, IoBookOutline, IoPlanetOutline } from 'react-icons/io5'
import { PiUsersThreeThin } from 'react-icons/pi'
import { CgProfile } from 'react-icons/cg'
import { GiBeveledStar, GiAstronautHelmet } from "react-icons/gi"
import { HiOutlineLightBulb } from "react-icons/hi"
import { FaEarthAmericas } from "react-icons/fa6"
import { useState } from 'react'
import { FaMoon } from 'react-icons/fa6'
import {FiSun} from "react-icons/fi"

const navLinks = [
  { label: "Dashboard", icon: <LuLayoutDashboard />, path: "/dashboard" },
  { label: "Calendar", icon: <CiCalendar />, path: "/calendar" },
  { label: "Tasks", icon: <BsCopy />, path: "/tasks" },
  { label: "Chat", icon: <IoChatbubbleEllipsesOutline />, path: "/chat" },
  { label: "Users", icon: <PiUsersThreeThin />, path: "/users" },
  { label: "Planets Lab", icon: <IoPlanetOutline />, path: "/planets" },
  { label: "Star Lab", icon: <GiBeveledStar />, path: "/stars" },
  { label: "Fun Facts", icon: <HiOutlineLightBulb />, path: "/funfacts" },
  { label: "Live Space News", icon: <GiAstronautHelmet />, path: "/news" },
  { label: "Our Planet", icon: <FaEarthAmericas />, path: "/earth" },
  { label: "Learning Modules", icon: <IoBookOutline />, path: "/learning" },
  { label: "Quizzes", icon: <BsCopy />, path: "/quizzes" },
  { label: "Support", icon: <IoChatbubbleEllipsesOutline />, path: "/support" },
  { label: "Profile", icon: <CgProfile />, path: "/profile" },
]

const Dashboard = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"} min-h-screen flex overflow-hidden`}>

      <aside className={`w-[15%] font-semibold sticky top-0 h-screen scrollbar-hidden overflow-y-auto border-r   ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
   
        <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"} flex sticky top-0  p-6 items-center mb-10 space-x-2`}>
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold">Dashboard</span>
        </div>
        
        <div className=' p-6'>
        <div className="space-y-8">
   
          <div className="space-y-3">
            {navLinks.slice(0, 5).map(link => (
              <NavItem key={link.path} {...link} active={location.pathname === link.path} dark={darkMode} />
            ))}
          </div>

       

      
          <div className="space-y-3">
            <div className="text-sm uppercase text-gray-400">Explore</div>
            {navLinks.slice(5, 10).map(link => (
              <NavItem key={link.path} {...link} active={location.pathname === link.path} dark={darkMode} />
            ))}
          </div>


          <div className="space-y-3">
            <div className="text-sm uppercase text-gray-400">Learn</div>
            {navLinks.slice(10).map(link => (
              <NavItem key={link.path} {...link} active={location.pathname === link.path} dark={darkMode} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <span className="text-sm">Dark Mode</span>
          <button
            onClick={(e) => {e.preventDefault();
              setDarkMode(!darkMode)}}
            className={`p-1 rounded-full border-2 ${darkMode ?"border-gray-700": "border-gray-400"} flex items-center`}
          >
            <div
              className="rounded-full shadow transform transition-transform duration-300"
            >
              {darkMode ? <FiSun className=' text-yellow-700 text-4xl' /> : <FaMoon className='text-black text-4xl'  />}
            </div>
          </button>
        </div>
        </div>
      </aside>

      <section className="flex-1 ">
        <nav className='fixed p-2 mb-4 border-b font-sm border-gray-700 w-full top-0'>
          dd
        </nav>
      </section>
    </main>
  );
};

const NavItem = ({ label, icon, path, active, dark }) => (
  <NavLink
    to={path}
    className={`flex items-center space-x-3 px-3 py-2 rounded-xl text-sm transition-colors duration-200
      ${active ? "bg-blue-500 text-white" : dark ? "hover:bg-gray-800" : "hover:bg-gray-100"}
    `}
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </NavLink>
);

export default Dashboard;
