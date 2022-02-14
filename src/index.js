import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Centralized from './pages/Centralized';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/centralized" element={<Centralized />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
