import React from 'react'
import './StyleTransaksi.css'
import Navbar from '../Navbar/NavBar'


function Transaksi() {
  return (
    <>
      <Navbar />
      <div name='payment' className='transaksi'>
        <div className="container">
          <div className="right">
            <h4>Biodata Diri</h4>
            <div className="mb-3">
              <input id="inputNamaLengkap" type="nama" placeholder="Nama Lengkap" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div className="mb-3">
              <input id="inputAlamat" type="alamat" placeholder="Alamat" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div className="mb-3">
              <input id="inputNIK" type="nik" placeholder="NIK" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div className="mb-3">
              <input id="inputEmail" type="email" placeholder="Email Addres" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div className="mb-3">
              <input id="inputNoHandphone" type="handphone" placeholder="No Handphone" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <button> Send </button>
          </div>
        <form>
          <div className="input-wrap">
            <h4>Proses Checkout</h4>
            <label>Destination</label>
            <select>
              <option value="1">Pilih</option>
              <option value="1">Sumbawa Besar</option>
              <option value="1">Sumbawa Barat</option>
            </select>
          </div>
          <div className="input-wrap">
            <label>Type</label>
            <select>
              <option value="1">Pilih</option>
              <option value="1">Adventure</option>
              <option value="1">Camping</option>
            </select>
          </div>
          <div className="date">
            <div className="input-wrap">
              <label>When</label>
              <input type="date" />
            </div>
            <div className="input-wrap">
              <label>Choose Ticket</label>
              <input type="date" />
            </div>
          </div>
          <div className="input-wrap">
            <label>Metode Pembayaran</label>
            <select>
              <option value="1">Pilih</option>
              <option value="1">Transfer Bank</option>
              <option value="1">Shopeypay</option>
              <option value="1">Alfamart</option>
              <option value="1">Indomaret</option>
            </select>
          </div>
          <button> Checkout </button>
        </form>
      </div>
      </div>
    </>
  )
}

export default Transaksi
