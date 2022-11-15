import { reducer as AuthReducer } from '../Redux/Auth/reducer';
import { reducer as AppReducer } from '../Redux/App/reducer';
import thunk from 'redux-thunk';
import { ProductReducer } from './Products/reducer.product';
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer = combineReducers({ AuthReducer, AppReducer ,product:ProductReducer});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store }