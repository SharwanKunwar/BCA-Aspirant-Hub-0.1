import React from "react";
import { NavLink } from "react-router-dom";
import NavMenuToggle from "./NavMenuToggle";
import { useEffect } from "react";
import useReloadOnFocus from "../Hooks/useReloadOnFocus";

function Navbar() {
  
  useEffect(() => {
    const isInAppBrowser = /FBAN|FBAV|Instagram/.test(navigator.userAgent);
    if (isInAppBrowser) {
      console.warn("You are using an in-app browser. Some assets may not load correctly.");
    }
  }, []);


  const style01 = {
  borderWidth: "0.5px",
  borderStyle: "solid",
  borderColor: "#ccc",
};

useReloadOnFocus();

  return (
    <div className="w-screen sm:h-[90px] h-[80px] flex justify-center items-center sm:pl-10 sm:pr-10 fixed sm:bg-white bg-gray-100 z-50">
      <nav className="sm:bg-gray-100 sm:rounded-2xl w-screen h-[60px] flex justify-around items-center gap-5 sm:shadow-md">

        {/* Logo Section */}
        <div className="sm:w-[10%] w-[40%] h-full flex justify-center items-center">
          <div className="sm:block hidden cursor-pointer">
            <h1 className="font-bold text-2xl">
              <span className="hover:text-red-500">B</span>
              <span className="hover:text-green-500">C</span>
              <span className="hover:text-blue-500">A</span>
            </h1>
          </div>
          <div className="sm:hidden block">
            <a href="#home-outer">
              <img className='sm:w-[60px] w-[50px]' src="/graduation-hat.png" alt="logo" />
            </a>
          </div>
        </div>

        {/* Menu List Section */}
        <div className="sm:w-[60%] w-[80%] h-full">
          <ul className=" sm:flex sm:justify-start sm:items-center sm:gap-10 w-full h-full hidden">
            {["home", "notes", "projects","blogs"].map((item) => (
              <li key={item} className="list-none">
                <NavLink
                  to={item}
                  className={({ isActive }) =>
                    `inline-block px-4 py-2 transition duration-200 ease-in-out ${
                      isActive ? "text-blue-500 border-b-2 border-black" : "text-gray-600"
                    } hover:text-blue-500 hover:scale-105`
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Section */}
        <div className="sm:w-[30%] w-[30%] h-full flex justify-center items-center">
          <div className="sm:block hidden">
            <section className="flex gap-5">
              <NavLink to="#">
                <button className="bg-blue-400 w-[150px] h-[35px] rounded-[5px] text-white font-bold hover:border hover:text-black hover:bg-blue-100 transition duration-200">
                  Log in
                </button>
              </NavLink>
              <NavLink to="#">
                <button className="bg-blue-400 w-[150px] h-[35px] rounded-[5px] text-white font-bold hover:border hover:text-black hover:bg-blue-100 transition duration-200">
                  Sign up
                </button>
              </NavLink>
            </section>
          </div>

          {/* Menu Icon (Mobile) */}
          <div className=" sm:hidden w-full h-full flex justify-center items-center">
            <NavLink to="#">
              <NavMenuToggle/>
            </NavLink>
          </div>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
