import React, { Component } from 'react';
import ModalImage from 'react-modal-image'

class ProjectModalImage extends Component { 
    constructor(props) {
    	super(props);
	}
    componentDidMount() {
        // remove loading text
        var element = document.getElementById("loading-text");
        element.parentNode.removeChild(element);      
    }
    render() { 
        return (
            <div>
                <p id="loading-text">loading...</p>
        		<ModalImage 
                    className={this.props.size+"Img"}
                    small={require("" + this.props.imgPath)} 
                    large={require("" + this.props.imgPath)}
                    hideDownload="true" 
                    hideZoom="true"/>
            </div>
        );
    }
}

export default ProjectModalImage;