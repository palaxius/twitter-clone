import React, {useEffect} from 'react';
import './Feed.scss'
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreator";
import {selectIsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Loader from "../Loader/Loader";
import {Route} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import Tweet from "../Tweet/Tweet";
import NotFound from "../NotFound/NotFound";

 const Feed = () => {
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className='feed'>
      <div className="feed__header-wrapper">

        <Route path='/home/:any'>
          <IconButton
            style={{color: 'var(--twitter-color)'}}
            onClick={() => window.history.back()}
          >
            <ArrowBackIcon />
          </IconButton>
        </Route>

        <Route path='/home' exact>
          <h2 className='feed__header'>Home</h2>
        </Route>

        <Route path='/home/search/' exact>
          <h2 className='feed__header'>Explore</h2>
        </Route>

        <Route path='/home/tweet/:value' exact>
          <h2 className='feed__header'>Tweet</h2>
        </Route>
      </div>

        <Route path={['/home', '/home/search', '/']} exact>
          <TweetBox />
          <div className='add__border'/>
        </Route>

        <Route path='/home' exact>
          { isLoading
            ? <Loader />
            : tweets.map((tweet) => (
              <Post
                {...tweet}
                key={tweet._id}
              />
            ))}
        </Route>

        <Route path='/home/tweet/:id' component={Tweet} exact />

        {/*<Route component={NotFound} />*/}
    </div>
  );
};

export default Feed;
