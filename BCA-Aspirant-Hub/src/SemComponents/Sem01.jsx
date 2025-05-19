import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Card from "../Components/Card";

function Sem01() {
  const location = useLocation();

  // Check if the route is for the notes (e.g., `/notes/sem01/semister01-notes`)
  const isNotesOpen = location.pathname.includes("semisterNotePdfViewer");

  return (
    <div className=" w-screen flex justify-center flex-wrap gap-10 pb-10 pt-33 sm:pt-40">
      {/* Conditionally render the Cards */}
      {!isNotesOpen && (
        <>
          <Card
            img={"/BookImg/cfaBookImg.jpg"}
            title={"CFA"}
            des={"Learn computer basics, hardware, software, and applications."}
            id={"cfa"}
          />
          <Card
          img={"/BookImg/digitalLogicBookImg.jpg"}
            title={"Digital Logic"}
            des={"Explore logic gates, circuits, and binary systems."}
            id={"dl"}
          />
          <Card
          img={"/BookImg/englsih.jpg"}
            title={"English"}
            des={"Enhance communication, grammar, and composition skills."}
            id={"eng"}
          />
          <Card
          img={"/BookImg/sociology.jpg"}
            title={"Sociology"}
            des={"Understand social structures, relationships, and culture."}
            id={"social"}
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
  );
}

export default Sem01;
