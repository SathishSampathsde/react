import { createStore } from "redux";
import authReducer from "./slices/authReducer";

const store = createStore(authReducer);

export default store;
