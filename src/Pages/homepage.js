import React from 'react';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

return (
    <body>
        {/* navbar */}
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
                Welcome to Skripsi Finder
            </h1>
            <p>Skripsi Finder adalah Website <b>Pencarian Skripsi</b> Mahasiswa Teknik Informatika Unpad</p>

            {/* Search Form */}
            {/* <div style="margin-left: 200px; margin-right: 200px; margin-top: 50px;">
                <div className="input-group"; style="width:90%;">
                <input type="text" className="form-control" placeholder="Masukkan Skripsi yang Ingin Dicari" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div className="input-group-append">
                    <button className="btn btn-outline-secondary" style="width: 130px;" type="button">Search</button>
                    </div>
                </div>
            </div> */}

        {/* Filter Tahun */}
            <div style="margin-top: 10px; margin-left: 590px;">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" style="width: 130px;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tahun
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">2016</a>
                    <a className="dropdown-item" href="#">2017</a>
                    <a className="dropdown-item" href="#">2018</a>
                    <a className="dropdown-item" href="#">2019</a>
                    <a className="dropdown-item" href="#">2020</a>
                    </div>
                </div>
            </div>

        {/* Filter Peminatan */}
            <div style="margin-top: 10px; margin-left: 590px;">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style="width: 130px;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bidang Minat
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Sistem Informasi</a>
                    <a class="dropdown-item" href="#">Jaringan Komputer</a>
                    <a class="dropdown-item" href="#">Artificial Intelligence</a>
                    </div>
                </div>
            </div>
        </div>

        {/* Hasil Pencarian */}
        <div className="result">
            <h5>
                Hasil Pencarian Skripsi
            </h5>
        </div>
        <div className="container">    
            <div className="col-md-10">
                <div className="row">
                    <a href="Skripsi.html" id="skripsi">
                        Judul Skripsi
                    </a>
                </div>
                <div className="row">
                    <div className="col-md-5">Penulis</div>
                    <div className="col-md-3">Bidang Minat</div>
                    <div className="col-md-3">Tahun</div>
                </div>
            </div>
        </div>
        <div className="container">    
            <div className="col-md-10">
                <div className="row">
                    <a href="Skripsi.html" id="skripsi">
                        Judul Skripsi
                    </a>
                </div>
                <div className="row">
                    <div className="col-md-5">Penulis</div>
                    <div className="col-md-3">Bidang Minat</div>
                    <div className="col-md-3">Tahun</div>
                </div>
            </div>
        </div>
    </body>
)