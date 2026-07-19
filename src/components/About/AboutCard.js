import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple"> Houda EL Ibrahimi </span>, a{" "}
            <span className="purple">Software Engineer</span> with over 2
            years at <span className="purple">Oracle</span> building
            scalable, cloud-native systems at the intersection of{" "}
            <span className="purple">distributed infrastructure</span> and{" "}
            <span className="purple">Artificial Intelligence</span>.
            <br />
            <br />
            Skilled in integrating LLMs, designing data-driven systems, and
            optimizing performance for large-scale applications.
            <br />
            <br />
            I'm interested in{" "}
            <span className="purple">large-scale distributed systems and AI</span>,
            particularly where the two intersect. I thrive in fast-paced
            environments, collaborating across teams to design, prototype,
            and ship software that reaches real users at scale.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
