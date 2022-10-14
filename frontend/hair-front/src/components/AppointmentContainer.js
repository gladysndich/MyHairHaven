import React, {useEffect, useState} from "react";
import Appointment from "./Appointment";


function AppointmentContainer() {
  const [appointments, setAppointmentList] = useState([]);
    useEffect(() => {
    fetch('/appointments')
    .then(res => res.json())
    .then(appointmentsData => {
      setAppointmentList(appointmentsData)
      });
  }, []);
  
function removeAppointment(removeappointment){
setAppointmentList(appointments.filter(appointment=>appointment.id !==removeappointment))
}

  const appointmentsCard = appointments.map( (appointment)=> (<Appointment key={appointment.id} pId={appointment.id}  pTime={appointment.time} pCustomer_id={appointment.customer_id}  pHairdresser_id={appointment.hairdresser_id} removeAppointment={removeAppointment}/>))

  
  return (
    <div className="container-fluid">
     {appointmentsCard}
    </div>
  );
}

export default AppointmentContainer;