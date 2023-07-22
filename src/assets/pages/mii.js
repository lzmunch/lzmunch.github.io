import React from 'react';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import ProjectModalImage from './ProjectModalImage';
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectTechnologies,
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Mii Simulator"/>
	    <ProjectSubtitle text="Unity game"/>
	    <ProjectSubtitle text="(Spring 2020)"/>

	     <ProjectModalImage size="med" imgPath="./mii/mii.png"/>

	    <ProjectTechnologies text="Unity, Blender, Photoshop"/>

		<p><b>Description</b></p> 
	    <p>You're a Mii (from the <a href="https://nintendo.fandom.com/wiki/Mii_Channel">Nintendo Wii Mii Channel</a>)! Confront your existence. A Unity game where you walk around as a Mii. Game available on <a href="https://lzmunch.itch.io/mii-simulator">itch.io</a> </p>
	    <br/>
	    <p>Set up to work with Wii controllers and displayed at <a href="https://www.instagram.com/theframegallerycmu/">The Frame Gallery</a> at CMU with the xX_CutePixel_Xx show</p>
	    <br/>

	    <iframe title="video-1" src="https://player.vimeo.com/video/847484116" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

		<p><b>Process</b></p> 
	    <p>I discovered my old Wii controllers at home and I was interested in creating an interaction centered around it, and the nostalgia of the Wii. For the show, I wanted to use a projector for more immersion, and the humor of seeing the Mii models so large.</p>
	    <br/>
	    <p>The Mii models are differently textured versions of a free Mii model I found online. The other textures were modified from screenshots on the internet.</p>
	    <br/>
	    <p>Below are some dev views, as I was playing around with the game entry and Mii npc pathfinding.</p>
	    <ProjectModalImage size="smallish" imgPath="./mii/dev_view.jpg"/>
	    <ProjectModalImage size="smallish" imgPath="./mii/many_mii.jpg"/>
	    
	    <ScrollUpButton/>
	</div>
);

export default project;