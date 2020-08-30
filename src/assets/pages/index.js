// export {default as MiiPage} from './mii';

export const galleryCategories = { 
	"code" : ["mii", "create-lab", "imaging-research", "voices-of-belfast"],
    "fun" : ["test"],
    "art" : ["mii", "voices-of-belfast"],
    "home" : ["mii", "create-lab", "imaging-research", "voices-of-belfast"],
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
		link: "voices-of-belfast",
		filetype: ".jpg",
		desc: "Voices of Belfast"
	},
	{
		link: "test",
		filetype: ".jpg",
		desc: "Test"
	}
];