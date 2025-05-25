import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function PdfViewer({ pdfPath, imgPath, type }) {

  const handleDownload = () => {
    const isConfirmed = window.confirm("Are you sure you want to download this PDF?");
    if (isConfirmed) {
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = pdfPath.split("/").pop(); // Extracts the file name from the path
      link.click();
    }
  };

  return (
    <div className="bg-sky-300 w-screen h-screen flex flex-col justify-start items-center p-0 gap-10 text-black">
      <div className="w-full flex justify-center items-center sm:mt-2 mt-10">
        <div className="w-[90%] m-10 flex justify-center">
          <div className="bg-white sm:h-[500px] w-[300px] p-3 rounded-2xl flex flex-col justify-center items-center gap-5 shadow-md">
            <img
              className="w-full h-[350px] object-cover"
              src={imgPath}
              alt="PDF Preview"
            />
            <button
              onClick={handleDownload}
              className="bg-black text-white w-[80%] h-[40px] shadow-md rounded-md flex justify-center items-center"
            >
              Download {type} pdf
            </button>
            <a
              className="bg-black text-white w-[80%] h-[40px] shadow-md rounded-md flex justify-center items-center"
              href="#pd"
            >
              Preview PDF
            </a>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center flex-grow p-5">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <div
            id="pd"
            className="sm:w-[70%] w-full sm:h-[600px] h-[700px] bg-white rounded-md p-5 shadow-md overflow-y-auto"
          >
            <Viewer fileUrl={pdfPath} />
          </div>
        </Worker>
      </div>
    </div>
  );
}

export default PdfViewer;
