import React from 'react'
// import { Link } from 'react-router-dom'
import './NavStyle.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
      <Navbar className='navbarr navbar-dark' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">NgiungTravel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Destination" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/sumbawa">Sumbawa Besar</NavDropdown.Item>
                <NavDropdown.Item href="/ksb">
                  Sumbawa Barat
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/aboutus">
                About
              </Nav.Link>
              <Nav.Link href="/transaksi">
                Transaksi
              </Nav.Link>
              <Nav.Link href="/Login">
                Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar