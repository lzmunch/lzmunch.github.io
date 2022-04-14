// set projects to list under each category
const code = [
		"white",
		"maya-toon-script", 
		"create-lab", 
		"imaging-research", 
		"virtual-cmu-fence", 
		"3d-shadow-anim"
];
const fun = [
		"white", 
		"test", 
		"sneeple", 
		"mii"
		];
const art = [
		"white", 
		"drunko-brunko", 
		"gnomes-in-a-robe", 
		"grasshopper", 
		"voices-of-belfast", 
		"ems", 
		"traditional", 
		"digital"
];
const home = [
		"maya-toon-script",
		"drunko-brunko", 
		"gnomes-in-a-robe", 
		"imaging-research", 
		"virtual-cmu-fence", 
		"create-lab", 
		"grasshopper", 
		"3d-shadow-anim"
];

// concat all categories to list under 'all'
let all = new Set();
code.concat(fun).concat(art.concat(home)).forEach(x => all.add(x));

export const galleryCategories = { 
	"code" : code,
    "fun" : fun,
    "art" : art,
    "home" : home,
    "all" : Array.from(all)
};

export const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vQcH7QWKh1PoMcpn4ojiEpIFKJ_OB_j2UVllArwLEFmZNdUl3Jjn_2SBKy6TqJUODG12XQ0qv_Eq2rL/pub"

export const demoReelLink = "https://player.vimeo.com/video/676769275"

// export const lastUpdateTime = "02/13/2022"

// for adding gallery boxes and linking project pages
// used in Content.js and Gallery.js
export const projectInfos = [
	{
		link: "maya-toon-script",
		filetype: ".jpg",
		desc: "Maya Toon Line Tool",
	},
	{
		link: "gnomes-in-a-robe",
		filetype: ".jpg",
		desc: "Gnomes in a Robe: Unity Game",
	},
	{
		link: "drunko-brunko",
		filetype: ".jpg",
		desc: "Drunko Brunko: Unity Game",
	},
	{
		link: "imaging-research",
		filetype: ".jpg",
		desc: "Accessible Imaging Platform (Research)",
		//redirect: "https://lzmunch.github.io/beaglebone-imaging/"
	},
	{
		link: "mii",
		filetype: ".png",
		desc: "Mii Simulator (Unity Game)"
	},
    {
		link: "virtual-cmu-fence",
		filetype: ".jpg",
		desc: "Virtual CMU Fence (Web App)"
	},
	{
		link: "create-lab",
		filetype: ".png",
		desc: "CMU Create Lab (Internship)"
	},
	{
		link: "grasshopper",
		filetype: ".png",
		desc: "Grasshopper Experiments"
	},
	{
		link: "3d-shadow-anim",
		filetype: ".jpg",
		desc: "3D Shadow Puppets (Experimental Animation)"
	},
	{
		link: "ems",
		filetype: ".png",
		desc: "Interactivity and Computation"
	},
	{
		link: "map-voices",
		filetype: ".png",
		desc: "Map Voices"
	},
	{
		link: "voices-of-belfast",
		filetype: ".jpg",
		desc: "Voices of Belfast"
	},
	{
		link: "sneeple",
		filetype: ".png",
		desc: "The Sneeple Project",
		redirect: "https://lzmunch.github.io/the-sneeple-project/"
	},
	{
		link: "traditional",
		filetype: ".png",
		desc: "Traditional Art",
		redirect: "https://zhauren.wixsite.com/home/traditional-art"
	},
	{
		link: "digital",
		filetype: ".png",
		desc: "Digital Illustration",
		redirect: "https://zhauren.wixsite.com/home/digital-illustration"
	},
	{
		link: "test",
		filetype: ".jpg",
		desc: "Dead Mii"
	}
];