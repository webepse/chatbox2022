import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/pseudo/:login" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
