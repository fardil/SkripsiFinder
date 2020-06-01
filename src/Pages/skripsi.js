import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import axios from 'axios';
import qs from 'qs';
import { MDBCol, MDBFormInline, MDBIcon, MDBRow } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';

export default function Skripsi(){
return (
    <body>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="homepage">Skripsi Finder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="login">Login</a>
                </li>
            </ul>
        </div>
      </nav>

      {/* container */}
      <div className="container" id="login">
            <MDBRow>
                <MDBCol md="4">
                   <img className="imgSkripsi" src='./formatskripsi.jpg'></img>
                </MDBCol>
                <MDBCol md="8" id="title">
                   <MDBRow>
                       <p id="judul">
                           Judul Skripsi
                       </p>
                   </MDBRow>
                   <MDBRow>
                   <MDBCol md="5">Penulis</MDBCol>
                   <MDBCol md="3">Bidang Minat</MDBCol>
                   <MDBCol md="3">Tahun</MDBCol>
                   </MDBRow>
                   <article id="abstrak">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </article>
                </MDBCol>
            </MDBRow>
            <div className="btn-holder">
                <button type="button">Download</button>
            </div>
        </div>
    </body>
    )
}