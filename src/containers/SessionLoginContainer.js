import {connect} from "react-redux";
import SessionLogin from "../components/SessionLogin";
import {
    createSession,
    startSession,
    selectIsSessionCreated,
    selectClientNames,
    selectIsVoteFinished,
    selectEstimationResult,
} from "../ducks/sessionDuck";

export default connect((state)=>(state=>({
    isSessionCreated: selectIsSessionCreated(state),
    isVoteFinished: selectIsVoteFinished(state),
    clientNames: selectClientNames(state),
    estimationResult: selectEstimationResult(state),
})),{createSession,startSession})(SessionLogin);