import React, { Component } from 'react';

export class ProjectTitle extends Component { 
    constructor(props) {
    	super(props);
	}
    render() { 
        return (
            <h>{this.props.text}</h>
        );
    }
}

export class ProjectSubtitle extends Component { 
    constructor(props) {
    	super(props);
	}
    render() { 
        return (
            <h3><i>{this.props.text}</i></h3>
        );
    }
}

export class ProjectTechnologies extends Component { 
    constructor(props) {
    	super(props);
	}
    render() { 
        return (
        	<div className="ProjectTechnologies">
				<p><b>Technologies Used:</b> {this.props.text}</p>
	            <br/>
            </div>
        );
    }
}

export class ProjectLink extends Component { 
    constructor(props) {
    	super(props);
	}
    render() { 
        return (
		    <p style={{textAlign:"center"}}>
		    	<a href={this.props.href} target="_blank" rel="noopener noreferrer">
		    		[{this.props.text}]
		    	</a>
		    </p>
        );
    }
}