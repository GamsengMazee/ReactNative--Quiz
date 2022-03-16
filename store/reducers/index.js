import scoreState from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    scoreState,
})

export default rootReducer;