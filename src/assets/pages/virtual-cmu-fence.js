import React from 'react';
import ProjectModalImage from './ProjectModalImage';
// <a href="url" target="_blank" rel="noopener noreferrer">

const imgDir = "./virtual-cmu-fence/";
const project = () => ( 
	<div className="Project">
	    <h>Virtual CMU Fence</h>
	    <h3 style={{fontWeight:"normal"}}>Automapping 2D textures to a 3D model</h3>
	    
	    <ProjectModalImage size="large" imgPath={imgDir + "wide_fence.jpg"}/>
	    <ProjectModalImage size="large" imgPath={imgDir + "wide_model.png"}/>

	    <p>Painting The Fence at CMU is a hallowed tradition, but it's not easy to document and record its ever-changing canvas. The goal of this project was to create a simple way to archive different versions of the fence. Just upload a front and back image of the fence, and you can view a virtual 3D model of that painted version.</p>
	    <p>This was a group project for Reality Computing at Carnegie Mellon University. My role was development on the website and asset integration.</p>

	    <p>Web app view:</p>
		<ProjectModalImage size="large" imgPath={imgDir + "webpage_view.gif"}/>

	    <p>Technologies Used: Javascript(jQuery, Node.js, THREE.js), HTML, CSS, Heroku </p>
	    <p style={{textAlign:"center"}}>
	    	<a href="http://virtual-cmu-fence.herokuapp.com/#home" target="_blank" rel="noopener noreferrer">
	    		[Live app]
	    	</a>
	    </p>
	    <p style={{textAlign:"center"}}>
	    	<a href="https://github.com/lzmunch/virtual-cmu-fence" target="_blank" rel="noopener noreferrer">
	    		[Github code]
	    	</a>
	    </p>
	    <p style={{textAlign:"center"}}>
	    	<a href="https://courses.ideate.cmu.edu/53-558/f2019/?cat=5" target="_blank" rel="noopener noreferrer">
	    		[Process documentation]
	    	</a>
	    </p>	
	</div>
);

export default project;