import React from "react";
import Card from "react-bootstrap/Card";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImPointRight } from "react-icons/im";

function Education() {
    return (
        <Card className="quote-card-view" >
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <h3 style={{ color: "var(--imp-text-color)", marginBottom: "20px" }} data-aos="flip-down" data-aos-delay={1}>
                        My Educational Journey
                    </h3>

                    <div className="education-item" style={{ marginBottom: "25px" }} data-aos="flip-down" data-aos-delay={2}>
                        <h5 className="purple">Bachelor of Technology (B.Tech)<span style={{ color: "#a588c0", fontWeight: "normal" }}> - Computer Science & Engineering</span></h5>

                        <p style={{ color: "#a588c0", fontStyle: "italic", marginBottom: "10px" }}>
                            J.C Bose University of Science And Technology, YMCA • [2019 - 2023]
                        </p>
                        <ul>
                            <li className="about-activity">
                                <ImPointRight /> Relevant Coursework: Data Structures, Algorithms, Database Management
                            </li>
                            <li className="about-activity">
                                <ImPointRight /> CGPA: 8.327 / 10
                            </li>
                        </ul>
                    </div>

                    <div className="education-item" style={{ marginBottom: "25px" }} data-aos="flip-down" data-aos-delay={2}>
                        <h5 className="purple">Higher Secondary Education (12th) <span style={{ color: "#a588c0", fontWeight: "normal" }}>- Science Stream (PCM)</span></h5>
                        <p style={{ color: "#a588c0", fontStyle: "italic", marginBottom: "10px" }}>
                            B.N Public School • 2019
                        </p>
                        <ul>
                            <li className="about-activity">
                                <ImPointRight /> Subjects: Physics, Chemistry, Mathematics, IT
                            </li>
                        </ul>
                    </div>


                    <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }} data-aos="flip-up" data-aos-delay={1} data-aos-anchor-placement="top-center">
                        "Education is the foundation upon which we build our dreams!"
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Education;
