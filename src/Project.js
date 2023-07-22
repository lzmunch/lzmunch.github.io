import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
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

import DrunkoBrunkoPage from './assets/pages/bvw/drunko-brunko';
import GnomesPage from './assets/pages/bvw/gnomes-in-a-robe';

import MayaToonScriptPage from './assets/pages/maya-toon-script';
import InnerMatterPage from './assets/pages/inner-matter';
import TimePassesPage from './assets/pages/time-passes';

import { resumeLink, demoReelLink } from './assets/pages/index';

class Project extends Component {
  // constructor(props) {
  //   super(props); 
  // }
  componentDidMount() {
    window.scrollTo(0, 0);
    // window.scrollTo({top: 0, behavior: 'smooth'});
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
      case "drunko-brunko": 
        return ( <DrunkoBrunkoPage/>);
      case "gnomes-in-a-robe": 
        return ( <GnomesPage/>);
      case "maya-toon-script": 
        return ( <MayaToonScriptPage/>);
      case "inner-matter": 
        return ( <InnerMatterPage/>);
      case "time-passes": 
        return ( <TimePassesPage/>);
      case "home": 
        // TODO move style into css file
        return (
          <div id="homepage">
            <div className="Project">
              <h3>Software Developer + Creative</h3>
              <h3><a href={resumeLink} target="_blank" rel="noopener noreferrer">[Resume]</a></h3>
            </div>
            <div style={{maxWidth:"100%",marginLeft:"0%"}}>
              <iframe title="demo-reel" src={demoReelLink} width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
           </div>
           <div style={{maxWidth:"75%",marginLeft:"14.5%"}}>   
              <Gallery current="home"/>
           </div>
           <p><a href="#/all">[All projects]</a></p>
          </div>
        );
      case "all": 
        return (
          <div id="all-projects">
            <div className="Project">
              <h3>All Projects</h3>
            </div>
            <div style={{maxWidth:"75%",marginLeft:"13%"}}>
              <Gallery current="all"/>
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