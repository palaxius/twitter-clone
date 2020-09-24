import React, {useEffect} from 'react';
import Paper from "@material-ui/core/Paper";
import {Avatar, Button, Divider, List, Typography} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {useDispatch} from "react-redux";

const WhoToFollow = () => {
  // const dispatch = useDispatch()
  //
  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])

  return (
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
  );
};

export default WhoToFollow;
