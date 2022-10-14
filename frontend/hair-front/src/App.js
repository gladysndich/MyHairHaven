import AppointmentForm from './components/AppointmentForm'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import Navbar from "./components/Navbar";
import AppointmentContainer from './components/AppointmentContainer';


export default function App() {
    return (
      <div>
        <Router>
        <div>
        <Navbar/>
       </div>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route exact path="/hairstyles" element={<HairstylesContainer/>}></Route>
                    <Route exact path="/hairdressers" element={<HairdressersContainer/>}></Route>
                    <Route exact path="/appointmentform" element={<AppointmentForm/>}></Route>
                    <Route exact path="/appointments" element={<AppointmentContainer/>}></Route>
                </Routes>
            </div>
        </Router>
      </div>
    )
}
