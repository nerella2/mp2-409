import logo from './logo.svg';
import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router basename="/mp2-409">
      <div className="router">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/him">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<Home />}>
          </Route>
            <Route path="/him" element={<Home />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here is a homepage of the thing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
