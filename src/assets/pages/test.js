import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here
// <a href="url" target="_blank" rel="noopener noreferrer">

const project = () => ( 
	<div className="Project">
	    <h>Test Project</h>
	    <h3 style={{fontWeight:"normal"}}>sneep sneep</h3>

	    <ProjectModalImage size="large" imgPath="./mii/dead_mii.jpg"/>

	    <p> A very very informative line of text.</p>

	    <p style={{textAlign:"center"}}>
	    	<a href="#" target="_blank" rel="noopener noreferrer">
	    		A Fun Link
	    	</a>
	    </p>

	    <ScrollUpButton/>
	</div>
);

export default project;