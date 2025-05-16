import React from 'react'

function Card(props) {
  return (
    <>
        <div className='bg-blue-400/30 backdrop-blur-lg border border-white/20 w-[350px] h-[520px] rounded-lg shadow-lg p-5 sm:m-1 m-5 flex flex-col gap-5'>

            <div className=' w-full h-[60%] rounded-2xl shadow-md flex justify-center items-center'>img</div>
            <div className=' w-full h-[20%] flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{props.title}</h1>
                <p>{props.des}</p>
            </div>
            <div className=' w-full h-[8%] flex justify-around items-start'>
                <button className='bg-blue-700 text-white w-6/14 h-full sm:w-6/14 sm:h-[95%] rounded-md shadow-md'>Book PDF</button>
                <button className='bg-blue-700 text-white w-6/14 h-full sm:w-6/14 sm:h-[95%] rounded-md shadow-md'>Note PDF</button>
            </div>
        </div>
    </>
  )
}

export default Card
