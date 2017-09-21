import React from 'react';
import { ProgressBar, Row, Col } from 'react-bootstrap';


const VoteProgress = ({ progress: { percent, currentStep, totalNumberOfSteps } }) => (
  <Row>
    <Col xs={12} mdOffset={3} md={6}>
      <ProgressBar
        active
        now={percent}
      />
    </Col>
    <Col xsHidden md={3} />
    <Col xs={12} mdOffset={3} md={6} className={'text-center'}>
      <small>
        {`${currentStep} von ${totalNumberOfSteps} Teilnehmer haben ihre Schätzung abgegeben`}
      </small>
    </Col>
  </Row>
);


export default VoteProgress;
