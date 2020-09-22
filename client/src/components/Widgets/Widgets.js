import React from 'react';
import './Widgets.scss'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";
import {Avatar, Button, Divider, List, Typography} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className="widgets__input">
          <SearchIcon className='widgets__searchIcon'/>
          <input type="text" placeholder='Search Twitter'/>
        </div>

        <div className="widgets__container">
          <Paper className="widgets__trends">
            <Paper className='widgets__trends-header'>
              <h2>Trends for you</h2>
            </Paper>
            <List>
              <ListItem className='widgets__trends-item'>
                <ListItemText
                  className='trends-item__title'
                  primary='СССР'
                  secondary={
                    <Typography component='span' variant='body2' className='trends-item__subtitle'>
                      7,967 Tweets
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component='li'/>
              <ListItem className='widgets__trends-item'>
                <ListItemText
                  primary='#coronovirus'
                  secondary={
                    <Typography component='span' variant='body2'>
                      27,611 Tweets
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component='li'/>
              <ListItem className='widgets__trends-item'>
                <ListItemText
                  className='widgets__trends-text'
                  primary='Belarus'
                  secondary={
                    <Typography component='span' variant='body2'>
                      12,915 Tweets
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component='li'/>
            </List>
          </Paper>

          <Paper className="widgets__trends">
            <Paper className='widgets__trends-header'>
              <h2>Who to follow</h2>
            </Paper>
            <List>
              <ListItem className='widgets__trends-item'>
                <ListItemAvatar>
                  <Avatar
                    alt='person'
                    src='https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'
                  />
                </ListItemAvatar>
                <ListItemText
                  className='widgets__trends-text'
                  primary='Dock of Shame'
                  secondary={
                    <Typography component='span' variant='body2'>
                      @FavDockOfShame
                    </Typography>
                  }
                />
                <Button color='primary'>
                  <PersonAddIcon />
                </Button>
              </ListItem>
              <Divider component='li'/>
            </List>
          </Paper>


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
