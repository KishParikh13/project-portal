import logo from './images/Logo.svg'
import React from 'react';
import Landing from './views/landing/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './views/landing/Login';
import Projects from './views/app/Projects';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}
