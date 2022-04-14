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
	    <ProjectTitle text="Maya Toon Line Tool"/>
	    <ProjectSubtitle text="Maya script for creating art directable toon line meshes"/>
	    <ProjectSubtitle text="(Spring 2022)"/>

	    <br/>

	    <ProjectLink href="https://github.com/lzmunch/maya-toon-line-object" text="Github Repo"/>

	    <iframe src="https://player.vimeo.com/video/699625309" frameborder="0" width="640" height="360" allow="autoplay; fullscreen" allowfullscreen></iframe>
	    <p style={{textAlign:"center"}}>
	    	<a href="https://vimeo.com/699625309">Vimeo Link</a>
	    </p>

	    <ScrollUpButton/>
	</div>
);

export default project;