import React from "react";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImPointRight } from "react-icons/im";

function Experience() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3
            style={{ color: "var(--imp-text-color)", marginBottom: "20px" }}
            data-aos="flip-down"
            data-aos-delay={1}
          >
            Professional Experience
          </h3>

          <div
            className="experience-item"
            style={{ marginBottom: "30px" }}
            data-aos="flip-down"
            data-aos-delay={2}
          >
            <h4 className="purple">Software Developer</h4>
            <h5 style={{ color: "#a588c0", fontWeight: "normal" }}>
              RTF Insurance Broker Pvt Ltd.
            </h5>
            <p
              style={{
                color: "#a588c0",
                fontStyle: "italic",
                marginBottom: "15px",
              }}
            >
              October 2025 – Present • Greater Noida, UP
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Developed RTF portal/website using React.js,
                Next.js, Tailwind CSS, and Node.js, implementing UI, dashboards,
                authentication, and API integrations.
              </li>
              <li className="about-activity">
                <ImPointRight /> Optimized web performance, handled state
                management with Redux-Saga, and enhanced backend APIs using
                Node.js and PHP Laravel.
              </li>
              <li className="about-activity">
                <ImPointRight /> Managed deployment, maintenance, and
                collaborated with cross-functional teams to implement new
                features and fix production issues.
              </li>
            </ul>
          </div>

          <p
            style={{ color: "rgb(155 126 172)", marginTop: "20px" }}
            data-aos="flip-up"
            data-aos-delay={1}
            data-aos-anchor-placement="top-center"
          >
            "Experience is the teacher of all things, and every project is a
            step forward!"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Experience;

// import React from "react";
// import Card from "react-bootstrap/Card";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { ImPointRight } from "react-icons/im";

// function Experience() {
//     return (
//         <Card className="quote-card-view">
//             <Card.Body>
//                 <blockquote className="blockquote mb-0">
//                     <h3 style={{ color: "var(--imp-text-color)", marginBottom: "20px" }} data-aos="flip-down" data-aos-delay={1}>
//                         Professional Experience
//                     </h3>

//                     <div className="experience-item" style={{ marginBottom: "30px" }} data-aos="flip-down" data-aos-delay={2}>
//                         <h4 className="purple">Full Stack Developer</h4>
//                         <h5 style={{ color: "#a588c0", fontWeight: "normal" }}>Softsyth Software Solution Pvt. Ltd</h5>
//                         <p style={{ color: "#a588c0", fontStyle: "italic", marginBottom: "15px" }}>
//                             2022 - 2023 • Faridabad
//                         </p>
//                         <ul>
//                             <li className="about-activity">
//                                 <ImPointRight /> Developed and maintained web applications using J2EE
//                             </li>
//                             <li className="about-activity">
//                                 <ImPointRight /> Collaborated with cross-functional teams to deliver high-quality software solutions
//                             </li>
//                             <li className="about-activity">
//                                 <ImPointRight /> Implemented responsive UI/UX designs and optimized application performance
//                             </li>
//                             <li className="about-activity">
//                                 <ImPointRight /> Technologies: Java, MySQL, Bootstrap
//                             </li>
//                         </ul>
//                     </div>

//                     <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }} data-aos="flip-up" data-aos-delay={1} data-aos-anchor-placement="top-center">
//                         "Experience is the teacher of all things, and every project is a step forward!"
//                     </p>
//                 </blockquote>
//             </Card.Body>
//         </Card>
//     );
// }

// export default Experience;
