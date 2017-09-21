import {
    WEBSOCKET_CONNECTED,
    WEBSOCKET_DISCONNECTED,
} from "../store/createWebsocketMiddleware";

export const selectIsConnected = (state) => state.websocket.isConnected;

const DEFAULT_STATE = {
    isConnected : false,
}

export default (state = DEFAULT_STATE, {type, payload}) => {
    switch(type){
        case WEBSOCKET_CONNECTED:
            return {...state, isConnected: true};
        case WEBSOCKET_DISCONNECTED:
            return {...state, isConnected: false};
        default:
            return state;
    }
}