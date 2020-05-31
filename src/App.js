import React, {useState} from 'react';
import axios from 'axios';
import qs from 'qs';
import './Assets/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Skripsi from "./Pages/Skripsi";

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Skripsi" component={Skripsi}></Route>
      </Router>
    </div>
  );
}

export default App;
