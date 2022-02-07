import { NavLink } from 'react-router-dom'
import { RiNotificationBadgeLine, RiDraftLine, RiArrowRightLine, RiLinksLine } from 'react-icons/ri'

const Navbar = () => {
    const handleToggle = () => {
        const menu = document.getElementById("menu")
        menu.classList.toggle("hidden")
        console.log(menu)
    }

    return (
        <div className="navbar">
            <div className="border-2 flex md:flex-col h-full justify-between p-3">
                <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick = {handleToggle} className="h-6 w-6 pr-1 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg> 
                    <h1 className="font-bold text-2xl">FUD-Blog</h1>
                    <div className="fixed w-full top-0 left-0 mt-16">
                        <div id="menu" className="hidden md:block p-5 bg-white shadow-xl rounded-lg w-2/3">
                            <div className="px-1 mb-3 border-b pb-3">
                                <NavLink to="/" className="flex flex-row items-center justify-center bg-primary px-3 py-2 rounded-lg shadow-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                    <span className="text-white pl-2 text-lg">Write</span>
                                </NavLink>
                            </div>
                            <div className="border-b py-2"> 
                                <div className="">
                                    <NavLink to="/" className="navlink">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24"><path d="M4.5 20.3h-.4c-1.9 0-3.5-1.6-3.5-3.5V9.4c0-.3.2-.5.5-.5h6.4c.2 0 .5.2.5.5v7.4c0 2-1.6 3.5-3.5 3.5zM1.6 9.9v6.9c0 1.4 1.1 2.5 2.5 2.5h.4c1.4 0 2.5-1.1 2.5-2.5V9.9H1.6z"></path><path d="M19.9 20.3H4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c1.4 0 2.5-1.1 2.5-2.5V5.9 4.2c0-.3.2-.5.5-.5h15.4c.3 0 .5.2.5.5v12.6c0 2-1.6 3.5-3.5 3.5zm-13-1h13c1.4 0 2.5-1.1 2.5-2.5V4.7H8V6c0-.1 0 0 0 0v10.8c0 1-.4 1.9-1.1 2.5z"></path><g><path d="M10.7 14.5h9.5v1h-9.5zM10.7 11h9.5v1h-9.5zM10.7 7.4h9.5v1h-9.5z"></path></g></svg>
                                        <span className="pl-2 text-lg">My Feed</span>
                                    </NavLink>
                                </div>
                                <div className="flex">
                                    <NavLink to="/" className="navlink">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                                            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                                        </svg>
                                        <span className="pl-2 text-lg">Notice Board</span>
                                    </NavLink>
                                </div>
                                <div className="flex">
                                    <NavLink to="/" className="navlink">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span className="pl-2 text-lg">Notification</span>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="mb-2">
                                    <NavLink to="/">Settings</NavLink>
                                </div>
                                <div className="mb-2">
                                    <NavLink to="/">Privacy</NavLink>
                                </div>
                                <div className="mb-2">
                                    <NavLink to="/">Explore</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div className="pr-1 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <p className="absolute -right-0.5 -top-2 bg-tomato rounded-full px-1 py-0 text-white">6</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Navbar 




{/* <div className="navbar">
<div className="navbar-container">
    <div className="nav-links">
        <div className="logo">
            <h1  className="text-sky-400">Fud-Blog</h1>
        </div>
        <div className="links">
            <Menu />
        </div>
    </div>
    <NavLink className="round-btn user-logo" to="/" onClick={() => setToggleMenu(true)}><span>S</span></NavLink>
{
toggleMenu && (
    <div className="nav-menu slide-in-right">
        <div className="menu-header menu-links">
            <NavLink className="fud" to="/">FUD</NavLink>
            <NavLink className="x" to="/" onClick={() => setToggleMenu(false)}><RiArrowRightLine/></NavLink>
        </div>
        <NavLink to="/" className="nav-link">
            <div className="menu-user bottom-link menu-links">
                <NavLink className="user-logo" to="/"><span>S</span></NavLink>
                <div className="menu-user-name">
                    <p className="author">Shedrach Ikenna</p>
                    <p className="gmail">@Shedrach686</p>
                </div>
            </div>
        </NavLink>
        <NavLink to="/" className="nav-link">
            <div className="menu-user menu-links">
                <NavLink to="/" className="icon"><RiNotificationBadgeLine size={27}/></NavLink>
                <div className="menu-user-name">
                    <p>Notice Board</p>
                </div>
            </div>
        </NavLink>
        <NavLink to="/" className="nav-link">
            <div className="menu-user menu-links">
                <NavLink className="icon" to="/"><RiDraftLine size={27}/></NavLink>
                <div className="menu-user-name">
                    <p>Write Article</p>
                </div>
            </div>
        </NavLink>
        <NavLink to="/" className="nav-link">
            <div className="menu-user bottom-link menu-links">
                <NavLink to="/" className="icon"><RiLinksLine size={27} className="red"/></NavLink>
                <div className="menu-user-name">
                    <p>FUD Portal</p>
                </div>
            </div>
        </NavLink>
        <NavLink to="/" className="nav-link">
            <div className="menu-user menu-links">
                <p>Settings</p>
            </div>
        </NavLink>
        <NavLink to="/" className="nav-link">
            <div className="menu-user menu-links">
                <p>Report</p>
            </div>
        </NavLink>
        <NavLink to="/"className="nav-link">
            <div className="menu-user bottom-link menu-links">
                <p>Sign out</p>
            </div>
        </NavLink>
    </div>
)
}
</div>
</div> */}
