import React from 'react'
import Sem01 from './Sem01'
import { Outlet, useLocation } from "react-router-dom";
import Card from '../Components/Card'


function Sem02() {
  const location = useLocation();
  const isNotesOpen = location.pathname.includes("semBookViewer");
  return (
    <div className=" w-screen flex justify-center flex-wrap gap-10 pb-10 pt-33 sm:pt-40">
      {/* Conditionally render the Cards */}
      {!isNotesOpen && (
        <>
          <Card
            img={"/BookImg/cfaBookImg.jpg"}
            title={"C programming"}
            des={"Learn computer basics, hardware, software, and applications."}
            id={"c"}
          />
          <Card
          img={"/BookImg/digitalLogicBookImg.jpg"}
            title={"Microprocessor"}
            des={"Explore logic gates, circuits, and binary systems."}
            id={"micro"}
          />
          <Card
          img={"/BookImg/englsih.jpg"}
            title={"English"}
            des={"Enhance communication, grammar, and composition skills."}
            id={"eng"}
          />
          <Card
          img={"/BookImg/sociology.jpg"}
            title={"Account"}
            des={"Understand social structures, relationships, and culture."}
            id={"ac"}
          />
          <Card
          img={"/BookImg/math.jpg"}
            title={"Math"}
            des={"Master matrices, calculus, and other key topics."}
            id={"math"}
          />
        </>
      )}

      {/* Outlet will render nested routes like Semister01Notes */}
        <Outlet />
    </div>
  )
}

export default Sem02
