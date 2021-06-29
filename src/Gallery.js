import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import { galleryCategories, projectInfos } from './assets/pages/index'

const thumbnailsPath = "./assets/thumbnails/"

class Gallery extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      categories: galleryCategories
    };
  }
  render() {
    let boxes = getGalleryBoxes(this);
    return (
        <div className="Gallery">
          { boxes }
        </div>           
    );
  }
}

// read in gallery information from asets/pages/index.js
function getGalleryBoxes(scope) {
  let items = [];
  for (let gb of projectInfos){
    let filter = scope.state.categories[scope.props.current];
    // gallery box redirects to external link
    if (gb.redirect && filter.includes(gb.link)){
      items.push(
        <a href={gb.redirect} target="_blank" rel="noopener noreferrer" className="Box">
          <div className="CaptionOverlay"> {gb.desc} </div>
          <img src={require("" + thumbnailsPath + gb.link + gb.filetype)} alt={"thumbnail for " + gb.desc}/> 
        </a>
      );
    // gallery box goes to project page
    } else {
      items.push(<Box 
        link={gb.link} 
        filetype={gb.filetype}  
        desc={gb.desc}
        filter={filter}/> );
    }
  }
  return items;
}

class Box extends Component { 
    render() { 
      if(this.props.filter.includes(this.props.link)){
        return (
            <Link to={"/" + this.props.link} className="Box">
                <div className="CaptionOverlay"> {this.props.desc} </div>
                <img src={require("" + thumbnailsPath + this.props.link + this.props.filetype)} alt={"thumbnail for " + this.props.desc}/> 
            </Link>
        ); 
      }
      else return (<div id="nothing"></div> ); 
    }
}
export default Gallery;