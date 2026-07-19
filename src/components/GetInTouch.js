import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../style.css";

function GetInTouch() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="get-in-touch-section">
      <h2 className="get-in-touch-heading">Let's Build Something Together</h2>
      <p className="get-in-touch-subtitle">
        Open to new opportunities in backend, distributed systems & AI.
      </p>
      <Button as={Link} to="/contact" variant="primary" className="fork-btn-inner">
        Get in Touch
      </Button>
      <div className="footer-bottom">
        <p className="get-in-touch-copyright">
          © {year} Houda EL Ibrahimi. All rights reserved.
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/houdaibr"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/houda-el-ibrahimi-62a249219/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default GetInTouch;
