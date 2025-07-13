import { Container, Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithub,
  DiJava,
  DiMysql
} from "react-icons/di";
import {
  SiNextdotjs,
  SiBootstrap
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Techstack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techItems = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <DiGithub />, name: "GitHub" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiMysql />, name: "MySQL" },
  ];

  return (
    <Container data-aos="zoom-in" data-aos-anchor-placement="top-center">
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
            data-aos="flip-up"
            data-aos-delay={index * 100}
          >
            <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
            <h5 className="mt-2">{tech.name}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


