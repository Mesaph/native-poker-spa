export const WEBSOCKET_CONNECTED = "WEBSOCKET_CONNECTED";
export const SEND_WEBSOCKET_MESSAGE = "SEND_WEBSOCKET_MESSAGE";
export const WEBSOCKET_MESSAGE_RECEIVED = "WEBSOCKET_MESSAGE_RECEIVED";
export const WEBSOCKET_DISCONNECTED = "WEBSOCKET_DISCONNECTED";



export const sendWebsocketMessage = (message) => ({type: SEND_WEBSOCKET_MESSAGE, payload: message});


export const transformWSMessagesToAction = (reducer) => (state, action) => {
    if(action && action.type === WEBSOCKET_MESSAGE_RECEIVED){
        return reducer(state, action.payload);
    }
    return reducer(state, action);
};

const createWebsocketMiddleware = (url, protocols) => {
    let websocket = new WebSocket(url, protocols);
    return store => {
        websocket.onmessage = ({data}) => {
            store.dispatch({
                type: WEBSOCKET_MESSAGE_RECEIVED,
                payload: data ? JSON.parse(data) : undefined
            });
        };

        websocket.onopen = () => {
            store.dispatch({
                type: WEBSOCKET_CONNECTED
            });
        };

        websocket.onclose = () => {
            store.dispatch({
                type: WEBSOCKET_DISCONNECTED
            });
        };

        return next => (action) => {
            if(action && action.type === SEND_WEBSOCKET_MESSAGE){
                websocket.send(JSON.stringify(action.payload));
            };
            return next(action);
        };
    }
};

export default createWebsocketMiddleware;