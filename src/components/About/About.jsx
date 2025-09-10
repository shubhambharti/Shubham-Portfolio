import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Education from "./Education";
import Experience from "./Experience";
import aboutImg from "../../Assets/about-img.jpg";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  const [activeSection, setActiveSection] = useState("about");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      default:
        return <Education />;
    }
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={aboutImg} alt="about" className="img-fluid rounded" />
            </Tilt>
          </Col>
          {/* Toggle Buttons */}
          <div className="about-toggle-buttons">
            <Button
              data-aos="fade-right" data-aos-delay={1} data-aos-anchor-placement="top-center"
              variant={activeSection === "education" ? "primary" : "outline-primary"}
              onClick={() => setActiveSection("education")}
              className="me-3 mb-2"
            >
              Education
            </Button>
            <Button
              data-aos="fade-left" data-aos-delay={1} data-aos-anchor-placement="top-center"
              variant={activeSection === "experience" ? "primary" : "outline-primary"}
              onClick={() => setActiveSection("experience")}
              className="mb-2"
            >
              Experience
            </Button>
          </div>

          {/* Render Active Section */}
          {renderActiveSection()}
        </Row>

        <Techstack />
        <Toolstack />
        <Github />
      </Container >
    </Container >
  );
}

export default About;
