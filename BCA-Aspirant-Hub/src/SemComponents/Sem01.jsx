import React from 'react'
import Card from '../Components/Card'

function Sem01() {
  return (
    <div className='bg-gray-50 w-screen flex justify-center flex-wrap gap-10 pt-35 sm:p-50'>
      <Card title={"CFA"} des={"Learn computer basics, hardware, software, and applications."}/>
      <Card title={"Digital Logic"} des={"Explore logic gates, circuits, and binary systems."}/>
      <Card title={"English"} des={"Enhance communication, grammar, and composition skills."}/>
      <Card title={"Sociology"} des={"Understand social structures, relationships, and culture."}/>
      <Card title={"Math"} des={"Master matrices, calculus, and other key topics."}/>

    </div>
  )
}

export default Sem01
