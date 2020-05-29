import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import axios from 'axios';
import qs from 'qs';
import { MDBCol, MDBFormInline, MDBIcon, MDBRow } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';

export default function skripsi(){
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
                    <a className="nav-link" href="homepage">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="login">Login</a>
                </li>
            </ul>
        </div>
      </nav>

      {/* container */}
      <div className="container">
            <MDBRow>
                <MDBCol md="4">
                   <img className="imgSkripsi" src='./formatskripsi.jpg'></img>
                </MDBCol>
                <MDBCol md="8">
                   <MDBRow>
                       <p>
                           Judul Skripsi
                       </p>
                   </MDBRow>
                   <MDBRow>
                   <MDBCol md="5">Penulis</MDBCol>
                   <MDBCol md="3">Bidang Minat</MDBCol>
                   <MDBCol md="3">Tahun</MDBCol>
                   </MDBRow>
                   <article>
                     Abstrak dari skripsi
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