import React from 'react';
import './FolderImage.css';

type FolderImageState = {
  open: boolean
}

class FolderImage extends React.Component<{}, FolderImageState> {

  constructor(props : {}) {
    super(props);

    this.state = {
      open : false
    }

    this.handleAnimationEvent = this.handleAnimationEvent.bind(this);
  }

  handleAnimationEvent(event: React.AnimationEvent<SVGSVGElement>) {
    console.log(event);
    this.setState({
      open : true
    });
  }

  render() {
    return (
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={'FolderSVG' + (this.state.open ? ' open' : '')}>
        <g id="Frame 1">
          <rect width="400" height="400" fill="white" />
          <g id="FolderBack">
            <g id="Rectangle 1" filter="url(#filter0_d_0_1)">
              <rect x="73" y="134" width="251" height="162" rx="15" fill="#D9D9D9" />
            </g>
            <rect id="Rectangle 2" x="95" y="120" width="65" height="27" rx="13.5" fill="#D9D9D9" />
          </g>
          <g id="Page">
            <mask id="mask0_0_1" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="296">
              <rect id="Rectangle 5" width="400" height="296" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_0_1)">
              <g id="FolderPage" onAnimationEnd={this.handleAnimationEvent}>
                <rect id="Rectangle 4" x="131.5" y="172.5" width="159" height="226" rx="8.5" fill="white" stroke="#545454" strokeWidth="3" />
                <line id="Line 1" x1="154" y1="198" x2="210" y2="198" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line id="Line 2" x1="154" y1="228" x2="267" y2="228" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line id="Line 3" x1="154" y1="248" x2="260" y2="248" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line id="Line 4" x1="154" y1="268" x2="267" y2="268" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line id="Line 5" x1="154" y1="288" x2="260" y2="288" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
          </g>
          
          <rect id="FrontFolder" x="73" y="134" width="251" height="162" rx="15" fill="#C6C4C4" />
        </g>
        <defs>
          <filter id="filter0_d_0_1" x="69" y="134" width="259" height="170" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
          </filter>
          <filter id="filter1_d_0_1" x="71.9466" y="152" width="279.107" height="152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
          </filter>
          <filter id="filter2_d_0_1" x="509" y="134" width="259" height="170" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
          </filter>
          <filter id="filter3_d_0_1" x="511.042" y="172" width="293.917" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
          </filter>
        </defs>
      </svg>

    );
  }
}

export default FolderImage;