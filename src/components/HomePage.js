import React from 'react'
import { Link } from 'react-router-dom'
import HairdressersContainer from './HairdressersContainer'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome to HairHaven</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <HairdressersContainer />
        </div>
    )
}