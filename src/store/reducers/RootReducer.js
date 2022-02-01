import AuthReducer from './AuthReducer'
import BlogReducer from './BlogReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const RootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth : AuthReducer,
    blog : BlogReducer
});

export default RootReducer