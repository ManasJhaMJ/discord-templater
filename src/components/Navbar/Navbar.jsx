import { NavLink } from 'react-router-dom'

import './navbar.css'

function Navbar() {
    return (

        <nav>
            <div className='navbar'>
                <NavLink to={'/'} className={({ isActive }) => `links
                            ${isActive ? "active" : "non-active"}`}>
                    Home
                </NavLink>
                <NavLink to={'/'} className={({ isActive }) => `links
                            ${isActive ? "active" : "non-active"}`}>
                    Server Templates
                </NavLink>
                <NavLink to={'/'} className={({ isActive }) => `links
                            ${isActive ? "active" : "non-active"}`}>
                    Content Setup
                </NavLink>
                <NavLink to={'/'} className={({ isActive }) => `links
                            ${isActive ? "active" : "non-active"}`}>
                    Bot Setup
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar