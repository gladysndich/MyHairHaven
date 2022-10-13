import React, { useState,useEffect} from "react";
//import { Link } from "react-router-dom";
import EditAppointment from "./EditAppointment";

 const point = "http://localhost:3000/appointments"


function Appointment(){

    //const {date,time}= appointment;

   const [appointments,setAppointments] = useState([])

    useEffect(() => {
        fetch(point)
        .then(response => response.json())
           .then(data => setAppointments(data))
    },[]);
 console.log(appointments)
    return(
        <div>
            <h1>Appointments</h1>
            {appointments.map(appointment=>{
                return(
                    <div key={appointment.id}>
                        <EditAppointment/>
                        </div>  
                        
                        )
                    })}
            </div>
    )

}

export default Appointment;