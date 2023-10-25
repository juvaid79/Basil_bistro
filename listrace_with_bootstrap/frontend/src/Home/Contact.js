import React from 'react';
import Footer from './Footer';
import HomeNavbar from './HomeNavbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contact from '../assets/images/blog/contact.gif'

function Contact() {
  return (
    <>
      <HomeNavbar />
      <hr />
      <Container className="contact-container">
        <h2>Contact the Restaurant Owner</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group>
                <Form.Label>Your Name :</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Your Email :</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message :</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Button variant="outline-info" type="submit" className='Contactbutton'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} >
            <img
            className="contact-page "
              src={contact}
              alt="contact-gif"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
