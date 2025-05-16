import React from "react";
import { Link } from "react-router-dom";

function CardSemister({ sem, target, onSelect }) {
  return (
    <div 
      className="bg-blue-400 text-black backdrop-blur-lg border border-white/30 w-[300px] h-[150px] flex justify-center items-center flex-col gap-5 rounded-lg"
      onClick={() => onSelect(sem)} // Pass the semester name to the parent
    >
      <h1 className="font-bold text-2xl">{sem}</h1>
      <Link to={`/notes/${target}`}>
        <button className="bg-purple-700 p-2 text-white w-[200px] h-[40px] rounded-lg hover:bg-black hover:text-white transition-all hover:shadow-md">
          Explore
        </button>
      </Link>
    </div>
  );
}

export default CardSemister;
