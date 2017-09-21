import { connect } from 'react-redux';
import Application from '../components/Application';
import {
  getProcessStatus,
  getVoteProgress,
  getEstimationResult,
  startSession,
  createSession,
  getClientNames,
  getSessionName,
} from '../ducks/sessionDuck';

export default connect(state => ({
  processStatusValue: getProcessStatus(state),
  voteProgress: getVoteProgress(state),
  estimationResult: getEstimationResult(state),
  participants: getClientNames(state),
  sessionName: getSessionName(state),
}), { startSession, createSession })(Application);
