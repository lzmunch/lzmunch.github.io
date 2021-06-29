import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectOverview,
} from './ProjectClasses';
// <a href="url" target="_blank" rel="noopener noreferrer">

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="3D Printing Experiments"/>
	    <ProjectSubtitle text="(Spring 2019)"/>

	    <ProjectModalImage size="med" imgPath="./grasshopper/filled_lattice_y.gif"/>
	    <ProjectModalImage size="small" imgPath="./grasshopper/printed.png"/>
	    <ProjectModalImage size="small" imgPath="./grasshopper/printed2.png"/>

		<ProjectOverview
			objective="Demonstrate understanding of how to use Rhino's Grasshopper programming plugin (solo class project)."
			tech="Rhino, Grasshopper, 3D printer"
			time="3 weeks"/>

	    <p>This was a project for Intermediate Rapid Prototyping Technologies, taught in spring 2019 by David Touretzky.</p>
	    <br/>
	    <p>My overall goal with this project was to create the impression of a hand by populating the space or surface in interesting parametric ways, using the <a href="https://www.grasshopper3d.com/" target="_blank" rel="noopener noreferrer">Grasshopper</a> plugin for Rhnio's 3D modeling tools is a node-based graphical algorithm editor. It didn't work out quite as I hoped, but I was able to interpret the hand mesh in a couple slightly different ways. The original hand mesh is a free model from TurboSquid.</p>
	    <br/>
	    <p>Other attempts that did not print:</p>
	    <ProjectModalImage size="med" imgPath="./grasshopper/diag_stl_cocooned.gif"/>
	    <ProjectModalImage size="med" imgPath="./grasshopper/cross_stl.gif"/>
	    <ProjectModalImage size="med" imgPath="./grasshopper/group.png"/>
	    <br/>
	    <br/>

	    
	    <ScrollUpButton/>
	</div>
);

export default project;