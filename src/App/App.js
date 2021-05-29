import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';


import DarkModeToggle from "react-dark-mode-toggle";
//chat importation
import 'react-chat-widget/lib/styles.css';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';


import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import Router from '../Router/Router';
class App extends Component {
  componentDidMount() {
    addResponseMessage("👋 Salut! Je suis un robot.Bienvenue dans notre génial chat!  Faites-moi savoir si vous avez des questions concernant notre outil!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`Nouveau message entrant! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login Or Sign-Up</h1>
        </header> */}
{/* chat */}
 <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Assistant Virtuel"
          subtitle="En ligne"
        />

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
