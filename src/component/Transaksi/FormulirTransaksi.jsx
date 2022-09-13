import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
import './StyleTransaksi.css'



function FormulirTransaksi() {
  return (
    <>
    <Form>
        <h4><strong>FORMULIR PRIBADI</strong></h4>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Lengkap</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Alamat</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NIK</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="" placeholder="" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nomer Handphone</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="">
        Kirim
      </Button>
    </Form>
    </>
  );
}

export default FormulirTransaksi;