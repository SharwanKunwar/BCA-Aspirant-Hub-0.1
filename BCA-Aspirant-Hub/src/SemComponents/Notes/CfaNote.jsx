import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function CfaNote() {
  const cfaPdfUrl = "/PDFs/BIG.pdf"; // Path to the PDF file in the public folder

  const handleDownload = () => {
    const isConfirmed = window.confirm("Are you sure you want to download this PDF?");
    if (isConfirmed) {
      const link = document.createElement("a");
      link.href = cfaPdfUrl;
      link.download = "BIG.pdf";
      link.click();
    }
  };

  return (
    <div className="bg-sky-300 w-screen h-screen flex flex-col justify-start items-center p-5 gap-10 text-black">
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[90%] m-10 flex justify-center">
          <div className="bg-white sm:h-[500px] w-[300px] p-5 rounded-2xl flex flex-col justify-center items-center gap-5 shadow-md">
            <img
              className="w-full h-[200px] object-cover rounded-md"
              src="/BookImg/cfa.jpg"
              alt="img"
            />
            <button
              onClick={handleDownload}
              className="bg-black text-white w-[80%] h-[40px] shadow-md rounded-md flex justify-center items-center"
            >
              Download Note PDF
            </button>
            <a
              className="bg-black text-white w-[80%] h-[40px] shadow-md rounded-md flex justify-center items-center"
              href="#pd"
            >
              Preview Note
            </a>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center flex-grow p-5">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <div
            id="pd"
            className="w-full  h-[600px] bg-white rounded-md p-5 shadow-md overflow-y-auto"
          >
            <Viewer fileUrl={cfaPdfUrl} />
          </div>
        </Worker>
      </div>
    </div>
  );
}

export default CfaNote;
