import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import salva from "../../Assets/salva.png";
import salvalandingpage from "../../Assets/Projects/salvalandingpage.PNG";
import AskBricall from "../../Assets/askBricall.png";


import rapport from "../../Assets/Projects/rapport.pdf";


import devopsproject from "../../Assets/Projects/projet-docker.png";

import eventscroller from "../../Assets/Projects/eventscroller.png";
import phonestore from "../../Assets/Projects/phonestore.png";
import tazaproject from "../../Assets/Projects/taza.PNG";
import webdesignproject from "../../Assets/Projects/login.png";
import jober from "../../Assets/Projects/jober.png";
import marketing from "../../Assets/Projects/marketing.pdf";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Coding <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
        <ProjectCard
              imgPath={AskBricall}
              isBlog={false}
              title="AskBricall"
              description="It is an online platform that connects technicians with clients, allowing them to discover the profiles of qualified professionals in each field. Technicians can publish their achievements over time, offering clients a glimpse of their expertise in their field of specialisation.. The project was built using : React Js, Spring Boot, PostgreSQL, Figma."
              link="https://github.com/BenomarAchraf/Bricall"
            />
                      </Col>
                      <Col md={4} className="project-card">

            <ProjectCard
              imgPath={salva}
              isBlog={false}
              title="Salva"
              description="Safety system that alerts both the lifeguard through a mobile application and an autonomous board to recover the swimmer in case of drowning. The project was built using : Flutter, Node Js, Fire base, Figma."
              link="https://github.com/hamzabla/Salva_odc_Project/"
            />
                      </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salvalandingpage}
              isBlog={false}
              title="Salva Landing page"
              lien="https://www.salva.social/"
              description="Landing page of salva project build with : React Js, Figma "
              link ="https://github.com/houdaibr/Landing-Page-of-Salva"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devopsproject}
              isBlog={false}
              title="Online Free Downloader"
              description="It is a project which I deployed, containerized a 3-tier application composed of frontend, backend and database developed with the MERN stack (MongoDB, Express, React, Node.js) and which allows to download from a link the coresspondant file using the 2 containerization tools : Docker & Kubernetess"
              link="https://github.com/houdaibr/Docker-Kubernetess-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ eventscroller }
              isBlog={false}
              title=" Event Scroller"
              description="
              EventScroller is a web application that allows its users to meet new people, learn new things, find help, get out of their comfort zone and pursue their passions together.This project was built using : React Js , Node Js "
              link="https://github.com/houdaibr/EventScroller-PFA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phonestore}
              isBlog={false}
              title=" Phone Store"
              lien="https://ourphone-store.netlify.app/"
              description="E-commerce website using React jS & firebase"
              link="https://github.com/houdaibr/site--commerce"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tazaproject}
              isBlog={false}
              title="Taza Tourism"
              description="a web platform that allows you to explore hotels, restaurants, places to visit and activities to do for tourists in the Region of Taza.this project was built using basic web developpement tools: html , CSS and Javascript."
              link="https://github.com/houdaibr/tahlatourisme"
            />
          </Col>
        
        </Row>
        <h1 className="project-heading">
          My  <strong className="purple">Web &  Mobile Design  </strong> Projects
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my management project  </p>
        <Row style={{ justifyContent: "center" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webdesignproject}
              isBlog={false}
              title="Para IN"
              description="This is a project in which we applied the UX/UI design approach to create an MVP for a mobile application for the management of INPT's parascoal activities."
              link={rapport}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jober}
              isBlog={false}
              title="Jober"
              description="It is a project that implements the business model canva and a digital communication plan for Jober internship search website according to custom criteria."
              link={marketing}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
