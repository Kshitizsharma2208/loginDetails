
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './App';
import Home from './pages/Home/Home';
import About from './pages/About';
import ProfileDetail from "./pages/profileDetails/profileDetails";
// import LoginSection from './pages/profileDetails/components/Login Page/LoginSection';
import FruitsCorner from './pages/fruitsCorner/fruitsCorner';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Calc from './pages/Calc/Calc';
import StaticPage from './pages/21k/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<ProfileDetail />} />
        <Route path="fruitCorner" element={<FruitsCorner />} />
        <Route path="about" element={<About />} />
        <Route path="Calc" element={<Calc />} />
        <Route path="21k" element={<StaticPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();