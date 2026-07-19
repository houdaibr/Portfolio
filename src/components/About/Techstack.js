import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Techstack(prop) {
  return (
    <div>
      <Col xs={4} md={2} className="tech-icons" title={prop.title}>
        <i className={`${prop.iconName} tech-icon-images`} title={prop.title}></i>
      </Col>
    </div>
  );
}

export default Techstack;
