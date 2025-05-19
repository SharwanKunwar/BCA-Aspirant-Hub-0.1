import React from 'react'
import PdfViewer from '../../Components/PdfViewer'

function CfaNote() {
  return (
    <>
    <PdfViewer
    type={"Note"}
    pdfPath={"/PDFs/BIG.pdf"}
    imgPath={"/BookImg/cfa.jpg"}
    />
    </>
  )
}

export default CfaNote
