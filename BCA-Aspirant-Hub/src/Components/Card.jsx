import React from "react";
import { useNavigate } from "react-router-dom";


function Card({img, title, des, id }) {
  const navigate = useNavigate();

  const bookHandler = (target) =>{
    switch(target){
      case "math":
        navigate(`/notes/sem02/semBookViewer/${target}`);
    }
  }

  const handleClick = (target) => {
    switch (target) {
      case "cfa":
        navigate(`/notes/sem01/semisterNotePdfViewer/${target}`);
        break;
      case 'dl':
        navigate(`/notes/sem01/semisterNotePdfViewer/${target}`);
        break;
        
      // case 'eng':
      //   navigate(`/notes/sem01/semisterNotePdfViewer/${target}`);
      //   break;

      // You can add more cases for other IDs here.
      default:
        console.warn("Invalid target:", target); 
    }
  };

  return (
    <div className="bg-blue-400/30 backdrop-blur-lg border border-white/20 w-[350px] h-[520px] rounded-lg shadow-lg p-5 sm:m-1 m-5 flex flex-col gap-5">
      {/* Image Container */}
      <div className="w-full h-[60%] rounded-2xl shadow-md flex justify-center items-center">
        <img className="w-full h-full object-cover rounded-md " src={img} alt="img" />
      </div>

      {/* Title and Description */}
      <div className="w-full h-[20%] flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{des}</p>
      </div>

      {/* Action Buttons */}
      <div className="w-full h-[8%] flex justify-around items-start">
        <button
          id={id}
          onClick={()=>bookHandler(id)}
          className="bg-blue-700 text-white w-6/14 h-full sm:w-6/14 sm:h-[95%] rounded-md shadow-md"
        >
          Book PDF
        </button>

        <button
          onClick={() => handleClick(id)}
          className="bg-blue-700 text-white w-6/14 h-full sm:w-6/14 sm:h-[95%] rounded-md shadow-md"
        >
          Note PDF
        </button>
      </div>
    </div>
  );
}

export default Card;
