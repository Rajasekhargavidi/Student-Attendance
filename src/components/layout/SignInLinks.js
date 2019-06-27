import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
    <ul className="right">
        <li>
            <NavLink to = "/">New Students</NavLink>
            </li>
            <li>
            <NavLink to = "/App">Logout</NavLink>
            </li>
            <li>
            <NavLink to = "/" className="btn btn-floating pink lighten-1">RS</NavLink>
            </li>
    </ul>
    )
}

export default SignInLinks
