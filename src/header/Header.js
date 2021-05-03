import React, { Component } from 'react';
import classNames from 'classnames';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Avatar } from '@material-ui/core';
import './Header.scss';

class Header extends Component {
  render() {
    const { isMenuOpen, onMenuIconClick, } = this.props;
    const containerClasses = classNames({
      Header: true,
      menuOffset: isMenuOpen,
    });

    const iconClasses = classNames({ sideMenuButton: true, open: isMenuOpen });

    return (
      <div className={containerClasses}>
        <div className="actionsContainer">
          <a className={iconClasses} onClick={onMenuIconClick}>
            <i className="material-icons white menuIcon">{isMenuOpen ? 'close' : 'menu'}</i>
          </a>
        </div>
      </div>
    );
  }
}


export default Header;
