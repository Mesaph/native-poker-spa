import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createWebsocketMiddleware from './createWebsocketMiddleware';
import reducer from '../reducers/index';

const url = new URL(window.location);
const middleware = applyMiddleware(
    createWebsocketMiddleware(`ws://${url.hostname}:8080`, 'native-poker'),
    thunk
);

const store = createStore(reducer, composeWithDevTools(middleware));
export default store;
