type Story = {
	profile_name: string,
	video_url: string,
	duration: number,
};

type Comment = {
	message: string,
	from: string,
	profile_name: string,
	likes: number,
	profile_image_url: string,
};

export type PostStories = {
	likes: number,
	description: string,
	profile_name: string,
	image_url: string,
	profile_url: string,
	comments: Comment[],
	stories: Story[],
  id:Number,
  visited:Boolean
};

const storiesOptions: Story[] = [
	{
		profile_name: "Jeremy",
		video_url:
			"https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-1.mp4",
		duration: 7,
	},
	{
		profile_name: "Meko222",
		video_url:
			"https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-2.mp4",
		duration: 7,
	},
	{
		profile_name: "Chupachup",
		video_url:
			"https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-3.mp4",
		duration: 7,
	},
	{
		profile_name: "Aron",
		video_url:
			"https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
		duration: 7,
	},
	{
		profile_name: "Ligi_3",
		video_url:
			"https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
		duration: 7,
	},
];

const getRandomStories = (profileName: string): Story[] => {
	const randomCount = Math.floor(Math.random() * 3) + 1;
	const shuffled = storiesOptions.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, randomCount).map((el) => {
		return {
			...el,
			profile_name: profileName,
		};
	});
};

export const posts: PostStories[] =[
  {
      "likes": 12,
      "description": "happy animals!",
      "profile_name": "Aron",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/animal-1.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "cool!",
              "from": "Liz",
              "profile_name": "Meko222",
              "likes": 2,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Aron",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-1.mp4",
              "duration": 7
          }
      ],
      "id": 0,
      "visited": false
  },
  {
      "likes": 8,
      "description": "Food!",
      "profile_name": "Jul",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/food-2.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "Wow!",
              "from": "Liz",
              "profile_name": "Mekanik",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Jul",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          },
          {
              "profile_name": "Jul",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-1.mp4",
              "duration": 7
          }
      ],
      "id": 1,
      "visited": false
  },
  {
      "likes": 5,
      "description": "happy animals!",
      "profile_name": "Mierto",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/animal-3.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "cool!",
              "from": "Liz",
              "profile_name": "Wowz772",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Mierto",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-2.mp4",
              "duration": 7
          },
          {
              "profile_name": "Mierto",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          }
      ],
      "id": 2,
      "visited": false
  },
  {
      "likes": 2,
      "description": "happy animals!",
      "profile_name": "Chupachup",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/anime-3.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "Cute!",
              "from": "Liz",
              "profile_name": "Geee_",
              "likes": 2,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "He looks happy!",
              "from": "Liz",
              "profile_name": "__yas__",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "What kind of animal is that?",
              "from": "Liz",
              "profile_name": "copo_03",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Chupachup",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-2.mp4",
              "duration": 7
          }
      ],
      "id": 3,
      "visited": false
  },
  {
      "likes": 5,
      "description": "happy animals!",
      "profile_name": "Aron",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/anime-1.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "cool!",
              "from": "Liz",
              "profile_name": "yugi",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Aron",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-1.mp4",
              "duration": 7
          },
          {
              "profile_name": "Aron",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-2.mp4",
              "duration": 7
          }
      ],
      "id": 4,
      "visited": false
  },
  {
      "likes": 2,
      "description": "happy animals!",
      "profile_name": "Ligi_3",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/animal-4.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "Cute!",
              "from": "Liz",
              "profile_name": "Mako_20",
              "likes": 2,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "He looks happy!",
              "from": "Liz",
              "profile_name": "baki22._",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "What kind of animal is that?",
              "from": "Liz",
              "profile_name": "King",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "We need to get this animal a nobel prize!",
              "from": "Liz",
              "profile_name": "Kuroko",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "So much cuteness!!",
              "from": "Liz",
              "profile_name": "Sammi",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "That is Timon from Lion King!",
              "from": "Liz",
              "profile_name": "Pumba",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Ligi_3",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          },
          {
              "profile_name": "Ligi_3",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-3.mp4",
              "duration": 7
          },
          {
              "profile_name": "Ligi_3",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          }
      ],
      "id": 5,
      "visited": false
  },
  {
      "likes": 5,
      "description": "happy animals!",
      "profile_name": "Crabraver",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/food-3.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "cool!",
              "from": "Liz",
              "profile_name": "Dicer",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Crabraver",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          },
          {
              "profile_name": "Crabraver",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-3.mp4",
              "duration": 7
          },
          {
              "profile_name": "Crabraver",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-1.mp4",
              "duration": 7
          }
      ],
      "id": 6,
      "visited": false
  },
  {
      "likes": 2,
      "description": "Wow #Death_note was so cool!",
      "profile_name": "Aron",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/anime-2.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "Cute!",
              "from": "Liz",
              "profile_name": "RoboCop",
              "likes": 2,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "He looks happy!",
              "from": "Liz",
              "profile_name": "Darium",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "What kind of animal is that?",
              "from": "Liz",
              "profile_name": "Pikachu",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Aron",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-2.mp4",
              "duration": 7
          }
      ],
      "id": 7,
      "visited": false
  },
  {
      "likes": 5,
      "description": "This looks like some delicious #Food!",
      "profile_name": "Thomas",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/food-1.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "cool!",
              "from": "Liz",
              "profile_name": "Arturito",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Thomas",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          },
          {
              "profile_name": "Thomas",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          },
          {
              "profile_name": "Thomas",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-3.mp4",
              "duration": 7
          }
      ],
      "id": 8,
      "visited": false
  },
  {
      "likes": 2,
      "description": "happy animals!",
      "profile_name": "Rio",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/animal-2.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "Cute!",
              "from": "Liz",
              "likes": 2,
              "profile_name": "Aaron",
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "He looks happy!",
              "from": "Liz",
              "likes": 0,
              "profile_name": "Ash",
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "What kind of animal is that?",
              "from": "Liz",
              "likes": 1,
              "profile_name": "NoU_",
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Rio",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-1.mp4",
              "duration": 7
          },
          {
              "profile_name": "Rio",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-4.mp4",
              "duration": 7
          }
      ],
      "id": 9,
      "visited": false
  },
  {
      "likes": 5,
      "description": "happy animals!",
      "profile_name": "Kzzt__",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/food-5.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "cool!",
              "from": "Liz",
              "profile_name": "Mnoz_x",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Kzzt__",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-1.mp4",
              "duration": 7
          }
      ],
      "id": 10,
      "visited": false
  },
  {
      "likes": 2,
      "description": "happy animals!",
      "profile_name": "Panter042",
      "image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/food-6.jpg",
      "profile_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg",
      "comments": [
          {
              "message": "Cute!",
              "from": "Liz",
              "profile_name": "echo-777",
              "likes": 2,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "He looks happy!",
              "from": "Liz",
              "profile_name": "Aron",
              "likes": 0,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          },
          {
              "message": "What kind of animal is that?",
              "from": "Liz",
              "profile_name": "Julian",
              "likes": 1,
              "profile_image_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/profile.jpg"
          }
      ],
      "stories": [
          {
              "profile_name": "Panter042",
              "video_url": "https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/videos/penguins-2.mp4",
              "duration": 7
          }
      ],
      "id": 11,
      "visited": false
  }
];
