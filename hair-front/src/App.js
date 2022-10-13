
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import HairstylesContainer from './components/HairstyleContainer'
import HairdressersContainer from "./components/HairdressersContainer";
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import './App.css'

export default function App() {
    return (
      <div>
        <Router>
                <Switch>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route exact path="/hairstyles" element={<HairstylesContainer/>}/>
                    <Route exact path="/hairdressers" element={<HairdressersContainer/>}/>
                </Switch>
            
        </Router>
      </div>
    )
}