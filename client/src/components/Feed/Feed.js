import React from 'react';
import './Feed.scss'
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className='feed'>
      <h2 className='feed__header'>Home</h2>
      <TweetBox />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
