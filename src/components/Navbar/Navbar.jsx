import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const buttonClick = () => {
        setIsOpen(false);
    }

    return (
        <nav>
            <div className='navbar'>
                <button className='menu-toggle' onClick={toggleMenu}>
                    ☰ Menu
                </button>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <NavLink onClick={buttonClick} to={'/'} className={({ isActive }) => `links ${isActive ? "active" : "non-active"}`}>
                        Home
                    </NavLink>
                    <NavLink onClick={buttonClick} to={'/server-templates'} className={({ isActive }) => `links ${isActive ? "active" : "non-active"}`}>
                        Server Templates
                    </NavLink>
                    <NavLink onClick={buttonClick} to={'/emojis-sticker'} className={({ isActive }) => `links ${isActive ? "active" : "non-active"}`}>
                        Emojis & Stickers
                    </NavLink>
                    <NavLink onClick={buttonClick} to={'/bot-setup'} className={({ isActive }) => `links ${isActive ? "active" : "non-active"}`}>
                        Bot Setup
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
