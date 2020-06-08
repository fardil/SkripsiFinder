import React, {} from 'react';
import './Assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Pages/homepage";
import Login from "./Pages/login";
import Skripsi from "./Pages/skripsi";

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
