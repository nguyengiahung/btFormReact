import {combineReducers, createStore} from 'redux'

import { gioHangReducer } from './reducers/gioHangReducer';
import {reactFormReducer} from './reducers/reactFormReducer';
const imgCarStateDefault = './img/products/black-car.jpg';


const rootReducer = combineReducers({
    // nơi chứa state
    numberReducer: (state = 99, action) => {
        return state;
    },

    imgCarReducer: (state = imgCarStateDefault, action) => {
        console.log(action);
        switch (action.type) {
            case 'CHANGE_COLOR_CAR': {
                return state = `./img/products/${action.payload}-car.jpg`
            }
        }
        return state;
    },

    gioHangReducer: gioHangReducer,

    reactFormReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);