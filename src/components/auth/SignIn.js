import React from 'react'

const SignIn = () => {
    return (
        <div>
           <div>
               <div>

               </div>
               <div>
                    <h2>Sign In</h2>
                    <form>
                        <div>
                            <label htmlFor="">Email</label>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <input type="email"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <input type="text"/>
                            </div>
                        </div>
                        <a href="/">Forgot password</a>
                        <button>Log in</button>
                    </form>
               </div>
           </div>
        </div>
    )
}

export default SignIn
