import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import logo from '../logo.svg';
import './Application.css';

import * as processStatus from '../constants/processStatus';

import ConnectionProgress from './ConnectionProgress';
import SessionLogin from './SessionLogin';
import VoteEstimationResult from './VoteEstimationResult';
import VoteProgress from './VoteProgress';
import WaitingForParticipants from './WaitingForParticipants';

const App = ({
  processStatusValue,
  voteProgress,
  estimationResult,
  startSession,
  participants,
  sessionName,
  createSession,
}) => (
  <Grid>
    <PageHeader>
      <Grid>
        <Row>
          <Col xs={8}>
            <h1>React-Native Planning Poker</h1>
            <small>Erstellt von Thomas Maqua und Christoph Ersfeld</small>
          </Col>
          <Col xs={4} className={'text-right'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
        </Row>
      </Grid>
    </PageHeader>
    <Grid>
      <Row>
        {processStatusValue === processStatus.CONNECTION_WEBSOCKET &&
        <ConnectionProgress />
        }
        {processStatusValue === processStatus.CREATE_SESSION &&
        <SessionLogin
          createSession={createSession}
        />
        }
        {processStatusValue === processStatus.VOTE_IN_PROGRESS &&
        <VoteProgress progress={voteProgress} />
        }
        {processStatusValue === processStatus.VOTE_FINISHED &&
        <VoteEstimationResult
          estimationResult={estimationResult}
          startSession={startSession}
        />
        }
        {processStatusValue === processStatus.WAITING_FOR_PARTICIPANTS &&
        <WaitingForParticipants
          participants={participants}
          startSession={startSession}
          sessionName={sessionName}
        />
        }
      </Row>
    </Grid>
  </Grid>
);


export default App;
