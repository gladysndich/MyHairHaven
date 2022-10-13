import React  from "react";
import Card from 'react-bootstrap/Card';



function Hairstyle({ pTitle, pImage, pPrice, pDuration}) {

  var stylingCard = {
    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  padding: "2px 16px",
  width: "300px",
  "font-family": "Itim",
  "background-color": "#000",
  margin: "1rem",
  display: "inline-block",
  "vertical-align": "middle"
}

var bookHairstyleButton = {
  border: "none",
outline: "0",
display: "inline-block",
padding: "8px",
"color": "#000",
"background-color": "#FFFFFF",
"text-align": "center",
cursor: "pointer",
width: "100%",
"font-size": "18px",
"font-family": "Itim"
}

var stylingFont1 = {
  "font-family": "Itim",
  "font-size": "30px",
  color: "#FFFFFF"
}

var stylingFont = {
  "font-family" : "Itim",
  color: "#FFFFFF"
}

    return (
      <div style={stylingCard}>
            <h5 style={stylingFont1}>TITLE: {pTitle}</h5>
            <Card.Img variant="top" src= {pImage} style={{height: 200 + 'px', width:200 + 'px'}}/>
            <h5 style={stylingFont}>PRICE: {pPrice}</h5>
            <h5 style={stylingFont}>DURATION(IN HOURS): {pDuration}</h5>
            <p><button style={bookHairstyleButton}>Book Hairstyle</button></p>
        </div>

    );

    
}

export default Hairstyle;