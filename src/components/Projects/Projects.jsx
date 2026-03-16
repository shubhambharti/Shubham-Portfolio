import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import shadiglamImg from "../../Assets/Projects/shadiglam.png";
import mfEnggImg from "../../Assets/Projects/mfengg.png";
import financeTraker from "../../Assets/Projects/Portfolio1.png";
import ShoppingArea from "../../Assets/Projects/Portfolio2.png";
import CareerForge from "../../Assets/Projects/Portfolio3.png";
import GSSoftech from "../../Assets/Projects/Portfolio4.png";
import PersonalPortfolio1 from "../../Assets/Projects/Portfolio5.png";
import PersonalPortfolio2 from "../../Assets/Projects/Portfolio6.png";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div
          style={{
            position: "sticky",
            top: "70px",
            zIndex: 0,
            paddingBottom: "20px",
            backgroundColor: "var(--bg-color)",
          }}
        >
          <h1 className="project-heading" data-aos="fade-up">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }} data-aos="fade-up" data-aos-delay="100">
            Scroll down to see the projects I've worked on recently.
          </p>
        </div>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Col md={10}>
            <ProjectCard
              index={1}
              imgPath={shadiglamImg}
              isBlog={false}
              title="Shadiglam Platform & Portal"
              description="I architected and developed a comprehensive makeup artist and client platform from the ground up. This system includes secure role-based authentication, interactive dashboards for vendors to manage their services, and a seamless booking and payment flow for end-users. By designing custom RESTful APIs, I ensured efficient database management and optimized query performance for a highly scalable production environment."
              tech="Tech Stack: React.js, Next.js, Node.js, Tailwind CSS, MySQL"
              ghLink="#"
              demoLink="http://shadiglam.com/"
            />

            <ProjectCard
              index={2}
              imgPath={mfEnggImg}
              isBlog={false}
              title="MF Engineering and Fabrication"
              description="Designed and deployed a production-ready enterprise platform tailored for a manufacturing client. I implemented a customized backend to handle automated mailing services and client inquiries efficiently. On the frontend, I utilized Redux for robust global state management, ensuring a smooth, responsive UI that connects complex REST APIs with a scalable MERN stack architecture."
              tech="Tech Stack: React.js, Node.js, Bootstrap, Redux"
              ghLink="#"
              demoLink="https://mfengg.netlify.app/"
            />

            <ProjectCard
              index={3}
              imgPath={CareerForge}
              isBlog={false}
              title="Career Forge"
              description="Developed a responsive, cross-browser compatible consultancy platform for a UK-based client focused on career coaching and professional development. Delivered ahead of schedule, the site features an intuitive UI designed to maximize user engagement and streamline client communications. This project underscores my capability to translate international client requirements into polished, user-centric web experiences."
              tech="Tech Stack: JavaScript, HTML, CSS, Bootstrap"
              ghLink="https://github.com/shubhambharti/consultancytesting-main"
              demoLink="https://career-forge.co.uk/"
            />

            <ProjectCard
              index={4}
              imgPath={financeTraker}
              isBlog={false}
              title="FinanceTraker"
              description="A comprehensive personal finance application designed to help users take control of their economic health. It features intuitive dashboards using Chart.js to visually track income, expenses, and budget goals over time. Built with the MERN stack and styled with Tailwind CSS, the application offers a secure, seamless, and highly responsive experience for meticulous financial planning."
              tech="Tech Stack: MERN Stack, Tailwind CSS, Chart.js, MUI."
              ghLink="https://github.com/shubhambharti/Finance-Tracker"
              demoLink="https://shubham-finance-tracker.netlify.app/"
            />

            <ProjectCard
              index={5}
              imgPath={ShoppingArea}
              isBlog={false}
              title="Ecommerce Platform"
              description="A fully functional e-commerce web application featuring a modern, intuitive shopping experience. Users can seamlessly browse a dynamic product catalog, manage their shopping carts, and proceed through a secure checkout process. The backend is powered by Node.js and MongoDB to handle inventory and user data, while the React frontend guarantees a responsive, mobile-friendly interface."
              tech="Tech Stack: React, Bootstrap, Node.js, MongoDB."
              ghLink="#"
              demoLink="#"
            />

            <ProjectCard
              index={6}
              imgPath={GSSoftech}
              isBlog={false}
              title="GS Softech"
              description="Collaborated on building a modern corporate website for an IT solutions provider. The platform showcases a responsive design, highlighting the company's services in web development, UI/UX, and digital marketing. My focus was on optimizing the frontend architecture to ensure fast load times, smooth animations, and an engaging user experience that drives business lead generation."
              tech="Tech Stack: HTML, CSS, JavaScript"
              ghLink="https://github.com/shubhambharti/GS-Softech"
              demoLink="https://gssoftech.netlify.app/"
            />

            <ProjectCard
              index={7}
              imgPath={PersonalPortfolio1}
              isBlog={false}
              title="Personal Portfolio v1"
              description="The first iteration of my personal portfolio, built to establish my initial online presence. It focuses on a clean, straightforward design to display my early projects, fundamental coding skills, and resume using core web technologies."
              tech="Tech Stack: HTML, CSS, JavaScript"
              ghLink="https://github.com/shubhambharti/Personal-Portfolio"
              demoLink="https://shubhambhartiportfolio1.netlify.app/"
            />

            <ProjectCard
              index={8}
              imgPath={PersonalPortfolio2}
              isBlog={false}
              title="Personal Portfolio v2"
              description="The second evolution of my digital presence, upgraded to a React-based architecture. This version introduced better component reusability, improved routing, and a more dynamic user interface to showcase my growing expertise as a developer."
              tech="Tech Stack: HTML, CSS, JavaScript"
              ghLink="https://github.com/shubhambharti/portfolio"
              demoLink="https://shubhambhartiportfolio2.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

// import React, { useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";

// import shadiglamImg from "../../Assets/Projects/shadiglam.png";
// import mfEnggImg from "../../Assets/Projects/mfengg.png";

// import financeTraker from "../../Assets/Projects/Portfolio1.png";
// import ShoppingArea from "../../Assets/Projects/Portfolio2.png";
// import CareerForge from "../../Assets/Projects/Portfolio3.png";
// import GSSoftech from "../../Assets/Projects/Portfolio4.png";
// import PersonalPortfolio1 from "../../Assets/Projects/Portfolio5.png";
// import PersonalPortfolio2 from "../../Assets/Projects/Portfolio6.png";

// export default function Projects() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading" data-aos="fade-up">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }} data-aos="fade-up" data-aos-delay="100">
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           {/* Shadiglam Project */}
//           <Col md={4} className="project-card" data-aos="zoom-in">
//             <ProjectCard
//               imgPath={shadiglamImg}
//               isBlog={false}
//               title="Shadiglam Platform & Portal"
//               description="A comprehensive makeup artist and user platform built from scratch. Features secure authentication, interactive dashboards, booking/payment controls, and custom RESTful APIs for efficient database management."
//               tech="Tech Stack: React.js, Next.js, Node.js, Tailwind CSS, MySQL"
//               ghLink="#"
//               demoLink="http://shadiglam.com/"
//             />
//           </Col>

//           {/* MF Engineering Project */}
//           <Col
//             md={4}
//             className="project-card"
//             data-aos="zoom-in"
//             data-aos-delay="100"
//           >
//             <ProjectCard
//               imgPath={mfEnggImg}
//               isBlog={false}
//               title="MF Engineering and Fabrication"
//               description="A production-ready enterprise platform featuring a customized backend API for automated mail services, global state management with Redux, and scalable REST API connectivity."
//               tech="Tech Stack: React.js, Node.js, Bootstrap, Redux"
//               ghLink="#"
//               demoLink="https://mfengg.netlify.app/"
//             />
//           </Col>

//           {/* Career Forge Project */}
//           <Col
//             md={4}
//             className="project-card"
//             data-aos="zoom-in"
//             data-aos-delay="200"
//           >
//             <ProjectCard
//               imgPath={CareerForge}
//               isBlog={false}
//               title="Career Forge"
//               description="Career-Forge is a UK-based consultancy guiding professionals with CVs, interviews, leadership, and global career moves through personalized coaching."
//               tech="Tech Stack: JavaScript, HTML, CSS, Bootstrap"
//               ghLink="https://github.com/shubhambharti/consultancytesting-main"
//               demoLink="https://career-forge.co.uk/"
//             />
//           </Col>

//           {/* Finance Tracker */}
//           <Col
//             md={4}
//             className="project-card"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <ProjectCard
//               imgPath={financeTraker}
//               isBlog={false}
//               title="FinanceTraker"
//               description="A full-featured personal finance tracker to manage income, expenses, and budgets effectively."
//               tech="Tech Stack: MERN Stack, Tailwind CSS, Chart.js, MUI."
//               ghLink="https://github.com/shubhambharti/Finance-Tracker"
//               demoLink="https://shubham-finance-tracker.netlify.app/"
//             />
//           </Col>

//           {/* Ecommerce Platform */}
//           <Col
//             md={4}
//             className="project-card"
//             data-aos="zoom-in"
//             data-aos-delay="400"
//           >
//             <ProjectCard
//               imgPath={ShoppingArea}
//               isBlog={false}
//               title="Ecommerce Platform"
//               description="A modern e-commerce web application where users can browse products, manage their cart, and place orders with ease."
//               tech="Tech Stack: React, Bootstrap, Node.js, MongoDB."
//               ghLink="#"
//               demoLink="#"
//             />
//           </Col>

//           {/* GS Softech */}
//           <Col
//             md={4}
//             className="project-card"
//             data-aos="zoom-in"
//             data-aos-delay="500"
//           >
//             <ProjectCard
//               imgPath={GSSoftech}
//               isBlog={false}
//               title="GS Softech"
//               description="GS Softech is a modern IT solutions site I helped build, offering responsive design, web development, UI/UX, and digital services for growing businesses."
//               ghLink="https://github.com/shubhambharti/GS-Softech"
//               demoLink="https://gssoftech.netlify.app/"
//             />
//           </Col>

//           {/* Personal Portfolio 1 */}
//           <Col
//             md={4}
//             className="project-card"
//             data-aos="zoom-in"
//             data-aos-delay="600"
//           >
//             <ProjectCard
//               imgPath={PersonalPortfolio1}
//               isBlog={false}
//               title="Personal Portfolio"
//               description="This is my previous portfolio, showcasing my projects and skills in software development with a clean, user-friendly design."
//               ghLink="https://github.com/shubhambharti/Personal-Portfolio"
//               demoLink="https://shubhambhartiportfolio1.netlify.app/"
//             />
//           </Col>

//           {/* Personal Portfolio 2 */}
//           <Col
//             md={4}
//             className="project-card"
//             data-aos="zoom-in"
//             data-aos-delay="700"
//           >
//             <ProjectCard
//               imgPath={PersonalPortfolio2}
//               isBlog={false}
//               title="Personal Portfolio 2"
//               description="This is my second previous portfolio, showcasing my projects and skills in software development with a clean, user-friendly design."
//               ghLink="https://github.com/shubhambharti/portfolio"
//               demoLink="https://shubhambhartiportfolio2.netlify.app/"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
