import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiPostman,
  SiNetlify,
  SiVercel,
  SiRender
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";

function Toolstack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techItems = [
    { icon: <VscCode />, name: "Vs Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiRender />, name: "Render" },
  ];

  return (
    <Container >
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <Row className="justify-content-center pb-5">
        {techItems.map((tech, index) => (
          <Col
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="tech-icons text-center mb-4"
            key={index}
            data-aos="flip-down"
            data-aos-delay={index * 1000}
          >
            <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
            <h5 className="mt-2">{tech.name}</h5>
          </Col>
        ))}
      </Row>
    </Container>

  );
}

export default Toolstack;
