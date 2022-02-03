import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Container, Row} from 'react-bootstrap';

const API_PATH = 'http://127.0.0.1:8000';

const OPERATION_PATHS = {
  EXPONENTIAL: 'exponent',
  MULTIPLY: 'multiply',
  ADDITION: 'addition',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num1: 0, num2: 0, currentNum: 1, operation: '', result: null};
  }

  displayNum = () => {
    const {num1, num2, currentNum, result} = this.state;
    return result ? result : currentNum === 1 ? num1 : num2;
  };

  updateNum = (digit) => {
    const {num1, num2, currentNum} = this.state;

    if (currentNum === 1) {
      this.setState({num1: num1 * 10 + digit});
    } else {
      this.setState({num2: num2 * 10 + digit});
    }
  };

  selectOperation = (operation) => {
    this.setState({operation});
    this.switchNum();
  };

  switchNum = () => {
    this.setState({currentNum: 2});
  };

  reset = () => {
    this.setState({
      num1: 0,
      num2: 0,
      currentNum: 1,
      operation: '',
      result: null,
    });
  };

  compute = () => {
    const {num1, num2, operation} = this.state;
    fetch(`${API_PATH}/${OPERATION_PATHS[operation]}/`, {
      method: 'POST',
      body: JSON.stringify({num1, num2}),
    })
        .then((response) => response.json())
        .then((response) => this.setState({result: response.result}));
  };

  render() {
    return (
      <Container className="App">
        <div className="small">
          <code className="text-white">calext</code> built with&nbsp;
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <img
            alt="react logo"
            src={logo}
            width="50"
            height="50"
            className="App-logo align-middle"
          />
        </div>
        <Row
          data-testid="result-display"
          style={{fontSize: '5em', fontWeight: 200, justifyContent: 'end'}}
        >
          {this.displayNum()}
        </Row>
        <Row style={{height: '4em'}}>
          <Button
            variant="light"
            style={{...styles.button, ...styles.grayButton}}
            className="col-3"
            onClick={this.reset}
          >
            AC
          </Button>
          <Button
            variant="light"
            style={{...styles.button, ...styles.grayButton}}
            className="col-3"
            onClick={() => this.selectOperation('EXPONENTIAL')}
          >
            ^
          </Button>
          <Button
            variant="light"
            style={{...styles.button, ...styles.grayButton}}
            className="col-3"
            onClick={() => {}}
          >
            %
          </Button>
          <Button
            variant="light"
            style={{...styles.button, ...styles.orangeButton}}
            className="col-3"
            onClick={() => {}}
          >
            ÷
          </Button>
        </Row>
        <Row style={{height: '4em'}}>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(7)}
          >
            7
          </Button>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(8)}
          >
            8
          </Button>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(9)}
          >
            9
          </Button>
          <Button
            variant="light"
            style={{...styles.button, ...styles.orangeButton}}
            className="col-3"
            onClick={() => this.selectOperation('MULTIPLY')}
          >
            ×
          </Button>
        </Row>
        <Row style={{height: '4em'}}>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(4)}
          >
            4
          </Button>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(5)}
          >
            5
          </Button>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(6)}
          >
            6
          </Button>
          <Button
            variant="light"
            style={{...styles.button, ...styles.orangeButton}}
            className="col-3"
            onClick={() => {}}
          >
            −
          </Button>
        </Row>
        <Row style={{height: '4em'}}>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(1)}
          >
            1
          </Button>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(2)}
          >
            2
          </Button>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => this.updateNum(3)}
          >
            3
          </Button>
          <Button
            variant="light"
            style={{...styles.button, ...styles.orangeButton}}
            className="col-3"
            onClick={() => this.selectOperation('ADDITION')}
          >
            +
          </Button>
        </Row>
        <Row style={{height: '4em'}}>
          <Button
            variant="light"
            style={styles.button}
            className="col-6"
            onClick={() => this.updateNum(0)}
          >
            0
          </Button>
          <Button
            variant="light"
            style={styles.button}
            className="col-3"
            onClick={() => {}}
          >
            .
          </Button>
          <Button
            variant="light"
            style={{...styles.button, ...styles.orangeButton}}
            className="col-3"
            onClick={this.compute}
          >
            =
          </Button>
        </Row>
      </Container>
    );
  }
}

const styles = {
  reactBackground: {backgroundColor: '#282c34'},
  button: {
    borderRadius: 0,
    fontSize: '1.5em',
    fontWeight: 200,
    border: '1px solid',
    backgroundColor: '#D4D4D2',
  },
  orangeButton: {backgroundColor: '#FF9500'},
  grayButton: {backgroundColor: '#808080'},
};
