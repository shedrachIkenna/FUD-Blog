import { NavLink } from 'react-router-dom'
// import { useState } from 'react'
import { RiNotificationBadgeLine, RiDraftLine, RiArrowRightLine, RiLinksLine } from 'react-icons/ri'


const Navbar = () => {


    return (
        <div className="navbar">
            <div className="border-2 flex md:flex-col h-full justify-between p-3">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>  
                    <h1>FUD-Blog</h1>
                </div>
                <div>
                <div className="hidden md:block">
                    <div>
                        <RiNotificationBadgeLine size={27}/>
                        <NavLink to="/">Write</NavLink>
                    </div>
                    <div>
                        <div>
                            <RiNotificationBadgeLine size={27}/>
                            <NavLink to="/">My Feed</NavLink>
                        </div>
                        <div>
                            <RiNotificationBadgeLine size={27}/>
                            <NavLink to="/">Draft</NavLink>
                        </div>
                    </div>
                    <div>
                        <div>
                            <RiNotificationBadgeLine size={27}/>
                            <NavLink to="/">Search</NavLink>
                        </div>
                        <div>
                            <RiNotificationBadgeLine size={27}/>
                            <NavLink to="/">AMAs</NavLink>
                        </div>
                        <div>
                            <RiNotificationBadgeLine size={27}/>
                            <NavLink to="/">Explore</NavLink>
                        </div>
                        <div>
                            <RiNotificationBadgeLine size={27}/>
                            <NavLink to="/">Bookmarks</NavLink>
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex justify-between">
                    <div className="pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div className="pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
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
