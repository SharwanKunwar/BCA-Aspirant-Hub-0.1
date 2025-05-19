import PdfViewer from "../../Components/PdfViewer"

function DigitalLogic() {
  
 return (
   <>
    <PdfViewer
    type={"Note"}
    pdfPath={"/PDFs/BIG.pdf"}
    imgPath={"/BookImg/digitalLogicBookImg.jpg"}
    />
    </>
  )
}

export default DigitalLogic
