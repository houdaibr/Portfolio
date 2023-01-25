import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              A highly motivated person, dynamic, persevering and enthusiastic
              <br />
              <br /> I'm{" "}
              <b className="purple">Web & Mobile Engineering Student </b>
              at INPT, Rabat. My Graduation will be in 2024.
              <br />
              <br />
              I am also the general secretary of

              <b className="purple"> the social affairs club INPT</b>, Where I am actively involved in organizing social events 
             and making decisions to improve student life.
              <b className="purple"> As vice-president of the 13th edition of the INPT Olympiads, 
              </b>I am involved in the organization of sports events and competitions 
to promote team spirit.
              <br />
              <br />
              I'm also an active member of <b className="purple"> CIT 
 </b> where I develop my skills in web and mobile development and
 where I strive to pass on my knowledge to other members. 
 I am always looking for new opportunities to discover new ideas and 
take on new challenges.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/houdaibr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/houda8731?s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/houda-el-ibrahimi-62a249219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/h_ouda_el_ibrahimi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
