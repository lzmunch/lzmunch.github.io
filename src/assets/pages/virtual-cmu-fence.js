import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectTechnologies,
	ProjectLink,
	ProjectOverview,
} from './ProjectClasses';
// <a href="url" target="_blank" rel="noopener noreferrer">

const imgDir = "./virtual-cmu-fence/";
const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Virtual CMU Fence"/>
	    <ProjectSubtitle text="Automapping 2D textures to a 3D model"/>
	    <ProjectSubtitle text="(Fall 2019)"/>
	    
	    <ProjectModalImage size="large" imgPath={imgDir + "wide_fence.jpg"}/>
	    <ProjectModalImage size="large" imgPath={imgDir + "wide_model.png"}/>

	    <ProjectLink href="http://virtual-cmu-fence.herokuapp.com/#home" text="Live app"/>
	    <br/>

	    <ProjectOverview 
	 		objective="Create a tool to take 2D picture of the CMU fence as input and output a 3D textured model."
	    	contribution="Built entire web app and hosted it on Heroku, integrating work from 3D modeler and from UX designer."
	    	tech="Javascript(jQuery, Node.js, THREE.js), HTML, CSS, Heroku" />

		<p><b>Description</b></p> 
	    <p>Painting The Fence at CMU is a hallowed tradition, but it's not easy to document and record its ever-changing canvas. The goal of this project was to create a simple way to archive different versions of the fence. Just upload a front and back image of the fence, and you can view a virtual 3D model of that painted version.</p>
	    <br/>
	    <p>This was a group project for Reality Computing at Carnegie Mellon University. My role was development on the website and asset integration.</p>
	    <br/>

	    <h4>Web app view:</h4>
		<ProjectModalImage size="large" imgPath={imgDir + "webpage_view.gif"}/>

	    <ProjectLink href="https://github.com/lzmunch/virtual-cmu-fence" text="Github code"/>
	    <ProjectLink href="https://courses.ideate.cmu.edu/53-558/f2019/?cat=5" text="Process documentation"/>
	    
	    <ScrollUpButton/>
	</div>
);

export default project;