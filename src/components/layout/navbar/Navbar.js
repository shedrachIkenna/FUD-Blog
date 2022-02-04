import { NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import { RiNotificationBadgeLine, RiDraftLine, RiArrowRightLine } from 'react-icons/ri'
import './navbar.css'


const Menu = () => (
    <>
        <NavLink className="a" to="/home">Home</NavLink>
        <NavLink className="a" to="/profile">Profile</NavLink>
        <NavLink className="btn" to="/signin">Log in</NavLink>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="nav-links">
                    <div className="logo">
                        <h1>Fud-Blog</h1>
                    </div>
                    <div className="links">
                        <Menu />
                    </div>
                </div>

        <NavLink className="round-btn" to="/" onClick={() => setToggleMenu(true)}>S</NavLink>

        {
            toggleMenu && (
                <div className="nav-menu slide-in-right">
                    <div className="menu-header menu-links">
                        <NavLink className="fud" to="/">FUD</NavLink>
                        <NavLink className="x" to="/" onClick={() => setToggleMenu(false)}><RiArrowRightLine/></NavLink>
                    </div>
                    <NavLink to="/">
                        <div className="menu-user menu-links">
                            <NavLink className="user-logo" to="/">S</NavLink>
                            <div className="menu-user-name">
                                <p>Shedrach Ikenna</p>
                                <p>Shedrach686@gmail.com</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="menu-user menu-links">
                            <NavLink className="user-logo" to="/"><RiNotificationBadgeLine/></NavLink>
                            <div className="menu-user-name">
                                <p>Notice Board</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="menu-user menu-links">
                            <NavLink className="user-logo" to="/"><RiDraftLine/></NavLink>
                            <div className="menu-user-name">
                                <p>Write Article</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="menu-user menu-links">
                            <NavLink className="user-logo" to="/"><RiDraftLine/></NavLink>
                            <div className="menu-user-name">
                                <p>Settings</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="menu-user menu-links">
                            <p>Settings</p>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="menu-user menu-links">
                            <p>Report</p>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="menu-user menu-links">
                            <p>Sign out</p>
                        </div>
                    </NavLink>
                </div>
            )
        }
            </div>
        </div>
    )
}

export default Navbar 

