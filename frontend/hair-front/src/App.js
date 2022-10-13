
import HairdressersContainer from "./components/HairdressersContainer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import HairstylesContainer from './components/HairstyleContainer'
import './App.css';


import HairdressersContainer from "./components/HairdressersContainer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import './App.css'

export default function App() {
    return (
      <div>
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/hair" element={<HairstylesContainer/>}></Route>
                </Routes>
            </div>

        </Router>
      <HairdressersContainer hairdressers={hairdressers} />
      </div>
    )


}