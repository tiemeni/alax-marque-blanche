import { combineReducers } from 'redux';
import { CommonReducer } from "../Common/reducer"
import { StepReducer } from "../Step/reducer"
/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
    CommonReducer,
    StepReducer
});

export default rootReducer;