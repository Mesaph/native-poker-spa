import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const ConnectionProgress = () => (
  <Row>
    <Col xs={12} mdOffset={3} md={6}>
      <ProgressBar
        active
        now={50}
      />
    </Col>
    <Col xsHidden md={3} />
    <Col xs={12} mdOffset={3} md={6} className={'text-center'}>
      <small>
        {'Verbindung zum Server wird aufgebaut...'}
      </small>
    </Col>
  </Row>
);


export default ConnectionProgress;
