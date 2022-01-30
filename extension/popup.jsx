import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import './popup.css';

const mountNode = document.getElementById('popup');
ReactDOM.render(<App />, mountNode);
