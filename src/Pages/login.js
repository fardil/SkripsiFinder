import React, {} from 'react';
import { MDBCol, MDBFormInline,  MDBRow } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import DropdownButton from 'react-dropdown-button'

export default function Login(){
return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Skripsi Finder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="login">Login</a>
                </li>
            </ul>
        </div>
      </nav>

    {/* container */}
        <div className="container" id="login">
            <MDBRow>
                <MDBCol md="4">
                    <h1 className="welcome"> 
                        WELCOME
                    </h1>
                </MDBCol>
                <MDBCol md="4">
                    <img src='/skripsi1.png' alt="imglogoskripsi"></img>
                </MDBCol>
                <MDBCol md="4">
                    <MDBFormInline className="form-group">
                      <label for="exampleInputUsername1" className="form-word">Username</label>
                      <input type="username" className="form-control" id="exampleInputUsername1"></input>
                    </MDBFormInline>
                    <MDBFormInline className="form-group">
                      <label for="exampleInputPassword1" className="form-word">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </MDBFormInline>
                    <button type="login" className="btn-login">Login</button>
                </MDBCol>
            </MDBRow>
        </div>
    </div>
    )
}