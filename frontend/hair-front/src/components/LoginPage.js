import React from 'react'
import { Link } from 'react-router-dom'

import "../App.css";

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Welcome!</h2>
            <form action="/home">
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>Dont have an account?<Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}