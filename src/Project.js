import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
// import ReactEmbedGist from 'react-embed-gist';
import Gallery from './Gallery';

import TestPage from './assets/pages/test';
import MiiPage from './assets/pages/mii';
import AboutPage from './assets/pages/about';
import CreateLabPage from './assets/pages/create-lab';
import ImagingResearchPage from './assets/pages/imaging-research';
import VoicesOfBelfastPage from './assets/pages/voices-of-belfast';
import VirtualCmuFencePage from './assets/pages/virtual-cmu-fence';
import ShadowAnimPage from './assets/pages/3d-shadow-anim';
import EmsPage from './assets/pages/ems';
import GrasshopperPage from './assets/pages/grasshopper';

const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vTXxkb2OZLoH1P1nq28pMjGIp_--eJyJep3qC8vsTO67oX8AoxtgkAHmE-KShgOwuDFXW4Y2hDdb4Ro/pub";

class Project extends Component {
  constructor(props) {
    super(props); 
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    // window.scrollTo({top: 0, behavior: 'smooth'});
    console.log(';jklsfkjsadfkjldsaf')
  } 
  render() {
    console.log("project", this.props.link);
    switch(this.props.link) {
      case "about":
        return (<AboutPage />);
      case "test": 
        return ( <TestPage/>);
      case "grasshopper":
        return ( <GrasshopperPage/>);
      case "ems":
        return ( <EmsPage/>);
      case "mii":
        return ( <MiiPage/>);
      case "create-lab":
        return ( <CreateLabPage/>);
      case "imaging-research":
        return ( <ImagingResearchPage/>);
      case "voices-of-belfast":
        return ( <VoicesOfBelfastPage/>);
      case "virtual-cmu-fence":
        return ( <VirtualCmuFencePage/>);
      case "3d-shadow-anim": 
        return ( <ShadowAnimPage/>);
      case "home": 
        return (
          <div id="homepage">
            <div className="Project">
              <h3>Software Developer + Creative</h3>
              <h3><a href={resumeLink} target="_blank" rel="noopener noreferrer">[Resume]</a></h3>
            </div>
            <div style={{maxWidth:"75%",marginLeft:"13%"}}>
              <Gallery current="home"/>
           </div>
          </div>
        );
      default :
        return (
          <div className="Project">
            This page doesn't exist :(
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