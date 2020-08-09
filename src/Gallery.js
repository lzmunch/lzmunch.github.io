import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import Project from './Project.js';

const thumbnailsPath = "./assets/thumbnails/"

class Gallery extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      categories: { "code" : ["test"],
                    "fun" : ["mii"],
                    "art" : ["mii", "test2"],
                    "all" : ["mii","test","test2"],
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
        </div>           
    );
  }
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