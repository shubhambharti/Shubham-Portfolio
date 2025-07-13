import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/ShubhamBharti.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(1.2);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleScale(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScale = (screenWidth) => {
    if (screenWidth > 1200) setScale(1.2);
    else if (screenWidth > 992) setScale(1.0);
    else if (screenWidth > 768) setScale(0.85);
    else setScale(0.7);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF View */}
        <Row className="resume justify-content-center">
          <div className="pdf-wrapper">
            <Document
              file={pdf}
              onLoadError={console.error}
              className="d-flex justify-content-center"
            >
              <Page
                pageNumber={1}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
