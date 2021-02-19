import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png'
        message='works?'
        timestamp='timestamp'
        username='jake lee'
        image='https://images.unsplash.com/photo-1612831660861-77203e9b922e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80'
      />
      <Post
        profilePic='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png'
        message='works?'
        timestamp='timestamp'
        username='jake lee'
        image='https://images.unsplash.com/photo-1612831660861-77203e9b922e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80'
      />
    </div>
  );
};

export default Feed;
