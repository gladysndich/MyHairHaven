import React  from "react";
import Card from 'react-bootstrap/Card';



function Hairstyle({ pTitle, pImage, pPrice, pDuration}) {
    return (
        <div class= "scard" >
        <div class="col">
          <div class="col-sm-10">
            <div class="card" style={{ width: '28rem' }}>
              <div class="card-body">
                <h5 class="card-name">TITLE: {pTitle}</h5>
                <Card.Img variant="top" src= {pImage} style={{height: 200 + 'px', width:400 + 'px'}}/>
                <h5 class="card-city">PRICE: {pPrice}</h5>
                <h5 class="card-genres">DURATION(IN HOURS): {pDuration}</h5>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
               </div>
              </div>
            </div>
          </div> 
          </div>
          </div>
    );
}

export default Hairstyle;