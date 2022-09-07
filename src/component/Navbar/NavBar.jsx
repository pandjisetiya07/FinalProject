import React from 'react'
import { Link } from 'react-router-dom'
import './NavStyle.css'
import { BsPersonFill } from "react-icons/bs";

function NavBar() {
  return (
    <>
         <nav className="container navbar navbar-expand-lg">
              <div className="container">
                  <Link to="/" className="navbar-brand" id='personal'>Final Project</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link to="/" className="nav-link">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/destination" className="nav-link">Destination And Tour</Link>
                          </li>
                          {/* <li className="nav-item">
                              <Link to="/tour" className="nav-link">Tour And Travel</Link>
                          </li> */}
                          <li className="nav-item">
                              <Link to="/aboutus" className="nav-link">About Us</Link>
                          </li>
                      </ul>
                  </div>
              </div>
            <div className="icon">
              <Link to="" className='person'> <BsPersonFill />  </Link>
            </div>
          </nav>
    </>
  )
}

export default NavBar