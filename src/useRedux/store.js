// import { applyMiddleware } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import reducerfun from './reducer'
import { combineReducers } from 'redux';

import { createStore, applyMiddleware, compose } from 'redux';


// const middleware =[thunk]
// const store = configureStore({
//     reducer: { reducerfun }
//     //    composeWithDevTools(applyMiddleware(...middleware))
// }
// )


export function configureStore(initialState) {

    const store = createStore(
        combineReducers({reducerfun})
    )
    return store;
}