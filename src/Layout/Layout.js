import React from 'react';
import classNames from 'classnames';
import SideMenu from '../SideMenu';
import Header from '../header/Header';
import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideMenuOpen: false,
    };

    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu() {
    this.setState({ sideMenuOpen: !this.state.sideMenuOpen });
  }

  render() {
    const { sideMenuOpen } = this.state;
    const { children } = this.props;

    return (
      <div className={`Layout ${this.state.sideMenuOpen && 'withSideMenu'}`}>
        {sideMenuOpen && <SideMenu
          open={sideMenuOpen}
          onItemClick={() => setTimeout(this.toggleSideMenu, 300)}
        />}
        <Header onMenuIconClick={this.toggleSideMenu} isMenuOpen={sideMenuOpen} />

        <div className={classNames({ layoutContent: true, sideMenuOpen })}>
          {children}
        </div>
      </div>
    );
  }
}


export default Layout;
