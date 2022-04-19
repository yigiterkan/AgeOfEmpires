import { combineReducers } from "redux";
import unitReducer from "./unitReducer";

const rootReducer = combineReducers({
    units:unitReducer,
})

export type RootState = ReturnType<typeof unitReducer>;

export default rootReducer;