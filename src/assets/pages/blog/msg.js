import React from 'react';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
// import ProjectModalImage from '../ProjectModalImage'
import {
	ProjectTitle,
	// ProjectSubtitle,
	// ProjectTechnologies,
	ProjectOverview,
	// ProjectCaption,
	// ProjectLink,
	// ProjectImageRow
} from '../ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Madison Square Garden Entertainment Internship"/>
	    <br/>

		<ProjectOverview
			objective="In two months, create a prototype of a proxy web service for a new feature for AWS Training and Certification products and present a demo."
			contribution="High-level architecture, implementation, basic unit testing"
			tech="Typescript, AWS AppSync, AGILE Development, Continuous Deployment Pipelines"/>
	    
	    <p>Until this internship, I had mainly worked on small projects where I was the only or main developer, so it took some adjustment to learn to be patient and thoroughly test my code and get it reviewed before commiting it to the main code base. I also struggled to let myself rely more on asking questions directly, because most of the technology and libraries I was working with were proprietary or not very popular among open source developers.</p>
	    <p>My work consisted of making a diagram of the high-level architecture and a design document (with help from my mentor) and getting that reviewed, before beginning the actual implementation, which involved communication with the product manager and an intern from another team. I ended up having to make edits to other areas of the codebase so my project could be properly hooked in as well.</p>
	    <p>Overall, I learned a lot about development in a large company.</p>

	    <ScrollUpButton/>
	</div>
);

export default project;