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
	    <h>Ode to the Fallen Mii</h>
	    <h3 style={{fontWeight:"normal"}}>*discordant Mii Channel remix plays*</h3>

	    <ProjectModalImage size="large" imgPath="./mii/dead_mii.jpg"/>

	    <p>He wandered too far off screen...may we learn from his mistakes and lest his eternal suffering be in vain.</p>

	    <p style={{textAlign:"center"}}>
	    	<a href="#/mii" target="_blank" rel="noopener noreferrer">
	    		Back to the land of the living
	    	</a>
	    </p>

	    <ScrollUpButton/>
	</div>
);

export default project;