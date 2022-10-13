import {Button ,EditableText,Toaster,Position, } from "@blueprintjs/core"
import axios from "axios"
import { useEffect,useState } from "react"

const AppToaster = Toaster.create({
    position: Position.TOP,
})

function Appoint(){
    const [appointments,setAppointments]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/appointments/").then(response=>{
            const {data} = response
            setAppointments(data.result)
        })
    },[])

    const onChangeHandler = (id, key, value) => {
        console.log({id, key, value})
        setAppointments(values=>{
            return values.map(item=>
                item.id === id? {...item, [key]: value } : item
                )
        })
    }

    const updateAppointments = id => {
        const data = appointments.find(item=>item.id===id);
        axios.put(`http://localhost:3000/appointments/${id}`, data).then (response =>{
            AppToaster.show({
                message: "updated successfully",
                intent : "success",
                timeout: 3000,
            })
        })
    }

    const deleteAppointments = id => {
        axios.delete(`http://localhost:3000/appointments/${id}`).then(response =>{
            setAppointments(values=>{
                return values.filter(item=>item.id!==id)
            })
            AppToaster.show({
                message: "deleted successfully",
                intent : "success",
                timeout: 3000,
            })
        })
    }
    
    return (
        <div className="App">
            <table className="bp4-html-table .modifier">
                <thead>
                    <tr>
                        
                        <th>appointment_ID</th>
                        <th>Time</th>
                        <th>Action</th>
                        </tr>
               </thead>
            <tbody>
                {appointments.map(appointment =>{
                    const{ id, time } = appointment
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>
                             <EditableText value={time}
                             onChange={value=>onChangeHandler(id, "time", value)}/>
                             </td>
                             <td>
                                <Button intent="primary" onClick={()=>updateAppointments(id)}>Update</Button>
                                &nbsp; 
                                <Button intent="danger" onClick={()=>deleteAppointments(id)}>Delete</Button>
                             </td>
                        </tr>
                        )

                })}
            </tbody>
            </table>
        </div>
    )
}
  export default Appoint;