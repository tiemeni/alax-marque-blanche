import { combineReducers } from 'redux';
import {CommonReducer} from "../Common/reducer"
/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
    CommonReducer
});

export default rootReducer;