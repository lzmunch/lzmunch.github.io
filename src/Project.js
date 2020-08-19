import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
import ReactEmbedGist from 'react-embed-gist';

import TestPage from './assets/pages/test';
import MiiPage from './assets/pages/mii';
import AboutPage from './assets/pages/about';
import CreateLabPage from './assets/pages/create-lab';

class Project extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    console.log("project", this.props.link);
    switch(this.props.link) {
      case "about":
        return (<AboutPage />);
      case "test": 
        return ( <TestPage/>);
      case "mii":
        return ( <MiiPage/>);
      case "create-lab":
        return ( <CreateLabPage/>);
      case "home": 
        return (
          <div className="Project">
            <div id="frontpage">
              <p> Software Developer + Creative </p>
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

export const ProjectModalImage = (props) => {
  return ( 
    <ModalImage 
      className="smallImg"
      small={require("" + props.imgPath)} 
      large={require("" + props.largeImgPath ? props.largeImgPath : props.imgPath)}
      hideDownload="true" 
      hideZoom="true"/>
  );
}

export default Project;