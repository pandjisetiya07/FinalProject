import './login.css';
import React from 'react';
import { Link } from 'react-router-dom'
import {useState, useEffect } from 'react';
import Swal from "sweetalert2";

function Login() { 
    const [data, setData] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = ()=> {
        if (data) {
       const data1 = data.find(user => {
        return email === user.email && password === user.pwd
       })
       if (data1){
        Swal.fire({
            title: "Good job!",
            text: "Berhasil Register ",
            icon: "success",
            button: `/Login`,
          })
       }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Gagal !',
          })
       }
    }

    }

    useEffect(()=> {
        fetch("https://631843e9f6b281877c677851.mockapi.io/register", {
            method : "GET"
        })
        .then(response => response.json())
        .then(data => setData(data))
        console.log(email);
    }, [email])

   

    return (
     <>
        <div id='LoGin' className="containe-fluid">
            <div className="row px-5 d-flex">
            <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                <div className="col-md-6 d-none d-md-flex bg-image">
                </div>
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                                <div className="card-body">
                                    <h3 className="title text-center mt-4">Login!</h3>
                                    <p className="text-center text-muted mb-4">Welcome Back to our page!, please fill out the login form before starting</p>
                                    <form className='form-box px-3'>
                                    <div className="form-input">
                                        <div className="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(e)=> setEmail(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(e)=> setPassword(e.target.value)}/>
                                        </div>
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill  shadow-sm" onClick={()=> login()}>Login</button>
                                        </div>
                                        
                                        <div className="text-center mb-2"><p>Don't have an account?, let's Register first <Link to="/register" className="register-link font-italic text-muted"> 
                                                <u>Register</u></Link></p></div>
                                        <div className="text-center"><p>Back To Home <Link to="/" className="font-italic text-muted"> 
                                        <u>Home</u></Link></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}
export default Login;