import React from 'react'

function DigitalLogic() {
 return (
    <div className=' w-screen  flex flex-col justify-start items-center p-10 gap-10 pt-5 text-black'>
      <div className='bg-yellow-400 w-screen sm:h-[100px] h-[100px] flex justify-around items-center'>
        <button className='bg-blue-400 w-6/13 h-[50px] rounded-md shadow-md text-white'>Download Book PDF</button>
        <button className='bg-blue-400 w-6/13 h-[50px] rounded-md shadow-md text-white'>Download Note PDF</button>
      </div>
      <div className='bg-yellow-400 w-screen h-[500px] flex justify-center items-center'>dl pdf view</div>
    </div>
  )
}

export default DigitalLogic
