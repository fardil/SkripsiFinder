import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import axios from 'axios';
import qs from 'qs';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';

export default function homepage(){
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
                <li className="nav-item active">
                    <a className="nav-link" href="homepage">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="login">Login</a>
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
              <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Masukkan skripsi yang ingin dicari" aria-label="Search" />
              <div className="input-group-append">
                <button as="input" type="button" value="Submit" active>Search</button>
              </div>
            </MDBFormInline>
          </MDBCol>

          {/* Filter Tahun */}
          <div className="dropdown" id="tahun">
              <select id = "dropdown">
                <option value="N/A">Tahun</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
            </select>
          </div>

          {/* Filter Peminatan */}
          <div className="dropdown" id="peminatan">
              <select id = "dropdown">
                <option value="N/A">Bidang Minat</option>
                <option value="SIM">Sistem Informasi Multimedia</option>
                <option value="Jarkom">Jaringan Komputer</option>
                <option value="AI">Artificial Intelligence</option>
            </select>
          </div>
        </div>
        
        {/* Hasil Pencarian */}
        <div class="result">
          <h5>
              Hasil Pencarian Skripsi
          </h5>
        </div>
        <div class="container1">    
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
        <div class="container1">    
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