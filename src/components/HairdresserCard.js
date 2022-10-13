import React from "react";


function HairdresserCard( { hairdresser }) {
    const { name, image} = hairdresser;

    return(
        <div style={stylingCard}>
            <img src={image} alt={name} width="100%" height="250px"></img>
            <h3>{name}</h3>
            <p><button style={seeHairstylesButton}>See Hairstyles</button></p>
        </div>
        
    )
}

var stylingCard = {
    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  padding: "2px 16px",
  width: "200px",
  "font-family": "Itim",
  "background-color": "#D9D9D9",
  margin: "1rem"
}

var seeHairstylesButton = {
    border: "none",
  outline: "0",
  display: "inline-block",
  padding: "8px",
  "color": "#FFFFFF",
  "background-color": "#000",
  "text-align": "center",
  cursor: "pointer",
  width: "100%",
  "font-size": "18px",
  "font-family": "Itim"
}

export default HairdresserCard;