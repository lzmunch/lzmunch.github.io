import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here
// <a href="url" target="_blank" rel="noopener noreferrer">
/* side by side image display
	    <div style={{display:"inline-block"}}>
		    <div style={{float:"left"}}>
			    <ProjectModalImage size="small" imgPath="./ems/bert1.gif"/>
		    </div>
		    <div style={{float:"right"}}>
			    <ProjectModalImage size="small" imgPath="./ems/bert2.gif"/>
		    </div>
	    </div>
*/

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