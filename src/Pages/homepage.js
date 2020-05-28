import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import axios from 'axios';
import qs from 'qs';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import DropdownButton from 'react-dropdown-button'

export default function homepage(){
return (
    <body>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Skripsi Finder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
      </nav>

      <div className="header">
        <h1>
            Welcome to Skripsi Finder!
        </h1>
        <p>Skripsi Finder adalah Website<b> Pencarian Skripsi </b>Mahasiswa Teknik Informatika Unpad</p>

          {/* Search Form  */}
          <MDBCol md="6" >
            <MDBFormInline className="md-form">
              <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
              </div>
            </MDBFormInline>
          </MDBCol>

          {/* Filter Tahun */}
          <div className="dropdown" id="tahun">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tahun
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">2016</a>
                <a className="dropdown-item" href="#">2017</a>
                <a className="dropdown-item" href="#">2018</a>
                <a className="dropdown-item" href="#">2019</a>
              </div>
          </div>

          {/* Filter Peminatan */}
          <div className="dropdown" id="peminatan">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Bidang Minat
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Sistem Informasi</a>
                <a className="dropdown-item" href="#">Jaringan Komputer</a>
                <a className="dropdown-item" href="#">Artificial Intelligence</a>
              </div>
          </div>
        </div>
        
        {/* Hasil Pencarian */}
        <div class="result">
          <h5>
              Hasil Pencarian Skripsi
          </h5>
        </div>
        <div class="container">    
          <div class="col-md-10">
            <div class="row">
              <a href="Skripsi.html">
                  Judul Skripsi
              </a>
            </div>
            <div class="row">
              <div class="col-md-5">Penulis</div>
              <div class="col-md-3">Bidang Minat</div>
              <div class="col-md-3">Tahun</div>
            </div>
          </div>
        </div>
        <div class="container">    
          <div class="col-md-10">
            <div class="row">
              <a href="Skripsi.html">
                  Judul Skripsi
              </a>
            </div>
            <div class="row">
              <div class="col-md-5">Penulis</div>
              <div class="col-md-3">Bidang Minat</div>
              <div class="col-md-3">Tahun</div>
            </div>
          </div>
        </div>
    </body>
    
    )
}