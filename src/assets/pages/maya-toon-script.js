import React from 'react';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
// import ProjectModalImage from './ProjectModalImage'
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectLink,
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Maya Toon Line Tool"/>
	    <ProjectSubtitle text="Maya script for creating art directable toon line meshes"/>
	    <ProjectSubtitle text="(Spring 2022)"/>

	    <br/>

	    <iframe title="video-1" src="https://player.vimeo.com/video/699625309" frameborder="0" width="640" height="360" allow="autoplay; fullscreen" allowfullscreen></iframe>
		
		<ProjectLink href="https://vimeo.com/699625309" text="Vimeo Link"/>
	    <ProjectLink href="https://github.com/lzmunch/maya-toon-line-object" text="Github Repo"/>
		<ProjectLink href="https://docs.google.com/document/d/e/2PACX-1vS_-seKmE6Mx8-gGm8ISvir7BJCeAuBMYgCS4cNQuiSBelVM5hAN1R-hfX2vv-FB0X1xOg6TG6vi_V2/pub" text="Documentation"/>

		<iframe title="g-docs" class="doc-iframe" src="https://docs.google.com/document/d/e/2PACX-1vS_-seKmE6Mx8-gGm8ISvir7BJCeAuBMYgCS4cNQuiSBelVM5hAN1R-hfX2vv-FB0X1xOg6TG6vi_V2/pub?embedded=true"></iframe>

	    <ScrollUpButton/>
	</div>
);

export default project;