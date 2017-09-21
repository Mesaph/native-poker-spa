import React from 'react';
import { Row, Col, Button, Panel, Glyphicon, Badge } from 'react-bootstrap';

const WaitingForParticipants = ({ participants, startSession, sessionName }) => (
  <div>
    {participants.length > 0 &&
    <Row>
      <Col xs={12} mdOffset={3} md={6}>
        <h4> Teilnehmer </h4>


        <ul className="list-group">
          {participants.map(participant => (
            <li className={'list-group-item'}>
              <Badge><Glyphicon glyph={'user'} /></Badge>
              {participant}
            </li>
          ))}
        </ul>
      </Col>
      <Col xsHidden md={3} />
      <Col xs={12} mdOffset={3} md={6} className={'text-center'}>
        <Button
          type="submit"
          bsStyle="primary"
          disabled={participants.length < 2}
          onClick={startSession}
        >
                            Schätzrunde starten
        </Button>
      </Col>
    </Row>
    }
    { participants.length === 0 &&
    <Panel header={'Hinweis'} bsStyle="info">
      {'Um an dem Schätztermin teilzunehmen, verbinden Sie sich nun bitte mit ihrem Mobiltelefon mit '}
      <strong>{sessionName}</strong>
    </Panel>
    }
  </div>
);


export default WaitingForParticipants;
