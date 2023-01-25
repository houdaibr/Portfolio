import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CV from "../../Assets/CV.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={CV} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
          &nbsp; &nbsp;
          <Button variant="primary" href={CV} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Télécharger CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Institut National Des Postes Et Télécommunications, Rabat, Morocco"
              date="2021 - 2024"
              content={["Advanced Software Engineering for Digital Services"]}
            />
            <Resumecontent
              title="Omar Ibn Al Khattab, Meknes, Morocco"
              date="2019 - 2021"
              content={["Preparatory Classes, Mathematics and Physics Branch"]}
            />
            <Resumecontent
              title="Lalla Amina High School"
              date="2018- 2019"
              content={["Scientific Baccalaureat, Mathematics Option"]}
            />
            <h3 className="resume-title">Experience</h3>
           
            <Resumecontent
              title="UX/UI & Full stack Developer & Mobile Developper- Orange Maroc"
              date="July 2022- October 2022"
              content={[
                "Brainstorming and choosing a problematic in the social field",
                "Designing the brand identity and UX/UI of the project.",
                "Developping the mobile application with flutter",
                "Developping the front-end ot the landing page of the application.",
                "Linking the Front part (flutter) with back-end(Node Js) and hardware  using  and Firebase.",
              ]}
            />
           
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Vice-président  [Olympiades INPT]"
              content={[
                "Organization of the 13th edition of the Olympiads of the INPT",
                "Supervision of the smooth running of activities",
                "Coordination between cell leaders",
                "Co-leader of the sponsoring cell of the event"
              ]}
            />
             <Resumecontent
              title="Member in the [CIT INPT club ]"
              content={[
                "Participation in JNJD competition [Journée natioanle des jeunes développeurs]",
                "Member in the organization of IDEH [International days of ethical hacking] ",
                "Mmebre in the Web Cell"

              ]}
            />
          
            <Resumecontent
              title="General Secretary of the Social Affairs Club  [CAS INPT]"
              content={[
                "Organization of several volunteering activities and communication with international speakers",
              ]}
            />
           
            
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Winners of the EY Technology Solutions prize and secnd Orange prize in the first edition of the international challenge [ Orange summer challenge]"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={CV} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
          &nbsp; &nbsp;
          <Button variant="primary" href={CV} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Télécharger CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
