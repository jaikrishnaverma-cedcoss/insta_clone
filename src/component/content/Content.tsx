import React, { useEffect } from "react";

import "./Content.css";

// import Post from "../post/Post";
import { Post as PostModel } from "../../models/post/Post";
import ContentDetails from "../content-details/ContentDetails";
import { PostStories } from "../../data/posts/posts";

interface Props {
  posts: PostStories[];
  selectPost: Function;
  openStories: Function;
}

export default function Content({posts, openStories }: Props) {
 
  return (
    <div className="content-container">
      <ContentDetails openStories={openStories} posts={posts}  />
      {/* <div className="content">
        {posts.map((post, index) => (
          <Post key={index} post={post} selectPost={selectPost} />
        ))}
      </div> */}
    </div>
  );
}
