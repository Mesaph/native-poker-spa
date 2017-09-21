import {connect} from "react-redux";
import Application from "../components/Application";
import {
    selectIsConnected,
} from "../ducks/websocketDuck";

export default connect((state)=>({isConnected: selectIsConnected(state)}),{})(Application);