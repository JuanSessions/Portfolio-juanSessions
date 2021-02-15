import './style/App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import Routes from './Routes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
