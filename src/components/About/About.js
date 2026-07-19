import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutcard from "./AboutCard";
import KeyFacts from "./KeyFacts";
import SkillsSection from "./SkillsSection";
import profilePhoto from "../../Assets/houda.png";
import Resumecontent from "../Resume/ResumeContent";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={12} style={{ textAlign: "center", paddingBottom: "20px" }}>
            <img src={profilePhoto} alt="Houda EL Ibrahimi" className="about-profile-photo" />
            <h1 style={{ fontSize: "2.1em", paddingTop: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={9}>
            <Aboutcard />
          </Col>
        </Row>

        <h1 className="project-heading">
          Key <strong className="purple">Facts </strong>
        </h1>
        <KeyFacts />

        <h1 className="project-heading">
          Skills <strong className="purple">& Tools </strong>
        </h1>
        <p style={{ color: "white" }}>
          Core stack, strengths, and what I'm exploring next.
        </p>
        <SkillsSection />

        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={9} className="resume">
            <Resumecontent
              title="Software Engineer — Oracle (Oracle Analytics Cloud)"
              date="July 2024 - Present"
              content={[
                "Own tooling and automation for the control plane behind Oracle Analytics Cloud, a distributed platform running across 50+ OCI regions",
                "Built an MCP server exposing OAC control-plane APIs to Gen AI assistants, enabling natural-language fleet queries and improving search efficiency by 40%",
                "Set up a RAG pipeline combining OAC documentation with real-time fleet data, cutting hallucinations by 30% through product-grounded answers",
                "Designed an on-demand OKE cluster provisioning workflow, making provisioning 2x faster and removing a dependency on a code-freeze-blocked internal tool",
                "Built a one-click Private Endpoint debugging tool and rolled out a restricted shell model across all 50 OAC regions for OCI compliance, with zero regressions",
                "Participate in on-call rotations, resolving production incidents and driving root-cause fixes to improve service reliability",
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern — Oracle (Oracle Analytics Cloud)"
              date="January 2024 - June 2024"
              content={[
                "Built real-time dashboards monitoring infrastructure health and performance across all OAC regions, giving the team early visibility into regional degradations",
                "Owned the end-to-end migration of the team's 30 code repositories from Bitbucket to an internal Oracle platform, with zero CI/CD downtime",
                "Ensured the migration met OCI compliance requirements while reducing recurring third-party tooling costs",
                "Converted the internship into a full-time Software Engineer offer on the same team",
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern — Full Stack, Netopia Solutions"
              date="July 2023 - September 2023"
              content={[
                "Joined a 6-engineer Scrum team building a recruitment platform connecting candidates with employers",
                "Designed a microservices architecture, splitting the platform into independently deployable services for candidates, employers, and matching",
                "Built REST APIs and the data model for the candidate-matching service, the platform's core",
                "Contributed to a 40% increase in successful matches and a 50% reduction in average hiring time",
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern — Orange (Orange Summer Challenge)"
              date="June 2022 - September 2022"
              content={[
                "Built a drowning-alert mobile app in Flutter, delivering real-time alerts to lifeguards",
                "Integrated the app with a Node.js/Firebase backend and a Raspberry Pi-powered autonomous rescue board for hardware-triggered alerts",
                "Designed the brand identity and end-to-end UX/UI, and led a team of 7 interns across design, development, and hardware",
                "Placed 1st among 50 international teams at the Orange Summer Challenge (EY & Google)",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
