import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Houda EL Ibrahimi</h3>
        </Col>
             <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/houdaibr" style={{ color: "white" }}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/houda-el-ibrahimi-62a249219/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/h_ouda_el_ibrahimi/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/houda8731?s=09"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/21017777/houda-el-ibrahimi"
                style={{ color: "white" }}
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://dribbble.com/houdaibr"
                style={{ color: "white" }}
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.behance.net/houdaelibrahimi"
                style={{ color: "white" }}
              >
                <i className="fab fa-behance"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
