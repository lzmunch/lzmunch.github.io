import React from 'react';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
// import ProjectModalImage from '../ProjectModalImage'
import {
	ProjectTitle,
	ProjectSubtitle,
	// ProjectTechnologies,
	// ProjectOverview,
	// ProjectCaption,
	// ProjectLink,
	// ProjectImageRow
} from '../ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Archive Dive (ETC Project)"/>
	    <ProjectSubtitle text="subtitle here"/>
	    <ProjectSubtitle text="(Spring 2021)"/>
	    <br/>
	    
	    <p>description</p>

	    <ScrollUpButton/>
	</div>
);

export default project;