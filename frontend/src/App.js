import React, { useState } from 'react';
import './App.css';
import getCurrentDate from './utils/currentdate.js';

function App() {
  const [id, setId] = useState();
  const [datetime, setDatetime] = useState(getCurrentDate());

  function handleSubmit(){

  }

  function handleChange(){

  }

  return (
    <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type="text" name="id" value={id} onChange={handleChange}/>

            <label>CURRENT DATETIME</label>
            <span align="center">{datetime}</span>

            <button type="submit">REGISTER</button>
          </form>
        </div>
    </div>
  );
}

export default App;