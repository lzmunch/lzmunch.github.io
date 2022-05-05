import React, { Component } from 'react';
import ProjectModalImage from './ProjectModalImage';

export class ProjectTitle extends Component { 
 //    constructor(props) {
 //    	super(props);
	// }
    render() { 
        return (
            <h>{this.props.text}</h>
        );
    }
}

export class ProjectSubtitle extends Component { 
 //    constructor(props) {
 //    	super(props);
	// }
    render() { 
        return (
            <h3><i>{this.props.text}</i></h3>
        );
    }
}

export class ProjectCaption extends Component { 
    // constructor(props) {
    //     super(props);
    // }
    render() { 
        return (
            <p style={{textAlign:"center"}}><i>{this.props.text}</i></p>
        );
    }
}

export class ProjectImageRow extends Component { 
    // constructor(props) {
    //     super(props);
    // }
    render() { 
        let images = [];
        // add img 1
        images.push(<div class="inline-block">
                        <ProjectModalImage size="small" imgPath={this.props.imgPath1}/>
                    </div>);
        // add img 2
        if (this.props.imgPath2){
            images.push(<div class="inline-block">
                            <ProjectModalImage size="small" imgPath={this.props.imgPath2}/>
                        </div>);
        }
        // add img 3
        if (this.props.imgPath3){
            images.push(<div class="inline-block">
                            <ProjectModalImage size="small" imgPath={this.props.imgPath3}/>
                        </div>);
        }
        // add img 4
        if (this.props.imgPath4){
            images.push(<div class="inline-block">
                            <ProjectModalImage size="small" imgPath={this.props.imgPath4}/>
                        </div>);
        }
        return (
            <div id="inline-images">
                {images}
            </div>
        );
    }
}

export class ProjectTechnologies extends Component { 
 //    constructor(props) {
 //    	super(props);
	// }
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
    // constructor(props) {
    //     super(props);
    // }
    render() { 
        return (
            <div className="ProjectOverview">
                {this.props.objective ? 
                    <div><p><b>Objective:</b> {this.props.objective}</p><br/></div> : null}
                {this.props.contribution ? 
                    <div><p><b>Contribution:</b> {this.props.contribution}</p><br/></div> : null}
                {this.props.tech ? 
                    <div><p><b>Technologies Used:</b> {this.props.tech}</p><br/></div> : null}
                {this.props.time ? 
                    <div><p><b>Time:</b> {this.props.time}</p></div> : null}
            </div>
        );
    }
}

export class ProjectLink extends Component { 
 //    constructor(props) {
 //    	super(props);
	// }
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