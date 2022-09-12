import React from 'react';
import { Link } from 'react-router-dom'
import StylizedButton from '../StylizedButton/StylizedButton';

type LinkButtonProps = {
  children?: React.ReactNode,
  to: string
}

class LinkButton extends React.Component<LinkButtonProps> {
  render() {
    return (
      <Link to={process.env.REACT_APP_ROOT_PATH + this.props.to}>
        <StylizedButton>
          {this.props.children}
        </StylizedButton>
      </Link>
    );
  }
}

export default LinkButton;
