import React from "react";
import { Row, Col } from "react-bootstrap";

function KeyFacts() {
  const facts = [
    { label: "Location", value: "Casablanca, Morocco" },
    { label: "Timezone", value: "GMT+1" },
    { label: "Availability", value: "Open to new opportunities" },
    { label: "Expertise", value: "Backend, Distributed Systems & AI" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      {facts.map((fact, index) => (
        <Col md={6} lg={3} key={index}>
          <div className="key-fact-card">
            <p className="key-fact-label">{fact.label}</p>
            <p className="key-fact-value">{fact.value}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default KeyFacts;
