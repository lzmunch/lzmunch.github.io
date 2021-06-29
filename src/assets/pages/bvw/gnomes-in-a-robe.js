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
	    <ProjectTitle text="Gnomes in a Robe"/>
	    <ProjectSubtitle text="3-player Co-op Unity Game"/>
	    <br/>

		<ProjectOverview
			objective="Create a game in 2 weeks with a small team."
			contribution="3D environment, visual development"
			tech="Maya, Unity, Magica Voxel, Substance Painter, Photoshop"/>

	    <ProjectModalImage size="med" imgPath="./bvw/gnomes/cover_photo.png"/>
	    <br/>

	    <ProjectLink href="https://www.youtube.com/watch?v=X1Ra9lNAqCU" text="Trailer"/>
	    <br/>


	    <p>You're gnomes! One of you wants to be a wizard but you're too short to take the wizard license exam--the only solution is to stack up and throw on a robe! </p>
	    <br/>
	    <p>This game was created for the "Building Virtual Worlds" class at the ETC. The prompt was to make something for the Virtual ETC Festival, which involved hosting the game for guests in a virtual space. In the world of 2020, my team and I wanted to create something fantastical, that also encouraged communication. The game was made for AirConsole, so players use their mobile phones as controllers, allowing us to create 3 different custom controllers for each player's role.</p>
	    <br/>
	    <p>I designed and created assets for the 3D environments, created 2D UI assets, and helped design the game levels and interactions.</p>
	    <br/>

	    <p class="center-align">(Click images below to expand)</p>

		 <ProjectImageRow 
		 	imgPath1="./bvw/gnomes/environ1.png"
		 	imgPath2="./bvw/gnomes/environ2.png"
		 	imgPath3="./bvw/gnomes/environ3.png"/>
		 <ProjectCaption text="Created models and textures for the environment (except for floor)."/>
		 <br/>

		 <ProjectImageRow 
		 	imgPath1="./bvw/gnomes/festival1.png"
		 	imgPath2="./bvw/gnomes/festival2.png" />
		 <ProjectCaption text="Designed part of virtual festival space specific to this game and created pixelized versions of game models."/>
		 <ProjectLink text="Video of virtual space" href="https://drive.google.com/file/d/1AtRySks6Qpuc6HLRVOZFtUaYV-v1Gz1j/view?usp=sharing"/>
		 <br/>		 

		 <ProjectImageRow 
		 	imgPath1="./bvw/gnomes/ui1.png"
		 	imgPath2="./bvw/gnomes/ui2.png"
		 	imgPath3="./bvw/gnomes/ui3.png"
		 	imgPath4="./bvw/gnomes/ui4.png"/>
		 <ProjectCaption text="Created 2D assets and helped design UI for controllers"/>
		 <br/>

		 <ProjectImageRow 
		 	imgPath1="./bvw/gnomes/magic_circle.jfif"
		 	imgPath2="./bvw/gnomes/clock.jfif" />
		 <ProjectCaption text="Other 2D assets"/>
		 <br/>

		 <ProjectImageRow 
		 	imgPath1="./bvw/gnomes/concept_art1.jpg"
		 	imgPath2="./bvw/gnomes/concept_art2.jpg" />
		 <ProjectCaption text="Initial concept art"/>
		 <br/>

	    <br/>
    	<p class="center-align">Artists: Me, Qin Zhang</p>
    	<p class="center-align">Programmers: Wizard Hsu, Jeesub Lee</p>
    	<p class="center-align">Sound Designer: Yuji Sato</p>
	    
	    <ScrollUpButton/>
	</div>
);

export default project;