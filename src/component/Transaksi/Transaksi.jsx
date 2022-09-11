import React from 'react'
import './StyleTransaksi.css'
import Navbar from '../Navbar/NavBar'

function Transaksi() {
  return (
    <>
    <Navbar />

    <section>
      <h4>Payment</h4>
      <div className="search">
        <div className="container">
          <label htmlFor="">Choose Your Destination</label>
          <input type="text" placeholder="Search Your Destination" />
        </div>
        <div className="container">
          <label htmlFor="">Check-in</label>
          <input type="date" />
        </div>
        <div className="container">
          <label htmlFor="">Check-out</label>
          <input type="date" />
        </div>
        <button>Pay Your Ticket Now</button>
      </div>
      <div>
        <button><h4> Happy Holidays</h4></button>
      </div>
    </section>
    </>
  );
}

export default Transaksi
