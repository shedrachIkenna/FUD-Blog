import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './store/reducers/RootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import  firebase  from './config/fbConfig'
import { createFirestoreInstance } from 'redux-firestore'

const store = createStore(RootReducer, 
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    
);
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
