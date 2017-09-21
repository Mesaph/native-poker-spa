import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import ApplicationContainer from './containers/ApplicationContainer';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";



ReactDOM.render(<Provider store={store}><ApplicationContainer /></Provider>, document.getElementById('root'));
registerServiceWorker();
