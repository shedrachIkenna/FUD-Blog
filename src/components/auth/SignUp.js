import React from 'react'
import { useState } from 'react'
const SignOut = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lastname, setLastName] = useState('')
    const [firstname, setFirstName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, firstname, lastname)
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="h-fit border border-slate-700 p-14">
                <h2 className="text-center font-bold py-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname" className="text-[10px] font-bold">FIRST NAME</label>
                        <div className="flex flex-row mt-2 border-b-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <input onChange={(e) => setFirstName(e.target.value)} value={firstname} id="firstname" type="text" className="inline border-slate-800 outline-none text-xs"/>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="lastname" className="text-[10px] font-bold">LAST NAME</label>
                        <div className="flex flex-row mt-2 border-b-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input onChange={(e) => setLastName(e.target.value)} value={lastname} type="text" id="lastname" className="inline border-slate-800 outline-none text-xs"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-[10px] font-bold">EMAIL</label>
                        <div className="flex flex-row mt-2 border-b-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="email" className="inline border-slate-800 outline-none text-xs"/>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="password" className="text-[10px] font-bold">PASSWORD</label>
                        <div className="flex flex-row mt-2 border-b-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} id="password" type="password" className="inline border-slate-800 outline-none text-xs"/>
                        </div>
                    </div>
                    <span><a href="/" className="mt-6 block text-center font-bold text-[10px]">Forgot password</a></span>
                    <button className="mt-10 block bg-purple-600 text-white w-full py-2 rounded-2xl px-8">Sign Up</button>
                </form>
            </div>    
        </div>
    )
}

export default SignOut
