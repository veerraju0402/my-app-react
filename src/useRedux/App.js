import React from 'react';
import MyComponent from './Component.js';
import { Provider } from 'react-redux'
import { ConnectedCounter } from './useRedux2/ReduxComponent.js';
import App from './useRedux3/App.js';

import { store } from './useRedux2/store.js';
// import { configureStore } from './store.js';
// const store = configureStore({})

export default function ReduxApp() {
    return (
        <div>
            <Provider store={store}>
                {/* <MyComponent /> */}
                {/* <ConnectedCounter /> */}
                <App />
            </Provider>
        </div>
    )
}