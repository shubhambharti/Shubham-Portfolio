import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/nav-img.png";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="home-about-section" id="about" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description" data-aos="zoom-in">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <span className="purple">Shubham Bharti</span>, a passionate and dedicated
              <b className="purple"> Software Developer</b> with a strong foundation in
              design and problem-solving. I love to code and enjoy tackling complex
              challenges by building efficient, scalable solutions.
              <br />
              <br />
              My current focus is on full-stack web development using the{" "}
              <b className="purple">MERN stack</b> (MongoDB, Express.js, React.js, Node.js),
              with hands-on experience in{" "}
              <b className="purple">HTML, CSS, JavaScript, Bootstrap, and MySQL</b>.
              <br />
              <br />
              While my primary expertise lies in modern JavaScript technologies, my background
              in <b className="purple">Java and J2EE</b> equips me to understand
              robust backend architectures and enterprise-level applications.
              <br />
              <br />
              I am always eager to learn new tools and frameworks trending in the market,
              and I’m actively seeking opportunities as a{" "}
              <b className="purple">Full Stack Developer</b> where I can apply my knowledge,
              contribute to impactful projects, and grow as a developer.
              <br />
              <br />
              Outside of work, I am a curious traveler who enjoys exploring new places and
              experiences. I live by the principles of{" "}
              <b className="purple">simplicity, truthfulness, honesty, and calmness</b>,
              which guide me both professionally and personally.
            </p>

            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
                and also in areas related to{" "}
                <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p> */}
          </Col>
          <Col md={4} className="myAvtar d-none d-md-block" data-aos="zoom-in">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
