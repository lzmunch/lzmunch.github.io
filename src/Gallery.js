import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import Project from './Project.js';

const thumbnailsPath = "./assets/thumbnails/"

class Gallery extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      categories: { "code" : ["mii", "create-lab"],
                    "fun" : ["test"],
                    "art" : ["mii", "test2"],
                    "home" : ["mii","test","test2", "create-lab"],
                    "" : []
                  },
    };
  }
  render() {
    console.log("gallery",this.state);
    return (
        <div className="Gallery">
          <Box link="mii" filetype=".png"  desc="Mii Simulator" filter={this.state.categories[this.props.current]}/> 
          <Box link="test" filetype=".jpg"  desc="Test" filter={this.state.categories[this.props.current]}/> 
          <Box link="test2" filetype=".jpg"  desc="Test 2" filter={this.state.categories[this.props.current]}/> 
          <GalleryBox scope={this} link="create-lab" filetype=".png" desc="CMU Create Lab" />
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