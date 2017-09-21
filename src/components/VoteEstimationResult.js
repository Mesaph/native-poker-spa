import React from 'react';
import { Row, Col, Button, ProgressBar } from 'react-bootstrap';


const VoteEstimationResult = ({ estimationResult, startSession }) => {
  const isMinAndMaxEql =
      estimationResult.minEstimation.value === estimationResult.maxEstimation.value;

  let content = (
    <p>
      {`Alle Teilnehmer haben die Story mit ${estimationResult.minEstimation.value}
       Story Points geschätzt.`}
    </p>
  );
  if (!isMinAndMaxEql) {
    const progressBarFactor = (100 / (estimationResult.maxEstimation.value * 1.2));

    content = (
      <Row>
        <Col xs={12} className={'padding-bottom-2'}>
          <p>
            {'Die Schätzungen der folgenden Teilnehmer liegen am weitesten auseinander'}
          </p>

          <p className="lead">{estimationResult.minEstimation.clientName}</p>
          <ProgressBar
            now={estimationResult.minEstimation.value * progressBarFactor}
            label={`${estimationResult.minEstimation.value} SP`}
            bsStyle="success"
          />
          <p className="lead">{estimationResult.maxEstimation.clientName}</p>
          <ProgressBar
            now={estimationResult.maxEstimation.value * progressBarFactor}
            label={`${estimationResult.maxEstimation.value} SP`}
            bsStyle="danger"
          />

          <hr />
          <p>
            {'Der durchschnittliche Schätzwert lag bei'}
          </p>
          <ProgressBar
            now={estimationResult.averageEstimation * progressBarFactor}
            label={`${Math.round(estimationResult.averageEstimation)} SP`}
            bsStyle="info"
          />

        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col xs={12} mdOffset={3} md={6}>
        <h4 className={'text-center'}> Ergebnis </h4>
        {content}
      </Col>
      <Col xsHidden md={3} />
      <Col xs={12} mdOffset={3} md={6} className={'text-center'}>
        <Button
          type="submit"
          bsStyle="primary"
          onClick={startSession}
        >
                    Nächste Runde
        </Button>
      </Col>
    </Row>
  );
};


export default VoteEstimationResult;
