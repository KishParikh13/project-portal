import './App.css';
import logo from './images/Logo.svg'
import React from 'react';
import Landing from './views/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './views/Login';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}
