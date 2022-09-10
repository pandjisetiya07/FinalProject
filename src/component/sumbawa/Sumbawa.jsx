import React from 'react'
import NavBar from '../Navbar/NavBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Sumbawa() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataSumbawa, setDataSumbawa] = useState([])
  const getSumbawaData = async () => {
    const result = await axios.get("https://631843e9f6b281877c677851.mockapi.io/sumbawa")
    console.log(result)
    setDataSumbawa(result.data)
  }

  useEffect (() => {
    getSumbawaData()
  }, [])

  return (
    <>
      <NavBar />
      
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 py-3">

            <Card>
              <Card.Img variant="top" src={dataSumbawa.images} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={handleShow}>
                  Detail Destinasi
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Footer>
            </Card>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sumbawa
