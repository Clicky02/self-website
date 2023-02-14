import React from "react";
import "./About.css";
import HeadshotLinks from "componenets/about/HeadshotLinks/HeadshotLinks";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Module">
          <h2 className="ModuleHeader">About Me</h2>

          <div className="ModuleContent">
            <div className="FlexRow Centered">
              <HeadshotLinks />
              <p>
                Hello! My name is Gareth, and I'm an aspiring software engineer.
                I'm currently in my third year at the University of Cincinnati,
                and I'm poised to graduate with a Bachelor's and Master's Degree
                in Computer Science by Spring of 2025.
                <br />
              </p>
            </div>
          </div>

          <div className="ModuleFooter"></div>
        </div>
        <div className="Module">
          <h2>Work</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
