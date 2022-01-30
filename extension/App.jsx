import * as React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="d-inline-block float-end mb-2">
          <code>calext</code> built with&nbsp;
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="App-logo align-bottom"
          />
        </div>
      </div>
    );
  }
};
