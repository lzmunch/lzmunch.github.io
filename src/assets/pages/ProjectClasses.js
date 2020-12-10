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

export class ProjectOverview extends Component { 
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="ProjectOverview">
                <p><b>Objective:</b> {this.props.objective}</p>
                <br/>
                {this.props.contribution ? 
                    <div><p><b>Contribution:</b> {this.props.contribution}</p><br/></div> : null}
                <p><b>Technologies Used:</b> {this.props.tech}</p>
                <br/>
                {this.props.time ? 
                    <div><p><b>Time:</b> {this.props.time}</p><br/></div> : null}
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