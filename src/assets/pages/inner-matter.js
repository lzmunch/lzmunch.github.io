import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectLink,
    ProjectOverview,
    ProjectCaption,
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Inner Matter"/>
	    <ProjectSubtitle text="Exploring breathing biofeedback in VR meditation"/>
	    <ProjectSubtitle text="(2022)"/>

	    <ProjectModalImage size="large" imgPath="./inner-matter/biofeedback_success.jpg"/>
        <ProjectLink href="https://projects.etc.cmu.edu/inner-matter/" text="Project Website"/>
        <br/>
	    <ProjectOverview 
	    	contribution="Environment and Technical Artist"
	    	tech="Maya, Substance Designer and Painter, Unity Shader Graph"
	    	time="1 semester" />
	    <br/>

	    <p><b>Description:</b></p> 
	    <p>Most existing VR meditaiton apps with biofeedback use very explicit feedback like numbers or objects that react directly to your inhales/exhales. Instead, we wanted to try visualizing breathing and breathing rate more implicitly as environmental changes.</p>
	    <br/>

	    <p><b>Environment Art:</b></p> 
	    <p>I developed most of the art assets, from modeling to texturing to layout in Unity. I was going for a naturalistic setting with a semi-realistic game art style. The majority of the art was done in the texture space, as most of it was foliage and we wanted to keep the triangle count down for our VR platform.</p>
        <br/>
        <p>For my personal development, I was interested in learning Substance Designer, so I used that to create the majority of the textures. The two plant leaves were baked from high poly models and put through the same node graph to achieve a consistent look.</p>
        <ProjectModalImage size="med" imgPath="./inner-matter/biofeedback_start.jpg"/>
        <ProjectModalImage size="med" imgPath="./inner-matter/procedural_tex.jpg"/>
		 <ProjectCaption text="Procedural textures"/>

         <br/>
         <p><b>Shader Work: Biofeedback</b></p> 
         <p>The environment is designed to slide between two states based on live breathing data: the more saturated and bright elements become, the more "successful" you are at your meditation.</p>
        <ProjectModalImage size="med" imgPath="./inner-matter/global_color_change.gif"/>
        <ProjectCaption text="Subtle color changes"/>

        <br/>
        <p>This is accomplished through a custom shader that allowed me to art direct the "start" and "success" colors. The shader is linked to a programmer function that gives me a value between 0 and 1, to translate into a color change. I built in a debug option so I could visualize changes without needing to actually hook up to our biofeedback system.</p>
        <ProjectModalImage size="med" imgPath="./inner-matter/shader_graph.jpg"/>        
        <ProjectModalImage size="med" imgPath="./inner-matter/lotus_demo_3.gif"/>

        <br/>
         <p><b>Shader Work: Other</b></p>
         <p>The other shader work I did was the water, which I felt was important to get right since it took up so much of the user's view.</p>
         <br/>
         <p>Assuming we couldn't have anything too fancy, the basic look of the water relies on the flowing texture on it, rather than vertex shader movement. Later on I added foam and refraction, but in the final build, it interfered with too many other parts of the app, and left it out.</p>

         <ProjectModalImage size="med" imgPath="./inner-matter/water_v1.gif"/>        
        <ProjectModalImage size="med" imgPath="./inner-matter/water_refraction.gif"/>

	    <ScrollUpButton/>
	</div>
);

export default project;