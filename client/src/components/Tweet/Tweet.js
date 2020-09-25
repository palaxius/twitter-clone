import React, {useEffect} from 'react';

import './Tweet.scss'

import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../../store/ducks/tweet/actionCreator";
import {selectIsLoaded, selectTweetData} from "../../store/ducks/tweet/selectors";
import Loader from "../Loader/Loader";
import {Avatar, IconButton} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Tweet = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const id = params.id
  const tweetData = useSelector(selectTweetData)
  const isLoaded = useSelector(selectIsLoaded)

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id))
    }

    return () => {
      dispatch(setTweetData(undefined))
    }
  }, [dispatch, id])

  return tweetData && isLoaded ? (
    <div>
      <div className='tweet'>
        <div className="tweet__header">
          <Avatar src={tweetData.user.avatarUrl} className='tweet__avatar'/>
          <div className="tweet__header-info">
              <h3>{tweetData.user.name}&nbsp;
                {tweetData.user.verified && <VerifiedUserIcon className='tweet__badge'/>}
              </h3>
              <span className='tweet__header-username'>
                @{tweetData.user.username}
              </span>
          </div>
        </div>
        <div className="tweet__body">
            <div className="tweet__body-text">
              <p>{tweetData.text}</p>
            </div>
          <img src="https://pbs.twimg.com/media/Eih_kDcX0AIbgbY?format=jpg&name=4096x4096" alt="post-image"/>
          <span className='tweet__date'>8:42 AM&nbsp;·&nbsp;Aug 27, 2020&nbsp;·&nbsp;Twitter for iPhone</span>
          <div className="tweet__feedback">
            <div className='tweet__feedback-wrapper'>
              <b>5.3K</b><span className='tweet__feedback-item'>Retweets</span>
            </div>
            <div className='tweet__feedback-wrapper'>
              <b>415</b><span className='tweet__feedback-item'>Quote Tweets</span>
            </div>
            <div className='tweet__feedback-wrapper'>
              <b>84.7K</b><span className='tweet__feedback-item'>Likes</span>
            </div>
          </div>
          <div className="tweet__footer">
            <IconButton className='tweet__btn'>
              <ChatBubbleOutlineIcon fontSize='small' className='tweet__footer-icon'/>
            </IconButton>
            <IconButton className='tweet__btn'>
             <RepeatIcon fontSize='small' className='tweet__footer-icon'/>
            </IconButton>
            <IconButton className='tweet__btn'>
              <FavoriteBorderIcon fontSize='small' className='tweet__footer-icon'/>
            </IconButton>
            <IconButton className='tweet__btn'>
              <PublishIcon fontSize='small' className='tweet__footer-icon'/>
            </IconButton>

          </div>
        </div>
      </div>
    </div>
  ) : <Loader />
};

export default Tweet;
