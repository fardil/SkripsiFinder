import React, { useState } from 'react';
// import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

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
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Login">Login</a>
                </li>
            </ul>
        </div>
      </nav>

      <div className="header">
        <h1>
            Welcome to Skripsi Finder!
        </h1>
        <p id="desc">Skripsi Finder adalah Website<b> Pencarian Skripsi </b>Mahasiswa Teknik Informatika Unpad</p>

        {/* Search Form  */}
        <form>
          <div className="row">
            <input
              className="form-input"
              placeholder="Masukkan skripsi yang ingin dicari"
              type="text"
            />
          </div>
          {/* Filter Tahun */}
          <div className="row">
            <select className="dropdown" id="tahun">
              <option value="N/A">Tahun</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
          </div>
          {/* Filter Peminatan */}
          <div className="row">
            <select className="dropdown" id="peminatan">
              <option value="N/A">Bidang Minat</option>
              <option value="SIM">Sistem Informasi Multimedia</option>
              <option value="Jarkom">Jaringan Komputer</option>
              <option value="AI">Artificial Intelligence</option>
            </select>
          </div>
          <div className="row">
            <input
                type="submit"
                className="button"
                id="search"
                value="Search"
            />
          </div>
        </form>
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
            <a href="Skripsi">
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
            <a href="Skripsi">
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

      {/* Footer */}
        <footer>
          <div className="footer-copyright">&copy; 2020 Skripsi Finder</div>
        </footer>
    </body>
    );
}