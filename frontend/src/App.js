import React, { useState, useEffect } from 'react';
import './App.css';
import getCurrentDate from './utils/currentdate.js';

function App() {
  const [id] = useState();
  let [datetime, setDatetime] = useState(getCurrentDate());

  setInterval(function(){
    setDatetime(getCurrentDate());
  },60000);

  function handleSubmit(){

  }

  function handleChange(){

  }

  return (
    <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type="text" name="id" value={id} placeholder="Your company ID" onChange={handleChange}/>

            <label>CURRENT DATETIME</label>
            <span align="center">{datetime}</span>

            <button type="submit">REGISTER</button>
          </form>
        </div>
    </div>
  );
}

export default App;