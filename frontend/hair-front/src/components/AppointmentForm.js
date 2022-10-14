import React, {useState} from "react";


function AppointmentForm() {
  const [time, setTime] = useState("");
  const [hairdresser_id, setHairdreser_id] = useState("");
  const [customer_id, setCustomer_id] = useState("");
  function handleSubmit(event) {
    const formData = {
      time: time,
      hairdresser_id: hairdresser_id,
      customer_id: customer_id
    };
    console.log(formData);
    event.preventDefault();
    fetch('/appointments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });}
    return (
        <div class= "form" >
         <form onSubmit={handleSubmit}  class="newform" className="newform"> 
          <input value={time}
       onChange={(e) => setTime(e.target.value)} placeholder="TIME" />
          <input value={hairdresser_id}
       onChange={(e) => setHairdreser_id(e.target.value)} placeholder="HAIRDRESSER" />
        <input value={customer_id}
       onChange={(e) => setCustomer_id(e.target.value)} placeholder="CUSTOMER" />
          <input type="submit" value="POST APPOINTMENT" />
</form>
</div>
);
}

export default AppointmentForm;
