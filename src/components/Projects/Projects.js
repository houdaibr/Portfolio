import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";


const projects = [
  {
    title: "MCommerce",
    bullets: [
      "Built a microservices e-commerce platform of 6 independently deployable services communicating over gRPC/GraphQL (synchronous) and RabbitMQ events (asynchronous).",
      "Managed traffic routing, retries, and resilience between services with an Istio service mesh.",
      "Automated the full deployment pipeline on Kubernetes with GitLab CI and ArgoCD.",
    ],
    tech: [
      "Kubernetes",
      "Istio",
      "gRPC",
      "GraphQL",
      "React.js",
      "Node.js",
      "MongoDB",
      "RabbitMQ",
    ],
    link: "https://github.com/houdaibr/E-commerce-Microservices-Application",
  },
  {
    title: "Legal AI",
    bullets: [
      "Automated the first pass of legal contract review by extracting key clauses from unstructured documents with NLP.",
      "Scored clause-level risk via sentiment and pattern analysis to surface what needs a lawyer's attention first.",
      "Added a rephrasing model that translates dense legal language into plain-English explanations for non-lawyers.",
    ],
    tech: ["NLP", "Flask", "Next.js", "TypeScript", "Docker"],
    link: "https://github.com/taouchikhtkhouloud/Legal-AI-Project",
  },
  {
    title: "Confluence AI Summarizer",
    bullets: [
      "Built a Gen AI plugin at Oracle's OraHacks hackathon that indexes a Confluence space and answers questions in natural language.",
      "Grounded LLM responses in the team's actual Confluence content for accurate, product-specific answers.",
      "Cut the time engineers spend searching for information by 50%.",
    ],
    tech: ["Gen AI", "LLM", "OCI", "Confluence API"],
    link: "",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Personal <strong className="purple">Projects</strong>
        </h1>
        <p>
          Personal & hackathon projects built alongside my work at Oracle. More
          on the way.
        </p>
        <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
          <Col md={11} lg={10}>
            {projects.map((p, i) => (
              <ProjectItem key={i} {...p} />
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
