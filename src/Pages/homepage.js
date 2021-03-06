import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Navbar, Nav,} from 'react-bootstrap';

export default function Homepage(){
  
  const [value, setValue] = useState({
    skripsis: [],
    judul: '',
    nama:'',
    npm :'',
    peminatan :'',
    tahun :''
  });

  const getData = async () => {
    const BASE_URL = "https://qrary-fuseki-service.herokuapp.com/skripsi-finder/query";

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
              sf:hasPeminatan ?namaPeminatan ;
              sf:isTahun ?TahunSkripsi .

              ?namaPeminatan sf:peminatan ?peminatan .
              ?TahunSkripsi sf:tahun ?tahun .
              
              FILTER contains(lcase(str(?judul)), lcase(str("${value.judul ? value.judul : ''}")))
              FILTER contains(lcase(str(?nama)), lcase(str("${value.nama ? value.nama : ''}")))
              FILTER contains(lcase(str(?npm)), lcase(str("${value.npm ? value.npm : ''}")))
              FILTER contains(lcase(str(?peminatan)), lcase(str("${value.peminatan ? value.peminatan : ''}")))
              FILTER contains(lcase(str(?tahun)), lcase(str("${value.tahun ? value.tahun : ''}")))
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

const handleChangeTitle = event => {
  setValue({
    ...value,
    'judul': event.target.value,  
  });
}

const handleChangeNpm = event => {
  setValue({
    ...value,
    'npm': event.target.value,  
  });
}

const handleChangeName = event => {
  setValue({
    ...value,
    'nama': event.target.value,  
  });
}

const handleChangeYear = event => {
  setValue({
    ...value,
    'tahun': event.target.value,
  });
}

const handleChangeMajor = event => {
  setValue({
    ...value,
    'peminatan': event.target.value,
  });
}

const content = value.skripsis.map((skripsi) =>
  <div className="container">
    <div key={skripsi.id}>
      <div className="col-md-10">
        <div className="judul"><a href="Skripsi">{skripsi.judul}</a></div>
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
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Skripsi Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

      <div className="header">
        <h1>
            Welcome to Skripsi Finder!
        </h1>
        <p id="desc">Skripsi Finder adalah Website<b> Pencarian Skripsi </b>Mahasiswa Teknik Informatika Unpad</p>

        {/* Search Form  */}
        <form>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  setvalue={value.judul}
                  placeholder="Judul Skripsi"
                  type="text"
                  id="titleBar"
                  onChange={handleChangeTitle}
                />
              </div>
            </div>
            <div className="grid-container">
              <div className="row">
                <div className="col">
                  <input
                    setvalue={value.nama}
                    placeholder="Penulis"
                    type="text"
                    id="nameBar"
                    onChange={handleChangeName}
                  />
                </div>
                <div className="col" id="studID">
                  <input
                    setvalue={value.npm}
                    placeholder="NPM Penulis"
                    type="text"
                    id="npmBar"
                    onChange={handleChangeNpm}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tahun */}
          <div className="row">
            <select setvalue={value.tahun} className="dropdown" id="tahun" onChange={handleChangeYear}>
              <option value="">Tahun</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
            </select>
          </div>

          {/* Filter Peminatan */}
          <div className="row">
            <select setvalue={value.peminatan} className="dropdown" id="peminatan" onChange={handleChangeMajor}>
              <option value="">Bidang Minat</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Jaringan Komputer">Jaringan Komputer</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
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
      <div>
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
      </div>
    );
}
