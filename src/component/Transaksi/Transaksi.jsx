import React, { useState, useEffect } from 'react'
import './StyleTransaksi.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar/NavBar';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Transaksi() {
  // penanda saat user select antara sumbawa besar dan barat
  // Sumbawa Besar || Sumbawa Barat
  const [destinationSelect, setDestinationSelect] = useState("")
  const [destinasiSumbawa, setDestinasiSumbawa] = useState([]);
  const [destinasiSumbawaBarat, setDestinasiSumbawaBarat] = useState([]);
  const [stateTransaksi, setStateTransaksi] = useState({});
  const { tujuan, id } = useParams();
  const [selectedDate, setselectedDate] = useState(null)


  const handleChange = (event) => {
    setDestinationSelect(event.target.value);
  }

  const fetchPromise = async () => {
    const [firstResponse, secondResponse] = await Promise.all([
      axios.get(`https://631843e9f6b281877c677851.mockapi.io/sumbawa`),
      axios.get(`https://631843e9f6b281877c677851.mockapi.io/sumbawa_barat`)
    ]);
    setDestinasiSumbawa(firstResponse.data)
    setDestinasiSumbawaBarat(secondResponse.data)
  }

  useEffect(() => {
    fetchPromise()
    filteretSumbawa()
    setDestinationSelect(tujuan)
  }, []);


  const hendleKota = (event) => {
    const getKotaId = event.target.value;
  }

  const filteretSumbawa = () => {
    const selectTransaksi = destinasiSumbawa.filter((destinasi) => {
      return destinasi.id === id
    })
    setStateTransaksi(selectTransaksi)
    console.log(selectTransaksi);
  }

  return (
    <>
      <Navbar />
        <div className="container">
          <Form>
            <fieldset>
            <h4><strong>Biodata Diri</strong></h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="inputNamaLengkap" placeholder="Nama Lengkap" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="alamat" placeholder="Alamat" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="Email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="No handphone" />
              </Form.Group>

              <h4><strong>Booking</strong></h4>
              <Form.Group className="mb-3 form-trs">
                <Form.Label htmlFor="">Kota Destinasi</Form.Label>
                <Form.Select value={destinationSelect} onChange={handleChange}>
                  <option>Search Your Destination</option>
                  <option value={'SumbawaBesar'}>Sumbawa Besar</option>
                  <option value={'SumbawaBarat'}>Sumbawa Barat</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3 form-trs">
                <Form.Label htmlFor="">Tujuan Wisata</Form.Label>
                <Form.Select id="" onChange={(e) => hendleKota()} >
                  <option>Daftar Destinasi</option>

                  {
                    destinationSelect === 'SumbawaBesar' && destinasiSumbawa.map((daftarNama) => (
                      <option selected={id === daftarNama.id} key={daftarNama.id} value={daftarNama.id}>{daftarNama.namaTempat}</option>
                    )
                    )
                  }

                  {
                    destinationSelect === 'SumbawaBarat' && destinasiSumbawaBarat.map((daftarNama) => (
                      <option key={daftarNama.id} value={daftarNama.id}>{daftarNama.namaTempat}</option>
                    )
                    )
                  }
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 form-trs">
                <Form.Label htmlFor="">Your Trip</Form.Label>
                <Form.Select id="">
                  <option>Choose Your Type</option>
                  <option>Adventure</option>
                  <option>Camping</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Choose Ticket Travel</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={date => setselectedDate(date)}
                  dateFormat='dd/MM/yyyy'
                  minDate={new Date()}
                />
              </Form.Group>
              <Button type="submit">CHECKOUT</Button>
            </fieldset>
          </Form>
        </div>
    </>
  )
}

export default Transaksi
