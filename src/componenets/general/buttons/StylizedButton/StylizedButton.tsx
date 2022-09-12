import React from 'react';
import './StylizedButton.css';

type StylizedButtonProps = {
  children?: React.ReactNode
}

class StylizedButton extends React.Component<StylizedButtonProps> {
  render() {
    return (
      <button className='StylizedButton AccentText NoSelect'>
        {this.props.children}
      </button>
    );
  }
}

export default StylizedButton;
