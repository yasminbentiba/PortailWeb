import React, { Component } from 'react';
import './home.scss';
import {
  Button,
} from 'react-bootstrap';
import {
  getFromStorage,
  setInStorage,
} from '../utils/storage';
import RESTAPIUrl from '../config/config';
import browserHistory from '../Router/browserHistory';
class home extends Component {
  constructor(props, context) {
    super(props, context);
    this.logOutClicked = this.logOutClicked.bind(this);
    this.state = {
      logOutButtonStatus: 'warning',
      logOutLoadingMessage: 'Log Out',
      logOutLoading: false,
      firstName: getFromStorage('the_login_n_signup').firstName,
      lastName: getFromStorage('the_login_n_signup').lastName,
      atelierType: getFromStorage('the_login_n_signup').atelierType,
      /* -----------------------Rôle------------------------------------- */
      role: getFromStorage('the_login_n_signup').role,
      url: getFromStorage('the_login_n_signup').url,
     email: getFromStorage('the_login_n_signup').email,
      token: getFromStorage('the_login_n_signup').token,
      usersTable: [{}],
    }
  }

  logOutClicked() {
    this.setState({
      logOutLoading: true,
      logOutLoadingMessage: 'Logging Out...',
      logOutButtonStatus: 'info',
    });
    fetch(RESTAPIUrl + '/api/account/logout?token=' + this.state.token)
      .then(res => {
        return res.json();
      })
      .then(json => {
        if (json.success) {
          setInStorage('the_login_n_signup', { token: '', firstName: '' });
          browserHistory.push('/login')
        } else {
          this.setState({
            logOutLoading: false,
          });
        }
      });
  }
  render() {
    const obj = getFromStorage('the_login_n_signup');
    return (
      <div>
        {(obj && obj.token) ?
            <div style={{ textAlign: '-webkit-center' }}><h1>Welcome {this.state.firstName}!</h1>
              <Button
                style={{ width: '100px' }}
                block
                bsStyle={this.state.logOutButtonStatus}
                disabled={this.state.logOutLoading}
                onClick={this.state.logOutLoading ? null : this.logOutClicked}
              >
                {this.state.logOutButtonStatus ? 'Log Out' : 'Logging Out'}
              </Button>
            </div>

          :
          browserHistory.push('/login')
        }
      </div>
    );
  }
}

export default home;
