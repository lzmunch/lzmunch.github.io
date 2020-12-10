import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import { Route } from "react-router-dom";
import {
	ProjectOverview,
} from './ProjectClasses';
// <a href="url" target="_blank" rel="noopener noreferrer">

// ignore this page, link redirects directly to project page

const project = () => ( 
	<div className="Project">
	    <h>Accessible Digital Imaging Platform</h>
	    <h3 style={{fontWeight:"normal"}}>Research project at Carnegie Mellon University (2019)</h3>

	    <ProjectModalImage size="large" imgPath="./imaging-research/beaglebone.jpg"/>

	    <ProjectOverview 
	 		objective="Work with a professor to develop an iteration of an accessible imaging platform for people with limited technical  and academic knowledge."
	    	contribution="Explored the potential capabilities of the platform by implementing and testing of various image processing algorithms in different conditions."
	    	tech="Python Jupyter Notebook, Python Matlab library"
	    	time="1 semester" />

	    <h6>Details</h6>
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