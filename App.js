import './App.css';
import Navbar from './components/Navbar';
import Inputbox from './components/Inputbox';
import AboutMe from './components/AboutMe';
import Owner from './components/Owner';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [DisplayMode, setDisplayMode] = useState('light');
  const [customBG, setCustomBG] = useState("#ffffff");

  function changeMode() {
    if (DisplayMode === 'light') {
      setDisplayMode('dark');
      document.body.style.backgroundColor = "#10011A";
      document.body.style.color = "#007491";
    }
    else {
      setDisplayMode('light');
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#212529";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="MyProject" home="Home" about="AboutMe" DisplayMode={DisplayMode} changeMode={changeMode} customBG={customBG} setCustomBG={setCustomBG} />
        <Switch>
          <Route exact path="/">
            <Inputbox DisplayMode={DisplayMode} />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
        </Switch>
        <Owner owner="Sushil Dikondwar" />
      </Router>
    </>
  );
}

export default App;
