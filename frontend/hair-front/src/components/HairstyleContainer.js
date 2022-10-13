
import React, {useEffect, useState} from "react";
import Hairstyle from "./Hairstyle";


function HairstylesContainer() {
  const [hairstyles, setHairstyleList] = useState([]);
    useEffect(() => {
    fetch('/hairstyles')
    .then(res => res.json())
    .then(hairstylesData => {
      setHairstyleList(hairstylesData)
      });
  }, []);

  const hairstylesCard = hairstyles.map( (hairstyle)=> (<Hairstyle key={hairstyle.id}   pTitle={hairstyle.title} pImage={hairstyle.image}  pPrice={hairstyle.price} pDuration={hairstyle.duration}/>))

  
  return (
    <div className="container-fluid">
     {hairstylesCard}
    </div>
  );
}

export default HairstylesContainer;
  