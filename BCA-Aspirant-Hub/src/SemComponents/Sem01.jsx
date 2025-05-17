import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Card from "../Components/Card";

function Sem01() {
  const location = useLocation();

  // Check if the route is for the notes (e.g., `/notes/sem01/semister01-notes`)
  const isNotesOpen = location.pathname.includes("semister01-notes");

  return (
    <div className="bg-gray-50 w-screen flex justify-center flex-wrap gap-10 pt-35 pb-10 sm:pt-40">
      {/* Conditionally render the Cards */}
      {!isNotesOpen && (
        <>
          <Card
            title={"CFA"}
            des={"Learn computer basics, hardware, software, and applications."}
            id={"cfa"}
          />
          <Card
            title={"Digital Logic"}
            des={"Explore logic gates, circuits, and binary systems."}
            id={"dl"}
          />
          <Card
            title={"English"}
            des={"Enhance communication, grammar, and composition skills."}
            id={"eng"}
          />
          <Card
            title={"Sociology"}
            des={"Understand social structures, relationships, and culture."}
            id={"social"}
          />
          <Card
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
