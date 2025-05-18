import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function CfaNote() {
  const cfaPdfUrl = "/PDFs/BIG.pdf"; // Path to the PDF file in the public folder

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cfaPdfUrl;
    link.download = "BIG.pdf"; // The name for the downloaded file
    link.click();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center p-5 gap-10 text-black ">
      <div className="w-fullflex justify-center items-center">
        <button
          className="bg-blue-400 px-6 py-3 rounded-md shadow-md text-white text-lg hover:bg-blue-500 transition duration-300"
          onClick={handleDownload}
        >
          Download Note PDF
        </button>
      </div>

      <div className="w-full flex justify-center items-center flex-grow">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <div className="w-full max-w-4xl h-full">
            <Viewer fileUrl={cfaPdfUrl} />
          </div>
        </Worker>
      </div>
    </div>
  );
}

export default CfaNote;
