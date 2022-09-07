import React from 'react'
import NavBar from '../Navbar/NavBar'
import './HomeStyle.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
    <div className="background">
        <NavBar />
        <div className='container'>
            <div className="titleHead">
                <h1 className='title hover-underline-animation'>Welcome to <span>Ngiung Travel Tour</span></h1>
            </div>
            <div className="subHead">
                <h5 className="subtitle">Destinasi Wisata dan Tour Sumbawa Nusa Tenggara Barat</h5>
            </div>

        </div>

        <Form className="container d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
        <Button variant="outline-primary" className='button'>Search</Button>
        </Form>
    </div>
    </>
  )
}

export default Home