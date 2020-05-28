import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import './Assets/homepage.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

function App() {

  const [value, setValue] = useState({
    courses: [],
    input: ''
  });

  const getData = async () => {
    const BASE_URL = "http://localhost:3030/skripsi-finder/query";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    // Query Sparql
    const queryData = {
      query:
        `PREFIX cl: <http://carikursus.com/ns/courselist#>
  
        SELECT ?name ?category ?platform ?link ?desc ?feature
        WHERE
        {
          ?c    cl:name    ?name ;
                cl:category    ?category ;
                cl:platform    ?platform ;
                cl:link    ?link ;
                cl:desc    ?desc ;
          OPTIONAL {?c     cl:feature  ?feature . }
          FILTER regex(?name, "${value.input}") 
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
      const formatted_data = data.results.bindings.map((course, index) => formatter(course, index));
      console.log(formatted_data)

      setValue({
        ...value,
        courses: formatted_data
      });
    } catch (err) {
      console.error(err);
    }
  }

  const formatter = (course, index) => {
    return {
      "id": index,
      "name": course.name.value,
      "category": course.category.value,
      "platform": course.platform.value,
      "link": course.link.value,
      "desc": course.desc.value,
      "feature": course.feature ? course.feature.value.split(", ") : ''
    }
  }

  const handleChange = event => {
    setValue({
      ...value,
      'input': event.target.value
    })
  }

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
        <MDBCol md="6">
          <MDBFormInline className="md-form">
            <MDBIcon icon="search" />
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Button</button>
            </div>
          </MDBFormInline>
        </MDBCol>

        {/* Filter Tahun */}
          <div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tahun
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">2016</a>
                <a class="dropdown-item" href="#">2017</a>
                <a class="dropdown-item" href="#">2018</a>
                <a class="dropdown-item" href="#">2019</a>
                <a class="dropdown-item" href="#">2020</a>
                </div>
            </div>
          </div>
          {/* Filter Peminatan */}
          <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Bidang Minat
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Sistem Informasi</a>
                <a class="dropdown-item" href="#">Jaringan Komputer</a>
                <a class="dropdown-item" href="#">Artificial Intelligence</a>
              </div>
          </div>
      </div>




    </body>  
  );
}

export default App;
