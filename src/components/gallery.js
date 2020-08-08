import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import Project from './projects.js';

const thumbnailsPath = "../assets/thumbnails/"

class Gallery extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      categories: { "code" : ["comic"],
                    "art" : ["comic"]
                    "all" : ["huevember"],
                    "" : []
                  },
    };
  }
  render() {

    return (
        
        <div className="Gallery">
          <Box link="pup" filetype=".png"  desc="Pixar PUP" filter={this.state.categories[this.props.current]}/> 
        </div>           
    );
  }

}

class Box extends Component { 
    render() { 
      if(this.props.filter.includes(this.props.link))
        return (
            <Link to={"/" + this.props.link} className="Box">
                <div className="Overlay"> {this.props.desc} </div>
                <img src={require(thumbnailsPath + this.props.link + this.props.filetype)}/> 
            </Link>
        ); 
      else return (<div id="nothing"></div> ); 
    }
}
export default Gallery;