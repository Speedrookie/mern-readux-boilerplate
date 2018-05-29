import { combineReducers } from 'redux';

//Reducers
import userReducer from './components/user/reducer.js';

export default combineReducers({
    user: userReducer
});