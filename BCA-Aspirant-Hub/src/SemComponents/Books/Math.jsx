import React from 'react'
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import PdfViewer from '../../Components/PdfViewer';

function Math() {
  
  return (
    <>

    <PdfViewer
    imgPath={"/BookImg/cfas.jpg"}
    pdfPath={"/PDFs/mathBook.pdf"}
    type={"Book"}
    />

    </>
  )
}

export default Math
