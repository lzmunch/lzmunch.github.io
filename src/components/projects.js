import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
import ReactEmbedGist from 'react-embed-gist';


class Project extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    switch(this.props.link) {
      case "huevember": 
        return (
          <div className="Project">
            <h>yeep</h>
            Hi
          </div>
        );
      case "genbook": 
        return (
          <div className="Project">
            <h>yoop</h>
            hi
          </div>
        );
    }
    return (
      <div className="Project">
        this page doesn't exist. yikes! 
      </div>
    );
  }
}

export default Project;