import React, {useEffect} from 'react';
import Paper from "@material-ui/core/Paper";
import {Avatar, Button, Divider, List, Typography} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {useDispatch, useSelector} from "react-redux";
import {fetchWhoFollow} from "../../store/ducks/whoToFollow/actionCreator";
import {selectIsLoaded, selectWhoFollowItems} from "../../store/ducks/whoToFollow/selectors";
import Loader from "../Loader/Loader";
import CircularProgress from "@material-ui/core/CircularProgress";

const WhoToFollow = () => {
  const dispatch = useDispatch()
  const whoFollow = useSelector(selectWhoFollowItems)
  const isLoaded = useSelector(selectIsLoaded)

  useEffect(() => {
    dispatch(fetchWhoFollow())
  }, [dispatch])

  return (
    <Paper className="widgets__trends">
      <Paper className='widgets__trends-header'>
        <h2>Who to follow</h2>
      </Paper>
      <List>
        { isLoaded ?
          whoFollow.map((follower, index) => (
           <React.Fragment key={index}>
             <ListItem className='widgets__trends-item'>
               <ListItemAvatar>
                 <Avatar
                   alt={follower.name}
                   src={follower.avatarUrl}
                   className='whoFollowAvatar'
                 />
               </ListItemAvatar>
               <ListItemText
                 className='widgets__trends-text follower-name'
                 primary={follower.name}
                 secondary={
                   <Typography component='span' variant='body2'>
                     @{follower.username}
                   </Typography>
                 }
               />
               {/*<Button color='primary'>*/}
               {/*  <PersonAddIcon />*/}
               {/*</Button>*/}
               <Button
                 className='whoFollow__btn'
               >
                 Follow
               </Button>
             </ListItem>
             <Divider component='li'/>
           </React.Fragment>
          ))
          : <Loader />
        }



      </List>
    </Paper>
  );
};

export default WhoToFollow;
