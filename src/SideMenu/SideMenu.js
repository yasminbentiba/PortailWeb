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

function logOutClicked() {

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
  console.log(SIDE_MENU_ROUTES),
  <div className={open ? 'SideMenu open' : ''}>

    <ul>
      {/* { logOutClicked (SIDE_MENU_ROUTES.splice(0,1))} */}
      {

        
(getFromStorage('the_login_n_signup').role  !== "admin") ? 

SIDE_MENU_ROUTES.filter(function (value, index, arr) {
  return index !== 1
}).map(item => (

  <li key={item.label} className="menuItem">
    {


      item.external
        ? <a href={item.route}>{item.label}</a>
        : <Link to={item.route} onClick={onItemClick}>{item.label}</Link>
    }
  </li>
))
:
SIDE_MENU_ROUTES.map(item => (

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
        <Link to={'/login'} onClick={logOutClicked}>{'Se déconnecter'}</Link>
      </li>
    </ul>
  </div>
);


export default SideMenu;