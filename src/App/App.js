import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import Router from '../Router/Router';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login Or Sign-Up</h1>
        </header> */}
        <Grid>
          <Row style={{ margin: '20px' }}>
            <Col md={4}></Col>
              <Router   />
            <Col md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
