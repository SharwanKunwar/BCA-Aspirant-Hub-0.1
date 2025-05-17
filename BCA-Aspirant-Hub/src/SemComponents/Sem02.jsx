import React from 'react'
import Sem01 from './Sem01'
import Card from '../Components/Card'

function Sem02() {
  return (
    <div className='bg-gray-50 w-screen flex justify-center flex-wrap gap-10 pt-35 sm:pt-40 sm:pb-10'>
      <Card title={"C Programming"} des={"Learn computer basics, hardware, software, and applications."}/>
      <Card title={"Microprocessor"} des={"Explore logic gates, circuits, and binary systems."}/>
      <Card title={"English"} des={"Enhance communication, grammar, and composition skills."}/>
      <Card title={"Financial Account"} des={"Understand social structures, relationships, and culture."}/>
      <Card title={"Math"} des={"Master matrices, calculus, and other key topics."}/>
    </div>
  )
}

export default Sem02
