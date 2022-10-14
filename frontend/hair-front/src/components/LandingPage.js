import React from "react";


import "../App.css";
import hairhavenbackground from '../images/hairhavenbackground.jpg'

export default function LandingPage() {
  return (
    <header style={HeaderStyle}>
      <h1 className="main-title text-center">HairHaven App</h1>
      <p className="main-para text-center">
        Welcome to HairHaven, your Hair our Business
      </p>
     
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${hairhavenbackground})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
