/* import { createStore } from 'redux'; */
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import counterSlice from './counterSlice';

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;






/* const counterReducer = (state = initialState, action) => {

    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }
    if (action.type === 'INCREASEBYVAL') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'togglecounter') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        }
    }

    return state;
}; 
const store = createStore(counterReducer);
*/



