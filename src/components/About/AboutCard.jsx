import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Bharti</span>{" "}
            from
            <span className="purple"> India</span>.
            <br />I am currently working as a{" "}
            <b className="purple">Software Developer</b> at{" "}
            <b className="purple">RTF Insurance Broker Pvt Ltd</b>.
            <br />
            With a strong focus on modern web ecosystems, I specialize in
            building scalable, user-centric applications using{" "}
            <b className="purple">React.js, Next.js, Node.js,</b> and{" "}
            <b className="purple">PHP Laravel</b>.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new destinations
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning emerging tools and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Building impactful side projects from scratch
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Guided by simplicity, truthfulness, honesty, and calmness to build
            things that make a difference!"
          </p>
          <footer className="blockquote-footer">Shubham Bharti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Shubham Bharti</span> from
//             <span className="purple"> India</span>.
//             <br />
//             I’m a passionate <b className="purple">Full Stack Developer</b> with a
//             strong grasp of modern web technologies and backend systems.
//             <br />
//             With hands-on experience in the <b className="purple">MERN stack</b> and
//             a foundation in <b className="purple">Java/J2EE</b>, I strive to build
//             robust, scalable, and impactful solutions.
//             <br />
//             <br />
//             Apart from coding, here are a few things I enjoy doing:
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Exploring new places and cultures
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Learning new frameworks & tech
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Working on personal side projects
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "I strive to build things that make a difference!"
//           </p>
//           <footer className="blockquote-footer">Shubham Bharti</footer>
//         </blockquote>

//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;
