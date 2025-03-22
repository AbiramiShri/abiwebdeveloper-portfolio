import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xyzegazg', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: formData}),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({name: '', email: '', message: ''});
      }
    } catch (error) {
      console.error('Form submission failed', error);
    }
  };

  return (
    <>
      <section id="contact" className="contact my-5">
        <Container>
          <h3 className="text-center">Contact Me</h3>
          <p className="text-center">
            Have a question or want to work together?
          </p>
          {success && (
            <p className="success-message">
              Thank you! Your message has been sent.
            </p>
          )}
          <Row className="justify-content-center">
            <form id="contact-form" onSubmit={handleSubmit}>
              <Col className="field col-12 col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
                <label htmlFor="name">Name</label>
              </Col>
              <Col className="field col-12 col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <label htmlFor="email">Email</label>
              </Col>
              <Col className="field col-12 col-md-6">
                <textarea
                  name="message"
                  placeholder=""
                  onChange={handleChange}
                  value={formData.message}></textarea>
                <label htmlFor="message">Message</label>
              </Col>
              <Col className="field col-12 col-md-6">
                <button type="submit" className="col-12">
                  Send Message
                </button>
              </Col>
            </form>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
