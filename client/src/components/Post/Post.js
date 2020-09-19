import React from 'react';
import './Post.scss'
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({displayName, username, verified, text, image, avatar}) => {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar src='https://asia.ifoam.bio/wp-content/uploads/2018/12/avatar__181424.png'/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header-text">
            <h3>
              Avtushenko Andrey{' '}
              <span className='post__header-username'>
                <VerifiedUserIcon className='post__badge'/>
                @palaxius
              </span>
            </h3>
          </div>
          <div className="post__header-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloribus harum recusandae.</p>
          </div>
        </div>
        <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt="post-image"/>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize='small'/>
          <RepeatIcon fontSize='small'/>
          <FavoriteBorderIcon fontSize='small'/>
          <PublishIcon fontSize='small'/>
        </div>
      </div>
    </div>
  );
};

export default Post;
