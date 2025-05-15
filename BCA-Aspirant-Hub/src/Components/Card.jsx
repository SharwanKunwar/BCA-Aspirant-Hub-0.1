import React from 'react'

function Card(props) {
  return (
    <>
        <div className='bg-blue-400/30 backdrop-blur-lg border border-white/20 w-[350px] h-[600px] rounded-lg shadow-lg p-5 flex flex-col gap-5'>

            <div className='bg-red-400 w-full h-[65%] rounded-2xl shadow-md'>img</div>
            <div className=' w-full h-[20%] flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{props.title}</h1>
                <p>{props.des}</p>
            </div>
            <div className=' w-full h-[10%] flex justify-around items-center'>
                <button className='bg-black text-white w-6/13 h-[75%] sm:w-6/14 sm:h-[70%] rounded-md'>Book PDF</button>
                <button className='bg-black text-white w-6/13 h-[75%] sm:w-6/14 sm:h-[70%] rounded-md'>Note PDF</button>
            </div>
        </div>
    </>
  )
}

export default Card
