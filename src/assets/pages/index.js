// export {default as MiiPage} from './mii';

export const galleryCategories = { 
	"code" : ["mii", "create-lab", "map-voices", "imaging-research"],
    "fun" : ["test"],
    "art" : ["mii"],
    "home" : ["mii", "create-lab", "imaging-research", "map-voices"],
    "" : []
};

// for adding gallery boxes and linking project pages
// used in Content.js and Gallery.js
export const projectInfos = [
	{
		link: "imaging-research",
		filetype: ".jpg",
		desc: "Accessible Imaging Platform"
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
	}
];