import React from 'react';
import { Link } from 'react-router-dom';
import { SIDE_MENU_ROUTES } from '../Router/routes';
import {
  setInStorage,
  getFromStorage,
} from '../utils/storage';
import RESTAPIUrl from '../config/config';
import browserHistory from '../Router/browserHistory';
import './SideMenu.scss';

function logOutClicked () {
  fetch(RESTAPIUrl + '/api/account/logout?token=' + getFromStorage('the_login_n_signup').token)
    .then(res => {
      return res.json();
    })
    .then(json => {
      if (json.success) {
        setInStorage('the_login_n_signup', { token: '', name: '' });
        browserHistory.push('/login')
      } else {
        console.log('error')
      }
    });
}
const SideMenu = ({ open, onItemClick }) => (
  <div className={open ? 'SideMenu open' : ''}>
    <ul>
      {
        SIDE_MENU_ROUTES
          .map(item => (
            <li key={item.label} className="menuItem">
              {
                item.external
                  ? <a href={item.route}>{item.label}</a>
                  : <Link to={item.route} onClick={onItemClick}>{item.label}</Link>
              }
            </li>
          ))
        }
           <li key={'logout'} className="menuItem">
        <Link to={'/login'} onClick={logOutClicked}>{'logout'}</Link>
        </li>
    </ul>
  </div>
);


export default SideMenu;
