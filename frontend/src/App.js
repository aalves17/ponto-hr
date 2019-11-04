import React from 'react';
import './App.css';
import logo from './assets/logo.png'

import Routes from './routes'

function App() {
  return (
    <div className="container">
      <div className="content">
        {/* <img src={logo}/> */}
        <Routes/>
      </div>
    </div>
  );
}

export default App;