import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectOverview,
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="3D Shadow Puppets"/>
	    <ProjectSubtitle text="Experimental animation"/>
	    <ProjectSubtitle text="(Spring 2019)"/>

	    <ProjectModalImage size="large" imgPath="./3d-shadow-anim/final_video_gif.gif"/>

	    <ProjectOverview
	    	objective='Create an experimental "puppeteering" animation with a team of 3 in 4 weeks.'
	    	contribution="Created tool to convert edge detection data into 3D animated mesh, for artist to use in creating the final piece."
	    	tech="Unity, C#, bash"/>

	    <p><b>Details</b></p> 
	    <p>This is a group project with <a href="https://www.instagram.com/huwmessie/" target="_blank" rel="noopener noreferrer">Huw Messie</a> and <a href="https://juliepetrusak.wordpress.com/about/" target="_blank" rel="noopener noreferrer">Julie Petrusak</a> for the class Experimental Animation, taught by Jessica Hodgins and James Duesing in Spring 2019. Our group's idea was to take the 2D outline of a silhouette created by a shadow hand puppet and somehow turn it into a 3D object. The movement of a hand woud puppet a shadow, which would in turn puppet a 3D object.</p>
	    <br/>
	    <p>It uses Processing for edge detection and Unity to translate points into 3D space, generate meshes, and animate camera movements. I contributed to converting the data and generating the meshes in Unity, using some bash scripts for data processing.</p>
	    <br/>
		<p style={{textAlign:"center"}}><a href="https://vimeo.com/450247248">[Full video]</a></p>
	    <iframe src="https://player.vimeo.com/video/450247248" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
	</div>
);

export default project;