import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

const point = "http://localhost:3000/appointments"

function EditAppointment(){
    const [appointmentData, setAppointmentData]= useState([])
    let { id }= useParams()
    let point_url = `http://localhost:3000/appointments/${id}`;

    useEffect (()=>{
        fetch(point_url)
           .then(response => response.json())
           .then(data=>setAppointmentData(data))
    },[])

    console.log(appointmentData)

    function handleSubmit(event){
        event.preventDefault()

        fetch(`${point}/{id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json',
              "Access-Control-Allow-Origin" : "*",  
              "Access-Control-Allow-Credentials" : true 
            },
            body: JSON.stringify({
                date: appointmentData.date,
                time: appointmentData.time
            })
        })
        .then(response => response.json())
        .then(data => {console.log(data)})

        const onFormchange = (event) =>{
            setAppointmentData({...appointmentData, [event.target.name]: event.target.value});
        };
        return(
            <div>
            <form onSubmit={handleSubmit}>
                <label>Date
                    <input name="date" value={appointmentData.date} onChange={onFormchange}/>
                </label>
                <label>Time
                    <input name="time" value={appointmentData.time} onChange={onFormchange}/>
                </label>
                <button type="submit" onClick={handleSubmit}>Update</button>
                </form>
                <div>

                </div>
                <h2>Appointments</h2>
                </div>
        )
    }
}
export default EditAppointment;