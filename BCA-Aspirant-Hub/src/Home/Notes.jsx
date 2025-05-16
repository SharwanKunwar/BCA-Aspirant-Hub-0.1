import React, { useState } from "react";
import CardSemister from "../Components/CardSemister";
import { Outlet } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";

const SEMESTERS = [
  { sem: "First Semester", target: "sem01" },
  { sem: "Second Semester", target: "sem02" },
];

function Notes() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSem, setSelectedSem] = useState("| Semester |"); // Default to "First Semester"

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSemSelect = (sem) => {
    setSelectedSem(sem);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="text-white bg-black w-full sm:h-[50px] h-[50px] flex justify-between pl-5 pr-5 items-center fixed sm:top-22 top-20 z-20 text-2xl font-bold"
        onClick={toggleSidebar}
      >
        {isOpen ? "Sem List <" : "Sem List >"}
        <p className="text-[18px]">{selectedSem}</p>
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-50/30 backdrop-blur-lg border border-white/20 w-full h-screen overflow-y-scroll pt-20 flex flex-wrap flex-col items-center gap-10 fixed top-0 left-0 z-10 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-white w-full h-[60px] flex justify-end items-center px-2 z-55">
          <h1 className="text-2xl">Semester List</h1>
        </div>

        {SEMESTERS.map(({ sem, target }) => (
          <CardSemister key={target} sem={sem} target={target} onSelect={handleSemSelect} />
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 w-full h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Notes;
