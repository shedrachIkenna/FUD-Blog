import AuthReducer from './AuthReducer'
import BlogReducer from './BlogReducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    auth : AuthReducer,
    blog : BlogReducer
});

export default RootReducer