import React, { useState } from 'react';
import './App.css';
import getCurrentDate from './utils/currentdate.js';
import { usePosition } from 'use-position';

function App() {
  const { latitude, longitude } = usePosition();
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
            <code>
              latitude: {latitude}<br/>
              longitude: {longitude}<br/>
            </code>
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