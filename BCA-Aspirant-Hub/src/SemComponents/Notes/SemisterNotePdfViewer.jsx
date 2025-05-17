import React from "react";
import { Outlet } from "react-router-dom";

function SemisterNotePdfViewer() {
  return (
    <div className=" w-screen">
      <Outlet />
    </div>
  );
}

export default SemisterNotePdfViewer;
