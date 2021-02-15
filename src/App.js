import './style/App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
