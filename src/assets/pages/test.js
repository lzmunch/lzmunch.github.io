import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectTechnologies,
	ProjectLink,
} from './ProjectClasses';
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
	    <ProjectTitle text="Ode to the Fallen Mii"/>
	    <ProjectSubtitle text="*discodant music plays*"/>
	    <ProjectSubtitle text="(2020)"/>

	    <ProjectModalImage size="large" imgPath="./mii/dead_mii.jpg"/>

	    <ProjectLink href="https://www.youtube.com/watch?v=6PkcuSbW1vU" text="a mysterious link"/>
	    <br/>

	    <ProjectTechnologies text="pumkin, hot chip, sneeple" />

	    <p><b>Description:</b></p> 
	    <p>He wandered too far off screen...may we learn from his mistakes and lest his eternal suffering be in vain.</p>
	    <br/>

	    <p><b>Process</b></p> 
	    <p>I needed a template.</p>
	    <br/>

	    <ProjectLink href="#/mii" text="Back to the land of the living"/>

	    <ScrollUpButton/>
	</div>
);

export default project;