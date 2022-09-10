import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div classNameName="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image"></div>

            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="text-center display-4">Register!</h3>
                      <form>
                        <div className="mb-3">
                          <input id="inputFirstName" type="firstname" placeholder="First name" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                        </div>
                        <div className="mb-3">
                          <input id="inputLastName" type="lastname" placeholder="Last name" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                        </div>
                        <div className="mb-3">
                          <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                        </div>
                        <div className="mb-3">
                          <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                        </div>
                        <div className="mb-3">
                          <input id="inputConfirmPassword" type="confirmpassword" placeholder="Confirm password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                        </div>
                        <div className="d-grid gap-2 mt-2">
                          <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                            Sign up
                          </button>
                        </div>

                        <div className="text-center d-flex justify-content-between mt-4"></div>
                        <div className="text-center">
                          <p>
                            Back To Home{" "}
                            <Link to=" " className="font-italic text-muted">
                              <u>Home</u>
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
