import React from 'react';
import './Header.css';
import HeaderLink from './HeaderLink/HeaderLink';
import Logo from './Logo/Logo'

class Header extends React.Component {
  render() {
    return (
      <div className="HeaderSpace">
        <div className="Header">
          <HeaderLink displayText="Home" path="/" />
          <HeaderLink displayText="About" path="/about" />
          <Logo className="HeaderElement"/>
          <HeaderLink displayText="Projects" path="/projects" />
          <HeaderLink displayText="Contact" path="/contact" />
        </div>
      </div>
    );
  }
}

export default Header;