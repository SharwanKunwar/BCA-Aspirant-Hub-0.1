import React from "react";
import Card from "../Components/Card";
import { useLocation } from "react-router";

function Sem01() {
  const location = useLocation();
  const isNotesOpen = location.pathname.includes("semBookViewer");

  return (
    <div className="w-screen flex justify-center flex-wrap gap-10 pb-10 pt-33 sm:pt-40">
      {/* Conditionally render the Cards */}
      {!isNotesOpen && (
        <>
          <Card
            img={"/BookImg/cfaBookImg.jpg"}
            title={"CFA"}
            des={"Learn computer basics, hardware, software, and applications."}
            id={"cfa"}
            bookLink={"cfaBook"}
            noteLink={"cfaNote"}
          />
          <Card
            img={"/BookImg/digitalLogicBookImg.jpg"}
            title={"Digital Logic"}
            des={"Explore logic gates, circuits, and binary systems."}
            id={"dl"}
            bookLink={"digitalLogicBook"}
            noteLink={"digitalLogicNote"}
          />
          <Card
            img={"/BookImg/englsih.jpg"}
            title={"English"}
            des={"Enhance communication, grammar, and composition skills."}
            id={"eng"}
            bookLink={"englishBook"}
            noteLink={"englishNote"}
          />
          <Card
            img={"/BookImg/sociology.jpg"}
            title={"Sociology"}
            des={"Understand social structures, relationships, and culture."}
            id={"social"}
            bookLink={"sociologyBook"}
            noteLink={"sociologyNote"}
          />
          <Card
            img={"/BookImg/math.jpg"}
            title={"Math"}
            des={"Master matrices, calculus, and other key topics."}
            id={"math"}
            bookLink={"mathBook"}
            noteLink={"mathNote"}
          />
        </>
      )}

    
    </div>
  );
}

export default Sem01;
