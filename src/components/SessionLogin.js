import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class SessionLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionName: '',
    };
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onChangeSessionName = this.onChangeSessionName.bind(this);
  }

  onSubmitLogin(event) {
    event.preventDefault();
    this.props.createSession(this.state.sessionName);
  }

  onChangeSessionName(event) {
    this.setState({
      sessionName: event.target.value,
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} mdOffset={3} md={6}>
          <form onSubmit={this.onSubmitLogin}>
            <FormGroup
              controlId="sessionName"
            >
              <ControlLabel>Name der Schätzrunde</ControlLabel>
              <FormControl
                type="text"
                value={this.state.sessionName}
                placeholder="Name der Schätzrunde"
                onChange={this.onChangeSessionName}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Row>
              <Col xs={12} className={'text-center'}>
                <Button
                  type="submit"
                  bsStyle="primary"
                  disabled={this.state.sessionName.length < 1}
                >
                                    Schätzrunde anlegen
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    );
  }
}

export default SessionLogin;
