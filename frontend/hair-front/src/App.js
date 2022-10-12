import React, { useEffect, useState } from "react";
import HairdressersContainer from "./components/HairdressersContainer";


function App() {

  const[hairdressers, setHairdressers] = useState([]);

  useEffect(() => {
    fetch("/hairdressers")
    .then((r) => r.json())
    .then(setHairdressers);
  }, []); 
  return (
    <HairdressersContainer hairdressers={hairdressers} />
  );
}

export default App;
