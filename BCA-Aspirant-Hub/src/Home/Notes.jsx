import React, { useState } from "react";
import CardSemister from "../Components/CardSemister";
import { Outlet } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";

function Notes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className=" text-blue-400 w-[120px] h-[45px] flex justify-center items-center fixed top-22 left-3 z-20 rounded-md text-2xl font-bold"
        onClick={toggleSidebar}
      >
        {isOpen ? "Sem List <" : "Sem List >"}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-50 backdrop-blur-lg border border-white/20 w-[400px] h-screen overflow-y-scroll pt-20 flex flex-col items-center gap-10 fixed top-0 left-0 z-10 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-black text-white w-full h-[60px] flex justify-end items-center px-4">
          <h1 className="text-2xl">Semester List</h1>
        </div>

        <CardSemister sem="First Semester" target="sem01" />
        <CardSemister sem="Second Semester" target="sem02" />
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 w-full h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Notes;
