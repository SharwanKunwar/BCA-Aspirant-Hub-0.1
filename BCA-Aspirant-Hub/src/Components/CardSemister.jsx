import React from 'react';
import { Link } from 'react-router-dom';

function CardSemister({ sem, target }) {
  return (
    <div className='bg-blue-400/30 text-black backdrop-blur-lg border border-white/20 w-[350px] h-[150px] flex justify-center items-center flex-col gap-5 rounded-lg'>
      <h1 className='font-bold text-2xl'>{sem}</h1>
      {/* Correct path to navigate to sem01 or sem02 */}
      <Link to={`/notes/${target}`}> 
        <button className='bg-blue-400 p-2 text-white w-[300px] h-[40px] rounded-3xl hover:bg-black hover:text-white transition-all hover:shadow-md translate-0.5'>
          Explore
        </button>
      </Link>
    </div>
  );
}

export default CardSemister;
