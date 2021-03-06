import { NavLink } from 'react-router-dom'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import SignedInLinks from '../signedinlinks/SignedInLinks'
import SignedOutLinks from '../signedoutlinks/SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props
    // console.log(auth)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    const handleToggle = () => {
        const menu = document.getElementById("menu")
        menu.classList.toggle("hidden")
        console.log(menu)
    }
    return (
        <div className="">
            <div className="flex justify-between md:flex-col bg-white px-3 py-4 md:px-1">
                <div className="flex flex-row md:flex-col md:justify-between">
                    <div className="flex items-center md:border-b">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick = {handleToggle} className="h-9 w-9 pr-1 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg> 
                        <h1 className="font-bold text-2xl md:py-8 text-center md:text-left px-1 md:px-4 cursor-pointer">FUD-Blog</h1>
                    </div>
                    <div className="fixed w-full top-0 left-0 mt-16 md:mt-0 md:block md:relative">
                        <div id="menu" className="hidden md:block p-5 md:p-0 bg-white shadow-xl md:shadow-none rounded-lg w-2/3 md:min-w-fit md:w-full">
                            <div className="px-1 mb-5 border-b pb-10 md:hidden">
                                <NavLink to="/" className="flex flex-row items-center justify-center bg-primary px-3 py-2 rounded-lg shadow-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                    </svg>
                                    <span className="text-white pl-2 text-lg">Write</span>
                                </NavLink>
                            </div>
                            <div className="md:px-2 border-b py-2 md:py-8"> 
                                <div className="flex md:pb-6">
                                    <NavLink to="/" className="navlink flex items-center">
                                        <svg className="h-5 md:h-6 w-5 md:w-6" viewBox="0 0 24 24"><path d="M4.5 20.3h-.4c-1.9 0-3.5-1.6-3.5-3.5V9.4c0-.3.2-.5.5-.5h6.4c.2 0 .5.2.5.5v7.4c0 2-1.6 3.5-3.5 3.5zM1.6 9.9v6.9c0 1.4 1.1 2.5 2.5 2.5h.4c1.4 0 2.5-1.1 2.5-2.5V9.9H1.6z"></path><path d="M19.9 20.3H4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c1.4 0 2.5-1.1 2.5-2.5V5.9 4.2c0-.3.2-.5.5-.5h15.4c.3 0 .5.2.5.5v12.6c0 2-1.6 3.5-3.5 3.5zm-13-1h13c1.4 0 2.5-1.1 2.5-2.5V4.7H8V6c0-.1 0 0 0 0v10.8c0 1-.4 1.9-1.1 2.5z"></path><g><path d="M10.7 14.5h9.5v1h-9.5zM10.7 11h9.5v1h-9.5zM10.7 7.4h9.5v1h-9.5z"></path></g></svg>
                                        <span className="pl-2 text-lg md:pl-6">My Feed</span>
                                    </NavLink>
                                </div>
                                <div className="flex md:pb-6">
                                    <NavLink to="/" className="navlink flex items-center">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-5 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                                            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                                        </svg>
                                        <span className="pl-2 text-lg md:pl-6">Notice Board</span>
                                    </NavLink>
                                </div>
                                <div className="flex">
                                    <NavLink to="/" className="navlink flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span className="pl-2 text-lg md:pl-6">Notification</span>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="border-b md:px-2 py-2 md:py-8">
                                <div className="mb-2 md:m-0">
                                    <NavLink to="/" className="md:text-lg">Settings</NavLink>
                                </div>
                                <div className="mb-2 md:m-0 md:pt-6">
                                    <NavLink to="/" className="md:text-lg">Privacy</NavLink>
                                </div>
                                <div className="mb-2 md:m-0 md:pt-6">
                                    <NavLink to="/" className="md:text-lg">Explore</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    { links }
                </div>
            </div>
        </div>   
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar) 

