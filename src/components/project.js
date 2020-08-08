import React, { Component } from 'react';
import '../App.css';
// import Sidebar from './components/sidebar'
// import Introduction from './components/introduction'
// import About from './components/about'
// import Projects from './components/projects'
// import Blog from './components/blog'
// import Timeline from './components/timeline'

class Project extends Component {
  constructor(props){
    super(props);
    this.projectName = props.projectName || "A good project";
    this.projectId = "";
    this.tagline = "";
    this.descrip = "";
    this.imgSrc = "";
    this.projectLink = "";
    // this.technologies = props.technologies;
  }
  
  render() {
    return (
      <div className="project-module">
        <img src={this.props.pic} className="project-img" alt="cruunchy" />
        <h3>{this.projectName}</h3>
        <a
          className="App-link"
          href={this.props.projectLink}
          target="_blank"
          rel="noopener noreferrer">
          &nbsp;&nbsp;{this.props.projectLink}&nbsp;&nbsp;
        </a>
        <p><b>Technologies used:</b> {this.props.technologies}</p>
        <p><b>Description:</b> {this.props.descrip}</p>
      </div>
    );
  }
}

export default Project;