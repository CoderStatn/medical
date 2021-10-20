import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                    <Navbar.Brand href="#home">Pshychiatrist Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Nav.Link as={Lin} href="#home">Home</Nav.Link>
                      <Nav.Link as={Lin} href="#about">About Dr Bryan</Nav.Link>
                      <Nav.Link as={Lin} href="#services">Services</Nav.Link>
                      <Nav.Link as={Lin} href="#testimonial">Testimonial</Nav.Link>
                      <Nav.Link as={Lin} href="#blog">Blog</Nav.Link>
                      <Nav.Link as={Lin} href="#booking">Book a visit</Nav.Link>
                      <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                      </Navbar.Text>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;