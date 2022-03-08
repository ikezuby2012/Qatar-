import { combineReducers } from "redux";
import authReducer from "./authReducers";
import trxReducer from "./trxReducers";
import walletReducer from "./walletReducers";

export default combineReducers({
    user: authReducer,
    trx: trxReducer,
    wallet: walletReducer
});