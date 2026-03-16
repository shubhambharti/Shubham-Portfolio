import React from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const techStack = props.tech
    ? props.tech.replace("Tech Stack: ", "").split(", ")
    : [];

  return (
    <>
      <style>
        {`
          .stacked-card-wrapper {
            position: sticky;
            top: calc(120px + ${props.index * 12}px); 
            margin-bottom: 50px;
            z-index: ${props.index};
          }

          .stacked-card {
            background: #1a1a2e;
            border: 1px solid rgba(131, 88, 255, 0.3);
            border-radius: 20px;
            box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5); 
            display: flex;
            flex-direction: row;
            
            /* FIXED: Precise height calculation so it never gets cut off */
            height: calc(100vh - 240px); 
            min-height: 350px;
            max-height: 450px;
            
            overflow: hidden;
            transition: transform 0.3s ease;
          }

          .stacked-content {
            width: 50%;
            padding: 30px 40px; 
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .stacked-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 15px;
          }

          .stacked-desc {
            font-size: 1rem;
            color: #d1d1d1;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: justify;
          }

          .stacked-tags {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }

          .stacked-tag {
            background: rgba(131, 88, 255, 0.15);
            color: #c770f0;
            padding: 6px 14px;
            border-radius: 30px;
            font-size: 0.8rem;
            font-weight: 600;
            border: 1px solid rgba(131, 88, 255, 0.2);
          }

          .stacked-btn-group {
            display: flex;
            gap: 15px;
            margin-top: auto;
          }

          .btn-solid {
            background: #c770f0 !important;
            border: none !important;
            color: white !important;
            border-radius: 30px !important;
            padding: 8px 20px !important;
            font-weight: 600 !important;
            display: flex;
            align-items: center;
          }

          .btn-outline {
            background: transparent !important;
            border: 2px solid #c770f0 !important;
            color: white !important;
            border-radius: 30px !important;
            padding: 8px 20px !important;
            font-weight: 600 !important;
            display: flex;
            align-items: center;
          }

          .stacked-img-container {
            width: 50%;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.2); /* Much cleaner backdrop for mockups */
          }

          .stacked-img {
            width: 100%;
            height: 100%;
            /* FIXED: Changed to 'contain' so the image is never cut off */
            object-fit: contain; 
            object-position: center;
            border-radius: 10px;
          }

          @media (max-width: 992px) {
            .stacked-card {
              flex-direction: column-reverse; 
              height: auto;
              max-height: none;
            }
            .stacked-content, .stacked-img-container {
              width: 100%;
            }
            .stacked-content {
              padding: 40px 30px;
            }
            .stacked-img-container {
              padding: 30px 30px 0 30px;
            }
            .stacked-card-wrapper {
              top: 80px; 
            }
          }
        `}
      </style>

      <div className="stacked-card-wrapper">
        <div className="stacked-card">
          <div className="stacked-content">
            <h3 className="stacked-title">{props.title}</h3>

            {techStack.length > 0 && (
              <div className="stacked-tags">
                {techStack.map((tech, i) => (
                  <span key={i} className="stacked-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <p className="stacked-desc">{props.description}</p>

            <div className="stacked-btn-group">
              {props.ghLink !== "#" && (
                <Button
                  href={props.ghLink}
                  target="_blank"
                  className="btn-outline"
                >
                  <BsGithub size={20} style={{ marginRight: "8px" }} />
                  {props.isBlog ? "Blog" : "GitHub"}
                </Button>
              )}

              {!props.isBlog && props.demoLink !== "#" && (
                <Button
                  href={props.demoLink}
                  target="_blank"
                  className="btn-solid"
                >
                  <CgWebsite size={20} style={{ marginRight: "8px" }} />
                  Demo
                </Button>
              )}
            </div>
          </div>

          <div className="stacked-img-container">
            <img
              src={props.imgPath}
              alt={props.title}
              className="stacked-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;

// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//           <br />
//           <b>{props.tech}</b>
//         </Card.Text>
//         {props.ghLink !== "#" && (
//           <Button variant="primary" href={props.ghLink} target="_blank">
//             <BsGithub /> &nbsp;
//             {props.isBlog ? "Blog" : "GitHub"}
//           </Button>
//         )}
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;
