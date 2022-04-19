import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'


const SignedInLinks = (props) => {
    return (
        <div className="flex flew-row justify-between md:flex-row md:items-center md:pb-6 md:mt-28">
            <div className="md:pr-0 md:pt-10">
                <h2 className="cursor-pointer"><a onClick={props.signOut}>Log out</a></h2>
            </div>
            <div className="px-3 relative md:mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <p className="absolute -right-0.3 -top-2.5 bg-tomato rounded-full px-1 py-0 text-white">6</p>
            </div>
            <div className="md:pt-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)