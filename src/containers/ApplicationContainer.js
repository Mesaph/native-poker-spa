import { connect } from 'react-redux';
import Application from '../components/Application';
import {
  selectProcessStatus,
  selectVoteProgress,
  selectEstimationResult,
  startSession,
  createSession,
  selectClientNames,
  selectSessionName,
} from '../ducks/sessionDuck';

export default connect(state => ({
  processStatusValue: selectProcessStatus(state),
  voteProgress: selectVoteProgress(state),
  estimationResult: selectEstimationResult(state),
  participants: selectClientNames(state),
  sessionName: selectSessionName(state),
}), { startSession, createSession })(Application);
