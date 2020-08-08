import React, { Component } from 'react';
import '../App.css';
import logo from '../assets/logo.svg';
// import Sidebar from './components/sidebar'
// import Introduction from './components/introduction'
// import About from './components/about'
// import Projects from './components/projects'
// import Blog from './components/blog'
// import Timeline from './components/timeline'

class Header extends Component {
  //<img src={logo} className="App-logo" alt="bogo my logo" />
  render() {
    return (
      <div className="App-header">
        <img src={logo} alt="site logo"/>
        <h1>LAUREN ZHANG</h1>
        <h4>Computer Scientist + Creative Maker</h4>
        <p>Website under construction.</p>
        <p><a
          className="App-link"
          href="https://zhauren.wixsite.com/home"
          target="_blank"
          rel="noopener noreferrer">
          &nbsp;&nbsp;Current Website&nbsp;&nbsp;
        </a></p>
        <p><a
          className="App-link"
          href="https://drive.google.com/open?id=1uJ9u-u3Zsa5ZMIZQzkkfA5Mp3FBuHuG2"
          target="_blank"
          rel="noopener noreferrer">&nbsp;&nbsp;Resume&nbsp;&nbsp;
        </a></p>
      </div>
    );
  }
}

export default Header;