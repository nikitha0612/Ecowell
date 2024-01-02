import { combineReducers } from "redux";
import LandingPageReducer from "./LandingReducer";
import UserHealthDetailsReducer from "./UserHealthDetailsReducer";

const rootReducer = combineReducers({
  LandingPageReducer,
  UserHealthDetailsReducer,
});

export default rootReducer;
