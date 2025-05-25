import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Card from '../Components/Card';

function Sem02() {
  const location = useLocation();
  const isNotesOpen = location.pathname.includes("semBookViewer");

  return (
    <div className="w-screen flex justify-center flex-wrap gap-10 pb-10 pt-33 sm:pt-40">
      {/* Conditionally render the Cards */}
      {!isNotesOpen && (
        <>
          <Card
            img={"/BookImg/cfaBookImgs.jpg"}
            title={"C Programming"}
            des={"Learn C fundamentals, data types, and control structures."}
            id={"c"}
            bookLink={"c_programming_book"}
            noteLink={"sem02C_Note"} // this is demo add same like this in feture
          />

          <Card
            img={"/BookImg/microprocessor.jpg"}
            title={"Microprocessor"}
            des={"Explore processors, architecture, and instructions."}
            id={"micro"}
            bookLink={"microprocessor_book"}
            noteLink={"microprocessor_note"}
          />

          <Card
            img={"/BookImg/sem02EnglishBook.png"}
            title={"English"}
            des={"Enhance communication, grammar, and composition skills."}
            id={"eng"}
            bookLink={"sem02EnglishBook"}
            noteLink={"english_note"}
          />

          <Card
            img={"/BookImg/sociology.jpg"}
            title={"Account"}
            des={"Understand accounting principles and financial systems."}
            id={"ac"}
            bookLink={"account_book"}
            noteLink={"account_note"}
          />

          <Card
            img={"/BookImg/math.jpg"}
            title={"Math"}
            des={"Master matrices, calculus, and other key topics."}
            id={"math"}
            bookLink={"sem02Math"}    // this is sample add same like this in f.....
            noteLink={"mathNote"}  
          />
        </>
      )}
    </div>
  );
}

export default Sem02;
