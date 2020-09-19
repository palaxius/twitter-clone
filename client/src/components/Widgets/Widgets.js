import React from 'react';
import './Widgets.scss'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className="widgets__input">
          <SearchIcon className='widgets__searchIcon'/>
          <input type="text" placeholder='Search Twitter'/>
        </div>

        <div className="widgets__container">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId={'1285809839885570054'}/>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='reactjs'
            options={{ height: 500 }}
          />
        </div>
    </div>
  );
};

export default Widgets;
