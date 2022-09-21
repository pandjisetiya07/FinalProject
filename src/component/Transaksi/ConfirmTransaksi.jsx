import React from 'react'
import NavBar from '../Navbar/NavBar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ConfirmTransaksi() {
  const [BookingRegister, setBookingRegister] = useState([])


  const getBookingTour = async () => {
    const booking = await axios.get("https://631843e9f6b281877c677851.mockapi.io/register")
    // console.log(booking.data);

    const userLogin = JSON.parse(localStorage.getItem('login'))
    // console.log(userLogin.email)
    const findUser = booking.data.find(user => {
      return user.email === userLogin.email
    })

    // console.log(findUser, 'ini yang ketemu');
    setBookingRegister(findUser.transaksi)
  }

  useEffect(() => {
    getBookingTour()
  }, [])

  return (
    <>
      <NavBar />
      {
        BookingRegister.map((get) => {
          return (
            <div className="container" key={get.id}>
              <div className="row" >
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Nama Pemesan</Form.Label>
                    <Form.Control placeholder={get.dataPemesan.user} disabled />
                  </Form.Group>
                </div>
                <div className="col-6 ">
                  <Form.Group className="mb-3">
                    <Form.Label>Email Pemesan</Form.Label>
                    <Form.Control placeholder={get.dataPemesan.email} disabled />
                  </Form.Group>
                </div>
                <div className="col-6">
                   <Form.Group className="mb-3">
                    <Form.Label>Tujuan Destinasi</Form.Label>
                    <Form.Control placeholder={get.pemenasan.tujuan} disabled />
                  </Form.Group>
                </div>
                <div className="col-6">
                   <Form.Group className="mb-3">
                    <Form.Label>No Telpon</Form.Label>
                    <Form.Control placeholder={get.dataPemesan.handphone} disabled />
                  </Form.Group>
                </div>
              </div>
            </div>
          )
        })
      }



    </>
  )
}

export default ConfirmTransaksi