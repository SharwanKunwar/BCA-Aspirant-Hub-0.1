import React from 'react'
import Card from '../Components/Card'

function Notes() {
  return (
    <div className='flex flex-wrap justify-center items-center w-screen  bg-gray-50 gap-15 pt-30 pb-10'>
      <Card img={""} title={"CFA"} des={"CFA notes and books covering essential BCA concepts and examples."}/>
      <Card img={""} title={"Digital Logic"} des={"Essential Digital Logic notes and books for BCA students."}/>
      <Card img={""} title={"English"} des={"English notes and study materials tailored for BCA curriculum."}/>
      <Card img={""} title={"Sociology"} des={"Concise Sociology notes and resources for BCA students."}/>
      <Card img={""} title={"Math"} des={"Math notes and books focusing on core BCA topics."}/>

    </div>
  )
}

export default Notes
