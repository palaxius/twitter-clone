import React, {useEffect} from 'react';
import './Widgets.scss'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search';
import Trends from "../Trends/Trends";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import {Route} from "react-router-dom";

const Widgets = () => {

  return (
    <div className='widgets'>

      <Route path={['/home', '/notifications', '/bookmarks', '/lists', 'profile']} >

        <div className="widgets__input">
          <SearchIcon className='widgets__searchIcon'/>
          <input type="text" placeholder='Search Twitter'/>
        </div>

        <div className="widgets__container">
          <Trends />
          <WhoToFollow />
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={'1285809839885570054'}/>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='reactjs'
            options={{ height: 500 }}
          />
        </div>
      </Route>

      <Route path='/explore'>
        <div className="widgets__container">
          <WhoToFollow />
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={'1285809839885570054'}/>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='reactjs'
            options={{ height: 500 }}
          />
        </div>
      </Route>

      <Route path='/profile'>
        <div className="widgets__container">
          <WhoToFollow />
          <Trends />
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={'1285809839885570054'}/>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='reactjs'
            options={{ height: 500 }}
          />
        </div>
      </Route>


    </div>
  );
};

export default Widgets;
