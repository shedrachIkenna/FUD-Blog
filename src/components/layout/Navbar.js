import { useState } from 'react'
import { RiNotification3Line, RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => (
    <>
    <a href="#">Home</a>
    <a href="#">Profile</a>
    <a href="#">Log out</a>
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
                
                <div className="nav-menu">
                    <div className="notif-container">
                        <RiNotification3Line color="#333" size={27} />
                    </div>
                    <div className="hambuger-container">
                        {toggleMenu 
                            ? <RiCloseLine color="#333" size={27} onClick={() => setToggleMenu(false)}/>
                            : <RiMenu3Line color="#333" size={27} onClick={() => setToggleMenu(true)}/>
                        }
                        {
                            toggleMenu && (
                                <div className="menu-container scale-in-tr">
                                    <div className="menu-links">
                                        <Menu />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar 
