import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import ProjectModalImage from './ProjectModalImage'
import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectTechnologies,
} from './ProjectClasses';

const project = () => ( 
	<div className="Project">
	    <ProjectTitle text="Air Quality Data Visualization"/>
	    <ProjectSubtitle text="CMU CREATE Lab Internship"/>
	    <ProjectSubtitle text="(Summer 2019)"/>

	    <ProjectModalImage size="large" imgPath="./create-lab/sensors_smell_reports.gif"/>

	    <p style={{textAlign:"center",fontWeight:"bold"}}><a href="https://earthtime.org/explore#v=40.38807,-79.96699,9.83,latLng&t=29.79&ps=50&l=bdrk,smell_my_city_pgh_reports,smell_my_city_pgh_wind&bt=201904010000&et=201904100000&startDwell=0&endDwell=0" target="_blank"> 
	    	[ LIVE VERSION ]</a> 
	    </p>
	    <br/>

	    <ProjectTechnologies text="Javascript, JQuery, CSS, HTML, Python Flask, WebGL, Ruby"/>

	    <p><b>Description</b></p> 
	    <p>In summer 2019 I interned at the Community Robotics, Education and Technology Empowerment Lab (<a href="https://cmucreatelab.org/home">CREATE Lab</a>). I designed and created air pollution visualizations, based on smell reports from the <a href="https://smellpgh.org/">Smell PGH app</a> and sensor data, as part of the CREATE lab's <a href="https://earthtime.org/explore">Earthtime data visualization library</a>.</p>
	    <br/>
	    <p>In addition to creating new visualizations for air quality, I added a date selection feature that can be used by any future visualizations created.</p>
	    <ProjectModalImage size="large" imgPath="./create-lab/date_demo.gif"/>

	    <p style={{textAlign:"center"}}><a href="https://zhauren.wixsite.com/home/post/internship-with-cmu-create-lab"> More documentation </a></p>
	    
	    <ScrollUpButton/>
	</div>
);

export default project;