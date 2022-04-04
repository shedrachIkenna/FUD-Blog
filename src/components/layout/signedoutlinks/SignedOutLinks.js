import React from 'react'

const SignedOutLinks = () => {
    return (
        <div className="flex flew-row justify-between md:flex-row md:items-center md:pb-6 md:mt-28">
            <div className="md:pr-0 md:pt-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <div className="px-3 relative md:mt-10">
                <span><p>Sign in</p></span>
            </div>
            <div className="md:pt-10">
                <span><p>Sign up</p></span>
            </div>
        </div>
    )
}

export default SignedOutLinks
