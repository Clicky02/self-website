import React from 'react';
import FolderImage from 'componenets/home/FolderImage/FolderImage';
import './Home.css';
import StylizedButton from 'componenets/general/StylizedButton/StylizedButton';

class Home extends React.Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className='HomeText'>
          <p className='PreTitle'>
            Hello! I'm
          </p>
          <h1 className='Title'>
            Gareth Fultz
          </h1>
          <p className="Content">
            And I'm a third year computer science student attending the University of Cincinnati.
            I made this website as a portfolio to showcase some of the stuff I've worked on.
          </p>
          <div className='FlexRow'>
          <StylizedButton>
            More About Me
          </StylizedButton>
          <StylizedButton>
            My Projects
          </StylizedButton>
          </div>
        </div>
        <FolderImage />
      </div>
    );
  }
}

export default Home;
