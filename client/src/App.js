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
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router> */}
    </div>
  );
}
