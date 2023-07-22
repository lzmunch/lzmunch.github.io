import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectTechnologies,
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	   	<ProjectTitle text="Voices of Belfast"/>
	    <ProjectSubtitle text="Geospatial Sound Map built in Unity"/>
	    <ProjectSubtitle text="(Spring 2018)"/>

	    <iframe title="voices-of-belfast" src="https://player.vimeo.com/video/452956970" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
	    <p style={{textAlign:"center"}}>
	    	<a href="https://vimeo.com/452956970">Vimeo Link</a>
	    </p>

	    <ProjectTechnologies text="Unity"/>

	    <p>For Carnegie Mellon University's "Art, Technology, and Conflict in Northern Ireland" class in Spring 2018, I was interested in creating a map with a more game-like interaction for more immersion. It turned out to be a very good way to express the way I felt when first confronting the plethora of opinions and perspectives explored in the class. The sounds are found audio from the internet and recorded audio from the class trip to Belfast.</p>
	    <p style={{textAlign:"center"}}>
	    	<a href="https://lzmunch.itch.io/voices-of-belfast" target="_blank" rel="noopener noreferrer">
	    		[Game download]
	    	</a>
	    </p>
	    <p style={{textAlign:"center"}}>
	    	<a href="https://github.com/lzhang17/voices_of_belfast" target="_blank" rel="noopener noreferrer">
	    		[Github code]
	    	</a>
	    </p>
	    <br/>

	    <h3 style={{fontWeight:"normal"}}>Screenshots</h3>
	    <ProjectModalImage size="large" imgPath="./voices-of-belfast/title-screen.jpg"/>
	    <ProjectModalImage size="large" imgPath="./voices-of-belfast/screenshot.jpg"/>
	    
	    <ScrollUpButton/>
	</div>
);

export default project;