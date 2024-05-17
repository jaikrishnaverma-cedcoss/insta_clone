import React, { useState, useEffect, useRef } from "react";

import "./Story.css";

import MoreHoriz from "@material-ui/icons/MoreHoriz";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { Story as StoryModel } from "../../models/story/Story";
import CloseIcon from "@material-ui/icons/Close";
import { Post } from "../../models/post/Post";
import { PostStories } from "../../data/posts/posts";

interface Props {
	onClose: Function;
	stories?: StoryModel[];
	post: PostStories;
}

export default function Story({ onClose, post }: Props) {
	const [storyPaused, setStoryPaused] = useState(false);
	const [storyIndex, setStoryIndex] = useState(0);
	const { stories } = post;
	const storyIndexRef = useRef(0);

	useEffect(() => {
		const video = document.getElementById("video") as HTMLVideoElement;

		if (video) {
			video.onended = (e) => {
				if (storyIndexRef.current === stories.length - 1) {
					onClose();
				} else {
					setStoryIndex((value) => value + 1);
				}
			};
		}
	}, []);

	useEffect(() => {
		storyIndexRef.current = storyIndex;
	}, [storyIndex]);

	useEffect(() => {
		if (storyPaused) {
			(document.getElementById("video") as HTMLVideoElement).pause();
		} else {
			(document.getElementById("video") as HTMLVideoElement).play();
		}
	}, [storyPaused]);

	function onClickStory(element: EventTarget) {
		if ((element as HTMLElement).className === "story-container") onClose();
	}

	function getProgressBarClassName(index: number) {
		if (index < storyIndex) {
			return "progress-bar progress-bar-finished";
		} else if (index === storyIndex) {
			return storyPaused
				? "progress-bar progress-bar-active progress-bar-paused"
				: "progress-bar progress-bar-active";
		} else {
			return "progress-bar";
		}
	}

	return (
		<div onClick={(e) => onClickStory(e.target)} className="story-container">
			<div className="story">
				<div className="title">
					<img src="https://raw.githubusercontent.com/FrontendCodingYT/coding-projects/master/ui_clones/reactjs/instagram_ui/public/assets/images/stories-cover.jpg" />
					<div className="details">
						<span>{post?.description}</span>
						<span>{post?.profile_name}</span>
					</div>
					<div className="spacer"></div>
					{storyPaused && <div className="pause"></div>}
					<MoreHoriz />
					<span onClick={(e) => onClose()}>
						<CloseIcon />
					</span>
				</div>
				<div className="progress-bars">
					{stories.map((story, index) => (
						<div className="progress-bar-container" key={index}>
							<div
								style={{ animationDuration: `${story.duration}s` }}
								className={getProgressBarClassName(index)}
							></div>
						</div>
					))}
				</div>
				<div className="video">
					<video
						onMouseDown={(e) => setStoryPaused(true)}
						onMouseUp={(e) => setStoryPaused(false)}
						id="video"
						src={stories[storyIndex].video_url}
						autoPlay
					></video>
					{storyIndex !== 0 && (
						<ChevronLeft
							onClick={(e) => setStoryIndex((value) => value - 1)}
							className="previous hoverable"
						/>
					)}
					{storyIndex !== stories.length - 1 && (
						<ChevronRight
							onClick={(e) => setStoryIndex((value) => value + 1)}
							className="next hoverable"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
