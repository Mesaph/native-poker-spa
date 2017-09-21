import {combineReducers} from "redux";
import websocket from "../ducks/websocketDuck";
import session from "../ducks/sessionDuck";


export default combineReducers({
    websocket,
    session,
});