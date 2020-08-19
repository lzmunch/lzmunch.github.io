import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import Project from './Project.js';
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
    console.log("gallery",this.state);
    let boxes = getGalleryBoxes(this);
    console.log("boxes", boxes);
    return (
        <div className="Gallery">
          { boxes }
        </div>           
    );
  }
}

function GalleryBox(props) {
    let that = props.scope;
    return (
      <Box link={props.link} filetype={props.filetype}  desc={props.desc} filter={that.state.categories[that.props.current]}/> 
    );
}

function getGalleryBoxes(scope) {
  let items = [];
  for (let gb of projectInfos){
    items.push(<Box 
      link={gb.link} 
      filetype={gb.filetype}  
      desc={gb.desc}
      filter={scope.state.categories[scope.props.current]}/> );
  }
  return items;
}

class Box extends Component { 
    render() { 
      if(this.props.filter.includes(this.props.link)){
        console.log(this.props.link)
        return (
            <Link to={"/" + this.props.link} className="Box">
                <div className="Overlay"> {this.props.desc} </div>
                <img src={require("" + thumbnailsPath + this.props.link + this.props.filetype)}/> 
            </Link>
        ); 
      }
      else return (<div id="nothing"></div> ); 
    }
}
export default Gallery;