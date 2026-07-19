import React, { useState, useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// ---------------------------------------------------------------------------
// EmailJS configuration.
// Create a free account at https://www.emailjs.com, then:
//   1. Add an Email Service (e.g. Gmail for houdaibrahimipro@gmail.com)  -> Service ID
//   2. Create an Email Template with variables:
//        {{from_name}}, {{from_email}}, {{subject}}, {{message}}         -> Template ID
//      and set the template "To Email" to houdaibrahimipro@gmail.com
//   3. Copy your Public Key from Account > General
// Paste the three values below (they are safe to expose for EmailJS).
// ---------------------------------------------------------------------------
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const formRef = useRef(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    const subject = form.subject || "Portfolio contact";
    // Cover every common EmailJS template variable name, and embed the
    // sender's contact details in the message body itself so they are
    // always visible regardless of how the template is configured.
    const templateParams = {
      name: form.name,
      email: form.email,
      title: subject,
      from_name: form.name,
      from_email: form.email,
      reply_to: form.email,
      subject: subject,
      message: `${form.message}\n\n————————————\nSender: ${form.name}\nEmail: ${form.email}\nSubject: ${subject}`,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent — I'll get back to you soon.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        message:
          "Something went wrong sending your message. Please email me directly at houdaibrahimipro@gmail.com.",
      });
    }
  }

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={10}>
            <h1 className="project-heading" style={{ textAlign: "center" }}>
              Let's <strong className="purple">Talk</strong>
            </h1>
            <p style={{ textAlign: "center", paddingBottom: "20px" }}>
              Have a project, an opportunity, or just want to say hi? I'd love
              to hear from you.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={5}>
            <div className="contact-card">
              <h3 className="skill-category-title">Contact Info</h3>
              <p className="skill-category-desc">
                Prefer email or social? Reach me via any of the channels below.
              </p>
              <a href="mailto:houdaibrahimipro@gmail.com" className="contact-info-link">
                <i className="far fa-envelope"></i> houdaibrahimipro@gmail.com
              </a>
              <a
                href="https://github.com/houdaibr"
                target="_blank"
                rel="noreferrer"
                className="contact-info-link"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/houda-el-ibrahimi-62a249219/"
                target="_blank"
                rel="noreferrer"
                className="contact-info-link"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>

              <h4 className="skill-category-title" style={{ marginTop: "25px" }}>
                I can help with
              </h4>
              <div>
                <span className="skill-tag">Backend Systems</span>
                <span className="skill-tag">Distributed Systems</span>
                <span className="skill-tag">Gen AI / LLM Integration</span>
                <span className="skill-tag">Cloud & DevOps</span>
              </div>

              <div className="key-fact-card" style={{ marginTop: "20px" }}>
                <p className="key-fact-label">Availability</p>
                <p className="key-fact-value">Open to new opportunities</p>
              </div>
              <div className="key-fact-card">
                <p className="key-fact-label">Timezone</p>
                <p className="key-fact-value">GMT+1 (Casablanca)</p>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="contact-card contact-form">
              <h3 className="skill-category-title">Send a Message</h3>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="fork-btn-inner"
                  style={{ marginTop: "20px" }}
                  disabled={status.state === "sending"}
                >
                  {status.state === "sending" ? "Sending…" : "Send Message"}
                </Button>
                {status.state === "success" && (
                  <p className="form-status form-status-success">{status.message}</p>
                )}
                {status.state === "error" && (
                  <p className="form-status form-status-error">{status.message}</p>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
