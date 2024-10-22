import { createStore } from 'redux';
import counterReducer from './Reducer';

export const store = createStore(counterReducer);

// export function configureStore(initialState) {   
//     const store = createStore(
//         combineReducers({reducerfun})
//     )
//     return store;
// }