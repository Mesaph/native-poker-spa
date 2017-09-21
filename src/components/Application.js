import React, { Component } from 'react';
import logo from '../logo.svg';
import './Application.css';
import SessionLoginContainer from "../containers/SessionLoginContainer";

class App extends Component {

  render() {
    const {isConnected} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Willkommen</h2>
        </div>
        <div className="App-intro">
            {!isConnected && <p> Verbindung zum Server wird hergestellt</p> }
            {isConnected &&  <SessionLoginContainer/>}
        </div>
      </div>
    );
  }
}

export default App;
