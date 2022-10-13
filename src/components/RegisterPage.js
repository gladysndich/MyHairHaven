import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'


export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Hair Haven Create Account</h2>
            <form action="/home">
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label>Phone Number</label><br/>
                    <input type="phone" name="phone" required />
                </p>
                <p>
                    <label>Location</label><br/>
                    <input type="location" name="location" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
        
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Return to Homepage</Link>.</p>
            </footer>
        </div>
    )

}