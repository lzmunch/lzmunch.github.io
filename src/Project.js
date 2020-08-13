import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
import ReactEmbedGist from 'react-embed-gist';

import TestPage from './assets/pages/test';
import Test2Page from './assets/pages/test2';
import MiiPage from './assets/pages/mii';

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
        return (<Test2Page />);
      case "test": 
        return ( <TestPage/>);
      case "mii":
        return ( <MiiPage/>);
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