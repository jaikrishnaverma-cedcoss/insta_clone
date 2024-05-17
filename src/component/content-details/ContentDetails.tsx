import React, { useRef } from "react";

import "./ContentDetails.css";
import Button from "../button/Button";
import { Post } from "../../models/post/Post";
import { PostStories } from "../../data/posts/posts";

interface Props {
	posts: PostStories[];
	openStories: Function;
}

export default function ContentDetails({ posts, openStories }: Props) {
	// const scrollContainer = useRef(null);

	// const scrollContent = (direction: any) => {
	//   // Assume a scroll amount, or use a calculation based on child width
	//   const scrollAmount  = 300;
	//   if (scrollContainer.current) {
	//     const { current } = scrollContainer;
	//     const scrollPosition =
	//       direction === "left"
	//         ? current?.scrollLeft - scrollAmount
	//         : current?.scrollLeft + scrollAmount;
	//     current.scrollLeft = scrollPosition;
	//   }
	// };

	return (
		<>
			{posts.map((post) => {
				return (
					<div
						className={`content-details ${post?.visited?'visited-story':''}`}
						key={post?.profile_name + post?.description}
					>
						<div
							onClick={(e) => openStories({ ...post })}
							className="cover-image-box"
						>
							<img src={post?.image_url} alt="profile pic" />
						</div>
						<p>{post?.profile_name}</p>
					</div>
				);
			})}
		</>
	);
}
