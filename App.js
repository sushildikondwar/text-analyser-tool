import './App.css';
import Inputbox from './components/Inputbox';
import Navbar from './components/Navbar';
import Owner from './components/Owner';
import React, { useState } from 'react'

function App() {

  const [DisplayMode, setDisplayMode] = useState('light');
  const [customBG, setCustomBG] = useState("#ffffff");

  function changeMode() {
    if(DisplayMode==='light') {
      setDisplayMode('dark');
      document.body.style.backgroundColor="#10011A";
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
      <Navbar title="MyProject" home="Home" about="AboutMe" DisplayMode={DisplayMode} changeMode={changeMode} customBG={customBG} setCustomBG={setCustomBG} />
      <Owner owner="Sushil Dikondwar" />
      <Inputbox DisplayMode={DisplayMode} />
    </>
  );
}

export default App;
