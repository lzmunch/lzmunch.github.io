import React from 'react';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import ProjectModalImage from './ProjectModalImage'
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectTechnologies,
	ProjectOverview,
	ProjectCaption,
	ProjectLink,
	ProjectImageRow
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Tools"/>
	    <br/>
	    
	    <p>Small tools and scripts for commandline, Python, Javascript, Unity, Maya, etc. that I've written to help facilitate my work.</p>

	    <ScrollUpButton/>
	</div>
);

export default project;