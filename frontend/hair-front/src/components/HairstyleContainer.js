import React, { useState,useEffect } from "react";
import Hairstyle from "./Hairstyle";


function HairstylesContainer() {
  const [hairstyles, setHairstyleList] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3000/hairstyles')
    .then(res => res.json())
    .then(hairstylesData => {
      setHairstyleList(hairstylesData)
      });
  }, []);

  const hairstylesCard = hairstyles.map( (hairstyle)=> (<Hairstyle key={hairstyle.id} pImage={hairstyle.image}  pName={hairstyle.name}  pPrice={hairstyle.price} pDuration={hairstyle.duration}/>))

  
  return (
    <div className="container-fluid">
     {hairstylesCard}
    </div>
  );
}

export default HairstylesContainer;
  