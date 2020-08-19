export {default as TestPage} from './test';
export {default as Test2Page} from './test2';
export {default as MiiPage} from './mii';
export {default as AboutPage} from './about';
export {default as CreateLabPage} from './create-lab';

export const galleryCategories = { 
	"code" : ["mii", "create-lab", "map-voices", "beaglebone"],
    "fun" : ["test"],
    "art" : ["mii", "test2"],
    "home" : ["mii","test","test2", "create-lab", "beaglebone", "map-voices"],
    "" : []
};

// for adding gallery boxes and linking project pages
// used in Content.js and Gallery.js
export const projectInfos = [
	{
		link: "beaglebone",
		filetype: ".jpg",
		desc: "Accessible Imaging Research"
	},
	{
		link: "mii",
		filetype: ".png",
		desc: "Mii Simulator"
	},
	{
		link: "map-voices",
		filetype: ".png",
		desc: "Map Voices"
	},
	{
		link: "create-lab",
		filetype: ".png",
		desc: "CMU Create Lab"
	},
	{
		link: "test",
		filetype: ".jpg",
		desc: "Test"
	},
	{
		link: "test2",
		filetype: ".jpg",
		desc: "Test 2"
	},
];