import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CV from "../../Assets/Projects/CV.pdf";
function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h2 className="resume-title" style={{ textAlign: "center", paddingBottom: "10px" }}>
            Software Engineer <span className="purple">@Oracle</span>
          </h2>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={CV} target="_blank" className="downloadbutton">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>

        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer — Oracle (Oracle Analytics Cloud)"
              date="July 2024 - Present"
              content={[
                "Built a one-click debugging tool for Private Endpoints, replacing a manual 5-step process for internal DevOps teams",
                "Designed and shipped an on-demand OKE cluster provisioning workflow, making provisioning 2x faster and removing a dependency on an internal deployment tool blocked by code-freeze periods",
                "Built an MCP server exposing OAC control-plane APIs to Gen AI assistants, enabling natural-language fleet queries and improving search efficiency by 40%",
                "Set up a RAG pipeline combining OAC documentation with real-time fleet data, cutting hallucinations by 30% through product-grounded answers",
                "Automated cleanup of failed Private Endpoints, removing a recurring manual step on access-restricted resources",
                "Rolled out a restricted shell model across all environments in 50 OAC regions, removing unnecessary SSH access for OCI compliance with zero regressions",
                "Participated in on-call rotations and resolved production incidents to ensure service reliability",
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern — Oracle (Oracle Analytics Cloud)"
              date="January 2024 - June 2024"
              content={[
                "Built real-time dashboards to monitor infrastructure health and performance across OAC regions",
                "Led the migration of the team's 30 code repositories from Bitbucket to an internal platform, ensuring OCI compliance and reducing third-party costs with zero CI/CD downtime",
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern — Full Stack, Netopia Solutions"
              date="July 2023 - September 2023"
              content={[
                "Designed and built a microservices architecture for a recruitment platform within a 6-engineer Scrum team, increasing successful matches by 40% and cutting hiring time by 50%",
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern — Orange"
              date="June 2022 - September 2022"
              content={[
                "Built a drowning-alert mobile app for lifeguards and led a team of 7 interns, ranking 1st among 50 international teams at the Orange Summer Challenge (EY & Google)",
              ]}
            />

            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="National Institute of Posts and Telecommunications, Rabat, Morocco"
              date="2021 - 2024"
              content={["State Engineering Degree — Advanced Software Engineering for Digital Services"]}
            />
            <Resumecontent
              title="Omar Ibn Al Khattab, Meknes, Morocco"
              date="2019 - 2021"
              content={["Preparatory Classes (CPGE), Mathematics and Physics Branch"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Technical Skills</h3>
            <Resumecontent
              title="Languages & Databases"
              content={["Java, JavaScript, TypeScript, Python, SQL, MongoDB, PostgreSQL, MySQL"]}
            />
            <Resumecontent
              title="Systems & Backend"
              content={["Distributed Systems, Microservices, REST APIs, Gen AI (MCP, RAG, NLP, LLM), Spring Boot, React.js, Node.js"]}
            />
            <Resumecontent
              title="Cloud & DevOps"
              content={["OCI, AWS, Kubernetes, Terraform, Docker, CI/CD"]}
            />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
                "OCI Gen AI Professional — 2026",
                "Certified Kubernetes Application Developer — 2024",
                "AWS Certified Cloud Practitioner — 2023",
              ]}
            />

            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Vice-President, INPT Olympiads"
              date="2022 - 2023"
              content={[
                "Organized the 13th edition of the INPT Olympiads, supervising activities and coordinating between cell leaders",
              ]}
            />
            <Resumecontent
              title="General Secretary, Social Affairs Club (CAS INPT)"
              date="2022 - 2023"
              content={[
                "Organized volunteering activities and coordinated with international speakers",
              ]}
            />
            <Resumecontent
              title="Member, CIT INPT Club — Web Development Cell"
              content={[
                "Participated in the JNJD national developer competition and helped organize IDEH (International Days of Ethical Hacking)",
              ]}
            />

            <h3 className="resume-title">Ranks and Achievements</h3>
            <Resumecontent
              title=""
              content={[
                "1st place among 50 international teams, Orange Summer Challenge (EY & Google)",
              ]}
            />

            <h3 className="resume-title">Languages</h3>
            <Resumecontent
              title=""
              content={["Arabic (Native), French (C1), English (C1)"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
