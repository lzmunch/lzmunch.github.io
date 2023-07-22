import React from 'react';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectLink,
    ProjectOverview,
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Time Passes in the Blink of an Eye"/>
	    <ProjectSubtitle text="Animated Short"/>
	    <ProjectSubtitle text="(Spring 2022)"/>
	    <br/>

        <ProjectOverview 
	    	contribution="Pipeline/Artist Tools, Lookdev, Lighting, Compositing"
	    	tech="Maya, Arnold, Substance Designer and Painter, Premier Pro"
	    	time="3 months" />
	    <br/>

        <p>Final project for Advanced Pipeline Topics in Film and Game Art, taught by Mo Mahler at Carnegie Mellon University.</p>

	    <br/>

	    <iframe title="time-passes" src="https://player.vimeo.com/video/708394728" frameborder="0" width="640" height="360" allow="autoplay; fullscreen" allowfullscreen></iframe>

        <br/>
        <br/>
        <b><p>Process</p></b>

        <ProjectLink href="https://lzmunch.github.io/#/maya-line-tool" text="Tool Documentation"/>

        <br/>

        <iframe title="documentation" src="https://player.vimeo.com/video/707990986" frameborder="0" width="640" height="360" allow="autoplay; fullscreen" allowfullscreen></iframe>

	    <ScrollUpButton/>
	</div>
);

export default project;