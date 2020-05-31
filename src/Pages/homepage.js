import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

export default function Homepage(){
  
  const [value, setValue] = useState({
    skripsis: [],
    input: ''
  });

  const getData = async () => {
    const BASE_URL = "http://localhost:3030/skripsi-finder/query";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const queryData = {
    query:
      `PREFIX sf: <http://skripsifinder.com/skripsi#>

      SELECT ?judul ?nama ?npm ?peminatan ?tahun 
      WHERE
      {
        ?d    sf:judul    ?judul;
              sf:nama    ?nama;
              sf:npm    ?npm;
              sf:peminatan    ?peminatan;
              sf:tahun    ?tahun;
          FILTER regex(?judul, "${value.input}")
      }`
  };

  try {
    const { data } = await axios(BASE_URL, {
      method: 'POST',
      headers,
      data: qs.stringify(queryData)
    });
    console.log(data);

    // Convert Data
    const formatted_data = data.results.bindings.map((skripsi, index) => formatter(skripsi, index));
    console.log(formatted_data)

    setValue({
      ...value,
      skripsis: formatted_data
    });
  } catch (err) {
    console.error(err);
  }
}

const formatter = (skripsi, index) => {
  return {
    "id": index,
    "judul": skripsi.judul.value,
    "nama": skripsi.nama.value,
    "npm": skripsi.npm.value,
    "peminatan": skripsi.peminatan.value,
    "tahun": skripsi.tahun.value
  }
}

const handleChange = event => {
  setValue({
    ...value,
    'input': event.target.value
  })
}


const content = value.skripsis.map((skripsi) =>
  <div className="container">
    <div key={skripsi.id}>
      <div className="col-md-10">
        <a href="Skripsi">{skripsi.judul}</a>
        <div class="row">
          <div class="col-md-5">
            {skripsi.nama}
          </div>
          <div class="col-md-2">
            {skripsi.npm}  
          </div>
          <div class="col-md-2">
            {skripsi.peminatan}
          </div>
          <div class="col-md-2">
            {skripsi.tahun}
          </div>
        </div>  
      </div>
    </div>
  </div>
)


// Layout
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
              placeholder="Masukkan judul, penulis, atau npm penulis skripsi"
              type="text"
              onChange={handleChange}
            />
          </div>

          {/* Filter Tahun */}
          <div className="row">
            <select className="dropdown" id="tahun" onChange={handleChange}>
              <option value="N/A">Tahun</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
          </div>

          {/* Filter Peminatan */}
          <div className="row">
            <select className="dropdown" id="peminatan" onChange={handleChange}>
              <option value="N/A">Bidang Minat</option>
              <option value="SIM">Sistem Informasi Multimedia</option>
              <option value="Jarkom">Jaringan Komputer</option>
              <option value="AI">Artificial Intelligence</option>
            </select>
          </div>
          <div className="row">
            <input
                type="button"
                className="button"
                id="search"
                value="Search"
                onClick={getData}
            />
          </div>
        </form>
      </div>
        
      {/* Hasil Pencarian */}
      <div class="result">
        <h5>
            Hasil Pencarian Skripsi
        </h5>
        <div>
          {content}
        </div>
      </div>

      {/* Footer */}
        <footer>
          <div className="footer-copyright">&copy; 2020 Skripsi Finder</div>
        </footer>
    </body>
    );
}
