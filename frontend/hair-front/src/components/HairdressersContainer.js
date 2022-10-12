import React from "react";
import HairdresserCard from "./HairdresserCard";


function HairdressersContainer({hairdressers}){
    const hairdresserCards = hairdressers.map((hairdresser) => (
        <HairdresserCard
        key={hairdresser.id}
        hairdresser={hairdresser}
        />
    ));

    return <div style={stylingContainer}>{hairdresserCards}</div>
}

var stylingContainer = {
    padding: "2px 16px",
    width: "stretch",
    height: "auto",
    background: ""
}

export default HairdressersContainer;