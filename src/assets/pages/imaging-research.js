import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import { Route } from "react-router-dom";
// <a href="url" target="_blank" rel="noopener noreferrer">

// ignore this page, link redirects directly to project page

const project = () => ( 
	<div className="Project">
	    <h>Accessible Digital Imaging Platform</h>
	    <h3 style={{fontWeight:"normal"}}>Research project at Carnegie Mellon University</h3>

	    <ProjectModalImage size="large" imgPath="./imaging-research/beaglebone.jpg"/>

	    <p>In Spring 2020, I worked on a research project creating an experimental platform and API for computational imaging, with intended usage for education and creative making. There has been limited research in this field, especially using new technologies like cheap portable cameras, projectors, and computers. My mentor was <a href="https://www.ri.cmu.edu/ri-faculty/matthew-otoole/" target="_blank" rel="noopener noreferrer">Professor Matthew O'Toole</a>.
	    </p>

	    <p style={{textAlign:"center"}}>
	    	<a href="https://lzmunch.github.io/beaglebone-imaging/" target="_blank" rel="noopener noreferrer">
	    		[Project Page] 
	    	</a>
	    </p>
	</div>
);

export default project;