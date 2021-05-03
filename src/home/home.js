import React, { Component } from 'react';
import './home.scss';
import { Image } from "react-bootstrap";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import {
  Button,
} from 'react-bootstrap';
import {
  getFromStorage,
  setInStorage,
} from '../utils/storage';
import RESTAPIUrl from '../config/config';
import browserHistory from '../Router/browserHistory';
 




const slideImages = [
  '../images/1.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

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
      email: getFromStorage('the_login_n_signup').email,
      /* -----------------------Rôle------------------------------------- */
      role: getFromStorage('the_login_n_signup').role,
      atelierType: getFromStorage('the_login_n_signup').atelierType,
      atelierName: getFromStorage('the_login_n_signup').atelierName,
      url: getFromStorage('the_login_n_signup').url,
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

            {/* -----------------------------slide--------------------- */}
            <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div>
            <Image
              src={
                "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
              }
            />
            </div>
          </div>
          <div className="each-slide">
            <div >
            <Image
              src={
                "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/861a4abe_2fec_44aa_aa21_c79ceca1cdc3_660_080520125004.jpg"
              }
            />
            </div>
          </div>
          <div className="each-slide">
            <div >
              <Image
              src={"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/bmw-8-series-805_0.jpg?itok=e--SHpJj"}
              />
            </div>
          </div>
        </Slide>
      </div>

            {/* -----------------------------end ---slide--------------------- */}
            <form className="formabout">
              <div className="creative">
                <div className="container">
                  <div className="creative-info">
                    <h2 className="info-title"><span>About Us</span> </h2>
                    <h4 className="info-dir">Auto Services Team </h4>
                    <p className="info-desc">
                      texte  <a className="lienabout" href="/about">explicabo</a>
                         other text
                    </p>
                    <p className="info-desc">
                      Information
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>



          :
          browserHistory.push('/login')


        }
      </div>
    );
  }
}

export default home;
