const initState = {
    authError: null
}

const AuthReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state;
        default:
            return state;
    }
}

export default AuthReducer