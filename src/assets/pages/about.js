import React from 'react';
import {resumeLink} from './index';
// import aboutImage from "../about.jpg";

const project = () => (
	<div className="Project">
	  <img src={require("../about.jpg")} alt="me" style={{maxHeight:"300px"}}/>
	  <h2>Software Developer + Creative</h2>
	  <h3><a href={resumeLink} target="_blank" rel="noopener noreferrer">[Resume]</a></h3>
	  <br/>

	  <p>Hi! I am technologist and creative working in technical art/direction and pipeline engineering. I enjoy coding and solving technical problems but what really excites me about a project is being able to interact with the creative process. As an artist myself, I love being able to talk to other creative people..Currently I want to specialize more in artist tools, but I have a special love for look development and lighting, so I may try to branch out to there in the long term.</p>
	  <br/>
	  <p>I have a Masters of Entetainment Technology and B.S. in Computer Science from Carnegie Mellon University. I've been a web developer and 3D art generalist as well, but I find my niche closer to a 50-50 balance between tech and art.</p>
	  <br/>
	  <p>Outside of "work" I like to make a variety of 2D art, mostly doodling and worldbuilding, often for the purpose of DnD. Sometimes I write poetry too. I really like children's media, and anything that is weird and funny--things that challenge you, but have a sense of humor and playfulness about it.</p>
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