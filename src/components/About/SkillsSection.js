import React from "react";
import { Row, Col } from "react-bootstrap";

function SkillsSection() {
  const categories = [
    {
      title: "Distributed Systems",
      desc: "Designing and running systems that scale across regions and services.",
      tags: ["System Design","Microservices", "REST APIs", "GraphQL","gRPC", "RabbitMQ"],
    },
    {
      title: "Web Development",
      desc: "Core languages and frameworks I use to build backend services.",
      tags: ["Java", "Spring Boot", "Javascript","Node.js", "Python", "SQL"],
    },
    {
      title: "DevOps & Cloud",
      desc: "Provisioning, automating, and operating infrastructure at scale.",
      tags: [ "Kubernetes", "AWS","OCI" ,"Docker", "Terraform"],
    },
    {
      title: "Databases",
      desc: "Designing and querying relational and NoSQL databases",
      tags: [ "PostgreSQL", "MySQL","MongoDB"],
    },
    {
      title: "AI & LLM Technologies",
      desc: "Developing LLM-powered applications and AI-driven solutions",
      tags: ["LLM Integration", "MCP", "RAG", "NLP"],
    },


  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      {categories.map((cat, index) => (
        <Col md={6} lg={4} key={index} style={{ display: "flex" }}>
          <div className="skill-category-card">
            <h4 className="skill-category-title">{cat.title}</h4>
            <p className="skill-category-desc">{cat.desc}</p>
            <div>
              {cat.tags.map((tag, i) => (
                <span className="skill-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default SkillsSection;
