import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
// import ModalImage from 'react-modal-image';
import ProjectModalImage from './ProjectModalImage'

const project = () => ( 
	<div className="Project">
	    <h>Mii Simulator</h>

	     <ProjectModalImage size="med" imgPath="./mii/mii.png"/>

	    <p>You're a Mii (from the <a href="https://nintendo.fandom.com/wiki/Mii_Channel">Nintendo Wii Mii Channel</a>)! Confront your existence.
	    Game available on <a href="https://lzmunch.itch.io/mii-simulator">itch.io</a> </p>

	    <p>Technologies Used: Unity, Blendr</p>

	    <p>Displayed at <a href="https://www.instagram.com/theframegallerycmu/">The Frame Gallery</a> at CMU with xX_CutePixel_Xx (below)</p>
	    <InstagramEmbed
		   url='https://www.instagram.com/p/B8TM6OOn21t/?utm_source=ig_web_copy_link'
		   maxWidth={600}
		   hideCaption={true}
		   containerTagName='div'
		   protocol=''
		   injectScript
		   onLoading={() => {}}
		   onSuccess={() => {}}
		   onAfterRender={() => {}}
		   onFailure={() => {}}/>

	    <p style={{textAlign:"center"}}>Dev views</p>
	    <ProjectModalImage size="smallish" imgPath="./mii/dev_view.jpg"/>
	    <ProjectModalImage size="smallish" imgPath="./mii/many_mii.jpg"/>
	</div>
);

export default project;