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
            Hey There, I am <span className="purple"> Houda EL Ibrahimi </span>,
            Web & Mobile Engineering Student from{" "}
            <span className="purple"> INPT</span> - Rabat, Morocoo.
            <br />
            <br />
            Apart from being a Compuetr Science student, I'm also :
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> UX/UI Designer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> CIT MEMBER
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> CAS Volunteer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>Vice President of the 3rd edition of the INPT Olympics
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
