import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Github() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="github-section" data-aos="zoom-in" data-aos-anchor-placement="top-center">
      <h1 className="project-heading text-center mb-4">
        Days  <strong className="purple">Code</strong>
      </h1>
      <Row className="justify-content-center">
        <GitHubCalendar
          username="shubhambharti"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>
    </Container>
  );
}
