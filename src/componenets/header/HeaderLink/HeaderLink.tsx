import React from 'react';
import { NavLink } from 'react-router-dom'
import './HeaderLink.css';

type HeaderLinkProperties = {
  displayText: string,
  path: string
}

class HeaderLink extends React.Component<HeaderLinkProperties> {
  render() {
    return (
      <div className="HeaderElement HeaderLink">
        <NavLink className={({ isActive }) => 'HeaderLinkHolder NoDecoration' + (isActive ? ' active' : ' inactive')} to={process.env.REACT_APP_ROOT_PATH + this.props.path}>
          <div className='HeaderLinkText'>
            {this.props.displayText}
          </div>
          <div className='HeaderLinkUnderline'/>
        </NavLink>
      </div>
    );
  }
}

export default HeaderLink;