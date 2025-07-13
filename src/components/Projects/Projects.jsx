import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
        <h1 className="project-heading" data-aos="fade-up">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up" data-aos-delay="100">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" data-aos="zoom-in">
            <ProjectCard
              imgPath={financeTraker}
              isBlog={false}
              title="FinanceTraker"
              description="A full-featured personal finance tracker to manage income, expenses, and budgets effectively."
              tech="Tech Stack: MERN Stack, Tailwind CSS, Chart.js, MUI."
              ghLink="https://github.com/shubhambharti/Finance-Tracker"
              demoLink="https://shubham-finance-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in" data-aos-delay="100">
            <ProjectCard
              imgPath={ShoppingArea}
              isBlog={false}
              title="Ecommerce Platform"
              description="A modern e-commerce web application where users can browse products, manage their cart, and place orders with ease."
              tech="Tech Stack: React, Bootstrap, Node.js, MongoDB."

            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in" data-aos-delay="200">
            <ProjectCard
              imgPath={CareerForge}
              isBlog={false}
              title="Career Forge"
              description="Career-Forge is a UK-based consultancy guiding professionals with CVs, interviews, leadership, and global career moves through personalized coaching"
              ghLink="https://github.com/shubhambharti/consultancytesting-main"
              demoLink="https://career-forge.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in" data-aos-delay="300">
            <ProjectCard
              imgPath={GSSoftech}
              isBlog={false}
              title="GS Softech"
              description="GS Softech is a modern IT solutions site I helped build, offering responsive design, web development, UI/UX, and digital services for growing businesses."
              ghLink="https://github.com/shubhambharti/GS-Softech"
              demoLink="https://gssoftech.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in" data-aos-delay="400">
            <ProjectCard
              imgPath={PersonalPortfolio1}
              isBlog={false}
              title="Personal Portfolio"
              description="This is my previous portfolio, showcasing my projects and
                  skills in software development with a clean, user-friendly
                  design."
              ghLink="https://github.com/shubhambharti/Personal-Portfolio"
              demoLink="https://shubhambhartiportfolio1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in" data-aos-delay="500">
            <ProjectCard
              imgPath={PersonalPortfolio2}
              isBlog={false}
              title="Personal Portfolio 2"
              description="This is my second previous portfolio, showcasing my projects and
                  skills in software development with a clean, user-friendly
                  design."
              ghLink="https://github.com/shubhambharti/portfolio"
              demoLink="https://shubhambhartiportfolio2.netlify.app/"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}




// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// export default function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Chatify"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//             // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//             // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

