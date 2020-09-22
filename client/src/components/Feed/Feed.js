import React, {useEffect} from 'react';
import './Feed.scss'
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreator";
import {selectIsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import CircularProgress from "@material-ui/core/CircularProgress";

 const Feed = () => {
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className='feed'>
      <h2 className='feed__header'>Home</h2>
      <TweetBox />
      <div className='add__border'/>

      { isLoading
        ? <div className='loader'>
            <CircularProgress/>
          </div>
        : tweets.map((tweet) => (
        <Post
          text={tweet.text}
          user={tweet.user}
          key={tweet._id}
        />
      ))}
    </div>
  );
};

export default Feed;
