import React, {Component} from "react";


class SessionLogin extends Component{

    constructor(props){
        super(props);
        this.state = {
            sessionName: "Christoph"
        };
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onChangeSessionName = this.onChangeSessionName.bind(this);
        this.onClickStartSession = this.onClickStartSession.bind(this);
    }

    onSubmitLogin(event) {
        event.preventDefault();
        this.props.createSession(this.state.sessionName);
    }

    onChangeSessionName(event) {
        this.setState({
            sessionName: event.target.value
        });
    }

    onClickStartSession(event) {
       this.props.startSession();
    }

    render(){


        if(this.props.isVoteFinished){
            return (
                <div>
                    Diskussion der Giganten:

                    <ul>
                        <li>
                            {this.props.estimationResult.minEstimation.clientName} mit {this.props.estimationResult.minEstimation.value}
                        </li>
                        <li>
                            {this.props.estimationResult.maxEstimation.clientName} mit {this.props.estimationResult.maxEstimation.value}

                        </li>
                    </ul>
                    <button onClick={this.onClickStartSession}>
                        Nächste Runde
                    </button>
                </div>
            )
        }

        if(this.props.isSessionCreated){
            return(
                <div>
                    <ul>
                        {this.props.clientNames.map(clientName => (<li>{clientName}</li>))}
                    </ul>
                    <button onClick={this.onClickStartSession}>
                        Session starten
                    </button>
                </div>
            );
        }

        return (
            <form onSubmit={this.onSubmitLogin}>
                <input
                    value={this.state.sessionName}
                    onChange={this.onChangeSessionName}
                />
                <button type="submit">
                    Session anlegen
                </button>
            </form>
        );
    }
};

export default SessionLogin;