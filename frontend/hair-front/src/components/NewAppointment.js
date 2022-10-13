import React, { useState } from 'react';
//import ReactDOM from 'react-dom';

const point = "http://localhost:3000/appointments/" 

function AppointmentForm({addAppointment}){
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    fetch(point, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            date: date,
            time: time,
    }),
    })

   .then((r)=>r.json())
   .then ((newAppointment)=>addAppointment(newAppointment));
   setDate("")
   setTime("")
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>New Appointment</h2>
                 <br></br>
                <div>
                    <label>Date
                    <input type="text" value={date}
                    onChange={(e)=> setDate(e.target.value)}
                    />
                    </label>
                </div>
                <br></br>
                <div>
                    <label>Time in 24hr
                        <input type="text" value={time}
                        onChange={(e)=> setTime(e.target.value)} 
                        />
                        </label>
                </div>
                <br></br>
                <button type="submit">submit appointment</button>
            </form>

        </div>
    )
}
export default AppointmentForm;