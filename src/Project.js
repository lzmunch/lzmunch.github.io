import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
import ReactEmbedGist from 'react-embed-gist';

function ProjectModalImage(props) {
  return ( 
    <ModalImage 
      className="smallImg"
      small={require(""+props.imgPath)} 
      hideDownload="true" 
      hideZoom="true"/>
  );
}

class Project extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    console.log("project", this.props.link);
    switch(this.props.link) {
      case "test2": 
        return (
          <div className="Project">
            <h>Test 2</h>
            noop
          </div>
        );
      case "test": 
        return (
          <div className="Project">
            <h>Test</h>
            neep
          </div>
        );
      case "mii":
        return (
            <div className="Project">
              <h>Mii Simulator</h>
              :(
            </div>
        );
      case "home": 
        return (
          <div className="Project">
            <div id="frontpage">
              <p> Home page stuff </p>
              <ProjectModalImage imgPath="./assets/thumbnails/mii.png" />
              <ProjectModalImage imgPath="./assets/thumbnails/test.jpg" />
              <ProjectModalImage imgPath="./assets/thumbnails/test2.jpg" />
            </div>
          </div>
        );
      default :
        return (
          <div className="Project">
            this page doesn't exist. yikes! 
          </div>
        );
    }
  }
}

export default Project;