import React from 'react';
import './Post.scss'
import {Avatar, IconButton} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import {Link} from "react-router-dom";


const Post = ({text, user, _id}) => {

  const randomLikesCounterGenerator = () => {
    return Math.round(Math.random() * 100)
  }

  return (
    <Link to={`/home/tweet/${_id}`}>
      <div className='post'>
        <div className="post__avatar">
          <Avatar src={user.avatarUrl} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__header-text">
              <h3>
                {user.name}
                <span className='post__header-username'>
                {user.verified && <VerifiedUserIcon className='post__badge'/>}
                  @{user.username}
              </span>
                <span className='post__date'>12h</span>
              </h3>
            </div>
            <div className="post__header-description">
              <p>{text}</p>
            </div>
          </div>
          <img src="https://pbs.twimg.com/media/Eih_kDcX0AIbgbY?format=jpg&name=4096x4096" alt="post-image"/>
          <div className="post__footer">
            <IconButton className='post__footer-icon' onClick={() => alert(123)}>
              <ChatBubbleOutlineIcon fontSize='small' />
            </IconButton>
            <IconButton className='post__footer-icon'>
              <RepeatIcon fontSize='small' />
            </IconButton>
            <IconButton className='post__footer-icon favorite-icon'>
              <FavoriteBorderIcon fontSize='small' />
              <span className='likes-counter'>{randomLikesCounterGenerator()}</span>
            </IconButton>
            <IconButton className='post__footer-icon'>
              <PublishIcon fontSize='small' />
            </IconButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;