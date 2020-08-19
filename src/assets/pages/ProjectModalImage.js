import React, { Component } from 'react';
import ModalImage from 'react-modal-image'

class ProjectModalImage extends Component { 
    constructor(props) {
    	super(props);
	}
    render() { 
        return (
    		<ModalImage 
                className={this.props.size+"Img"}
                small={require("" + this.props.imgPath)} 
                large={require("" + this.props.imgPath)}
                hideDownload="true" 
                hideZoom="true"/>
        );
    }
}

export default ProjectModalImage;