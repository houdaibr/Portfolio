import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={9} className="home-header">
              <h1 className="hero-headline">
                Building scalable systems where{" "}
                <span className="purple">distributed infrastructure</span>{" "}
                meets <span className="purple">AI</span>.
              </h1>
              <p className="hero-intro">
                Hi, I'm <strong className="main-name">Houda EL Ibrahimi</strong>{" "}
                — Software Engineer at Oracle, building scalable, cloud-native
                systems at the intersection of distributed infrastructure and
                Artificial Intelligence.
              </p>
              <div className="hero-actions">
                <Button as={Link} to="/project" className="fork-btn-inner hero-btn">
                  View Projects
                </Button>
                <Link to="/about" className="more-about-link hero-more-link">
                  More about me →
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
