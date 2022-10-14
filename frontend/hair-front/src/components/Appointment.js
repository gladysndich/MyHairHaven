import React  from "react";
const appointmentAPI = "/appointments"

function Appointment({removeAppointment, pId, pTime, pCustomer_id, pHairdresser_id}) {

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${appointmentAPI}/${pId}`, {
      method: "DELETE",
    });
    removeAppointment(pId);
  }

  return (
    <div class= "scard" >
    <div class="col">
      <div class="col-sm-10">
        <div class="card" style={{ width: '28rem' }}>
          <div class="card-body">
            <h5 class="card-name">TIME: {pTime}</h5>
            <h5 class="card-city">CUSTOMER: {pCustomer_id}</h5>
            <h5 class="card-city">HAIRDRESSER: {pHairdresser_id}</h5>
            <button onClick = {onDeleteClick} class="btn btn-primary" type="button">DELETE</button>
           </div>
          </div>
        </div>
      </div>
      </div>
);

}

export default Appointment;