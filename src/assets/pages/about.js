import React from 'react';
import aboutImage from "../images/about.jpeg";

const project = () => ( 
	<div className="Project">
	  <h>Software Developer + Creative</h>
	  <p>Hi! I'm an integrated master's student at the Carnegie Mellon University, studying computer science and entertainment technology. I'm interested in using technology to enable accessible and interactive entertainment.</p>
	  <p>You can find me on social media as @lzmunch</p>
	  <a href="https://instagram.com/lz_munch">Instagram</a><br></br>
	  <a href="https://twitter.com/lzmunch">Twitter</a><br></br>
	  <a href="https://github.com/lzmunch">Github</a><br></br>
	  <br></br>
	  <img src={aboutImage} alt="me"/>
	</div>
);

export default project;