import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to = "/" className="brand-logo">Student Attendance</Link>
                <SignInLinks />
                <SignOutLinks />
                </div>
        </nav>
    )
}

export default NavBar
