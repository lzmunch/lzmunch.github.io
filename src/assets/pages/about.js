import React from 'react';
import {resumeLink} from './index';
// import aboutImage from "../about.jpg";

const project = () => ( 
	<div className="Project">
	  <img src={require("../about.jpg")} alt="me" style={{maxHeight:"300px"}}/>
	  <h2>Software Developer + Creative</h2>
	  <h3><a href={resumeLink} target="_blank" rel="noopener noreferrer">[Resume]</a></h3>
	  <p style={{textAlign:"center"}}>WIP migration from <a href="https://zhauren.wixsite.com/home">https://zhauren.wixsite.com/home</a></p>
	  <br/>

	  <p>Hi! I'm an master's student at the Carnegie Mellon University Entertainment Technology Center, and an aspiring technical director/artist. My undergrad is in Computer Science at CMU. Much of my experience previous has been in creative technology and web development, but I'm hoping to explore some new areas. My current interests include technical direction, internet art, and physical spaces (especially themed entertainment).</p>
	  <br/>
	  <p>Outside of "work" I like to make a variety of 2D art, mostly doodling and worldbuilding. Sometimes I write poetry too. I really like children's media, and anything that is weird and funny--things that challenge you, but have a sense of humor and playfulness about it.</p>
	  <br/>
	  <p>I created this website by refactoring and building out a template website with React. The Github repo can be found <a href="https://github.com/lzmunch/lzmunch.github.io" target="_blank" rel="noopener noreferrer">here</a>.</p>
	  <br/>
	  <a href="https://linkedin.com/in/lauzhang" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
  	  <a href="https://github.com/lzmunch" target="_blank" rel="noopener noreferrer">Github</a><br/>
	  <a href="https://instagram.com/lz_munch" target="_blank" rel="noopener noreferrer">Instagram - @lz_munch</a><br/>
	  <a href="https://twitter.com/lzmunch" target="_blank" rel="noopener noreferrer">Twitter - @lzmunch</a><br/>
	</div>
);

export default project;