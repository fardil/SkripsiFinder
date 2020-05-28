import React, {useState} from 'react';
import axios from 'axios';
import qs from 'qs';
import './Assets/style.css';

import 'bootstrap/dist/css/bootstrap.css';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

import { BrowserRouter as Router, Route } from "react-router-dom";

import homepage from "./Pages/homepage";
import login from "./Pages/login";
import skripsi from "./Pages/skripsi";

function App() {

  const [value, setValue] = useState({
    skripsi: [],
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
        `PREFIX sf: <http://skripsifinder.com/skripsi#>
  
        SELECT ?judul ?nama ?npm ?peminatan ?tahun 
        WHERE
        {
          ?d    sf:judul    ?judul ;
                sf:nama    ?nama ;
                sf:npm    ?npm ;
                sf:peminatan    ?peminatan ;
                sf:tahun    ?tahun ;
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
        skripsi: formatted_data
      });
    } catch (err) {
      console.error(err);
    }
  }

  const formatter = (skripsi, index) => {
    return {
      "id": index,
      "judul": skripsi.name.value,
      "nama": skripsi.category.value,
      "npm": skripsi.platform.value,
      "peminatan": skripsi.link.value,
      "tahun": skripsi.desc.value
    }
  }

  const handleChange = event => {
    setValue({
      ...value,
      'input': event.target.value
    })
  }

  return (
    <div className="App">
      <Router>
        <Route exact path="/homepage" component={homepage}></Route>
        <Route exact path="/login" component={login}></Route>
        <Route exact path="/skripsi" component={skripsi}></Route>
      </Router>
    </div>
  );
}

export default App;
