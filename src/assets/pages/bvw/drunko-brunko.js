import React from 'react';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import ProjectModalImage from '../ProjectModalImage'
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectTechnologies,
	ProjectOverview,
	ProjectCaption,
	ProjectLink,
	ProjectImageRow
} from '../ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Drunko Brunko"/>
	    <ProjectSubtitle text="2-player Co-op Unity Game"/>
	    <br/>

		<ProjectOverview
			objective="Create a game in 1 week with a small team"
			contribution="3D environment, 3D characters, visual development"
			tech="Maya, Unity, Photoshop"/>

	    <ProjectModalImage size="med" imgPath="./bvw/drunko-brunko/drunko-brunko-title.jpg"/>
	    <ProjectCaption text="Cover photo"/>
	    <br/>

	    <ProjectLink href="https://www.youtube.com/watch?v=ku2D9Vg3E_U" text="Trailer"/>
	    <ProjectLink href="https://www.youtube.com/watch?v=rW8h9rkSxtc" text="Playthrough"/>
	    <br/>


	    <p>This game was created for the "Building Virtual Worlds" class at the ETC. The prompt was to "make something fun," so we decided to make a game about being in a horse costume at a Halloween costume. Using the AirConsole platform, players use their mobile phones as controls, and need to work together to navigate the party room to get to their Ubeer (not Uber) driver!</p>
	    <br/>
	    <p>I drove the general visual style of the game, created all the 3D environment (models, color palette, lighting, 2D art), some 3D rigged characters, and some 2D art assets, including our cover photo. </p>

		 <ProjectImageRow 
		 	imgPath1="./bvw/drunko-brunko/game_env_1.jpg"
		 	imgPath2="./bvw/drunko-brunko/game_env_2.jpg"
		 	imgPath3="./bvw/drunko-brunko/game_env_3.jpg"/>
		 <ProjectCaption text="Environment development"/>
		 <br/>

	    <ProjectModalImage size="med" imgPath="./bvw/drunko-brunko/person_anim.gif"/>
	    <ProjectCaption text='Modeled, rigged, and animated character model based on concept art from other artist.'/>
	    <br/>

	    <ProjectLink href="https://vimeo.com/464015219" text="See demo reel for rendered animations" />
	    <br/>
    	<p class="center-align">Artists: Me, Sophia Videva</p>
    	<p class="center-align">Programmers: Martin Ke, Zi Wang</p>
    	<p class="center-align">Sound Designer: Liang-Yen (Leo) Chou</p>
	    
	    <ScrollUpButton/>
	</div>
);

export default project;