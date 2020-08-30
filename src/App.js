import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import './App.css';
import Content from './Content.js';

class App extends Component {
	  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
        <Router>
          <div className="App">
          <Content/>
          </div>
        </Router>
    );
  }
}

export default App;