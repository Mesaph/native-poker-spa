import {
  transformWSMessagesToAction,
  sendWebsocketMessage,
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DISCONNECTED,
} from '../store/createWebsocketMiddleware';
import * as processStatus from '../constants/processStatus';


// websocket action Types
export const CREATE_SESSION = 'CREATE_SESSION';
export const SESSION_CREATED = 'SESSION_CREATED';
export const REQUEST_AVAILABLE_SESSIONS = 'REQUEST_AVAILABLE_SESSIONS';
export const RESPONSE_AVAILABLE_SESSIONS = 'RESPONSE_AVAILABLE_SESSIONS';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const PUBLISH_SESSION_UPDATE = 'PUBLISH_SESSION_UPDATE';
export const START = 'START';
export const VOTE = 'VOTE';
export const VOTE_FINSHED = 'VOTE_FINSHED';
export const UPDATE_VOTE_PROGRESS = 'UPDATE_VOTE_PROGRESS';


// internal action types
export const SET_SESSION_NAME = 'SET_SESSION_NAME';

export const getProcessStatus = state => state.session.processStatus;
export const getEstimationResult = state => state.session.estimationResult;
export const getClientNames = state => state.session.clientNames;
export const getSessionName = state => state.session.sessionName;
export const getVoteProgress = (state) => {
  const currentStep = state.session.numberOfVotes;
  const totalNumberOfSteps = state.session.clientNames.length;
  return {
    percent: (currentStep / totalNumberOfSteps) * 100,
    currentStep,
    totalNumberOfSteps,
  };
};

const setSessionName = sessionName => ({ type: SET_SESSION_NAME, payload: sessionName });


export const createSession = sessionName => (dispatch) => {
  dispatch(setSessionName(sessionName));
  dispatch(sendWebsocketMessage({ type: CREATE_SESSION, payload: { sessionName } }));
};

export const startSession = () => (dispatch) => {
  dispatch(sendWebsocketMessage({ type: START }));
};

const DEFAULT_STATE = {
  processStatus: processStatus.CONNECTION_WEBSOCKET,
  estimationResult: null,
  clientNames: [],
  numberOfVotes: null,
  sessionName: '',
};

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case WEBSOCKET_CONNECTED:
      return { ...state, processStatus: processStatus.CREATE_SESSION };
    case WEBSOCKET_DISCONNECTED:
      return DEFAULT_STATE;
    case SESSION_CREATED:
      return { ...state, processStatus: processStatus.WAITING_FOR_PARTICIPANTS };
    case UPDATE_SESSION:
      return { ...state, clientNames: payload.clientNames};
    case START:
      return { ...state, processStatus: processStatus.VOTE_IN_PROGRESS,  numberOfVotes: 0 };
    case VOTE_FINSHED:
      return { ...state, estimationResult: payload, processStatus: processStatus.VOTE_FINISHED };
    case UPDATE_VOTE_PROGRESS :
      return { ...state, numberOfVotes: payload };
    case SET_SESSION_NAME:
      return { ...state, sessionName: payload };
    default:
      return state;
  }
};

export default transformWSMessagesToAction(reducer);
