import React from 'react';
import mask from 'assets/HexagonMask.png'
import './HexagonMask.css';

type HexagonMaskProps = {
  children?: React.ReactNode,
}

class HexagonMask extends React.Component<HexagonMaskProps> {
  render() {
    return (
      <div className='HexagonMaskContainer'>
        <div className='HexagonMask' style={{
          WebkitMaskImage:'url(' + mask + ')',
          maskImage: 'url(' + mask + ')',
          WebkitMaskPosition:'center',
          maskPosition: 'center'
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HexagonMask;
