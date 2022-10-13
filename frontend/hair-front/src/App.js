import React from "react";
import HairstylesContainer from './components/HairstyleContainer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
            <div>
                <Routes>
                <Route exact path="/hair" element={<HairstylesContainer/>}></Route>
                </Routes>
            </div>
          </Router>
           </div>

  )
}

export default App;
