import './login.css';
import React from 'react';
import { link } from 'react-router-dom'


function Login() { 
   
    return (
     
    //    <div classNameName="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex bg-image">
                    {/* <h1>Ngiung TRVL</h1> */}
                </div>
                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="text-center display-4">Login page!</h3>
                                    <p className="text-center text-muted mb-4">Welcome Back to our page!, please fill the login forms first before stated</p>
                                    <form>
                                        <div className="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                        </div>
                                        
                                        <div className="text-center d-flex justify-content-between mt-4"><p>Don't have an account, let's register first <a href="/register" className="font-italic text-muted"> 
                                                <u>Register</u></a></p></div>
                                        <div className="text-center"><p>Back To Home <a href="/" className="font-italic text-muted"> 
                                        <u>Home</u></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    //   </div>
      
)
}


export default Login;
