import React from 'react';
import { Link } from 'react-router-dom'
import './Logo.css';

type LogoProperties = {
  className: string
}

class Logo extends React.Component<LogoProperties> {
  render() {
    return (
      <Link to={process.env.REACT_APP_ROOT_PATH + "/"} className='NoDecoration'>
        <div className={"Logo " + this.props.className}>

          <div className="LogoElement First">
            <div className="LogoInitial">
              G
            </div>
            <div className='LogoText'>
              areth
            </div>
          </div>

          <div className="LogoElement Second">
            <div className="LogoInitial">
              F
            </div>
            <div className='LogoText'>
              ultz
            </div>
          </div>
          
        </div>
      </Link>
    );
  }
}

export default Logo;