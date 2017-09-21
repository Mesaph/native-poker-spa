
import {transformWSMessagesToAction, sendWebsocketMessage} from "../store/createWebsocketMiddleware"


export const CREATE_SESSION = "CREATE_SESSION";
export const SESSION_CREATED = "SESSION_CREATED";
export const REQUEST_AVAILABLE_SESSIONS = "REQUEST_AVAILABLE_SESSIONS";
export const RESPONSE_AVAILABLE_SESSIONS = "RESPONSE_AVAILABLE_SESSIONS";

export const UPDATE_SESSION = "UPDATE_SESSION";


export const PUBLISH_SESSION_UPDATE = "PUBLISH_SESSION_UPDATE";
export const START = "START";
export const VOTE = "VOTE";
export const VOTE_FINSHED = "VOTE_FINSHED";


export const selectIsSessionCreated = state => state.session.isSessionCreated;
export const selectIsVoteFinished = state => state.session.isVoteFinished;
export const selectEstimationResult = state => state.session.estimationResult;




export const selectClientNames = state => state.session.clientNames;


export const createSession = (sessionName) => (dispatch) => {
    dispatch(sendWebsocketMessage({type: CREATE_SESSION, payload: {sessionName}}));
};


export const startSession = () => (dispatch) => {
    dispatch(sendWebsocketMessage({type: START}));
};

const DEFAULT_STATE = {
    isSessionCreated: false,
    estimationResult: null,
    isVoteFinished: false,
    clientNames: [],
}

const reducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch(type){
        case SESSION_CREATED:
            return {...state, isSessionCreated: true, isVoteFinished: false}
        case UPDATE_SESSION: {
            return { ... state, clientNames: payload.clientNames}
        }
        case VOTE_FINSHED: {
            return { ... state, estimationResult: payload, isVoteFinished: true}
        }
        default: return state;

    }
}


export default transformWSMessagesToAction(reducer);