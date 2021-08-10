import product from './productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product
})

export default rootReducer;