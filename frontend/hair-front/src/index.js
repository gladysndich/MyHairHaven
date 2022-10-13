import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import './App.css';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/registerpage" element={<RegisterPage />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
