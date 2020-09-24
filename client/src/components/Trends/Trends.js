import React, {useEffect} from 'react';

import './Trends.scss'

import Paper from "@material-ui/core/Paper";
import {Divider, List, Typography} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoaded, selectTrendsItems} from "../../store/ducks/trends/selectors";
import {fetchTrends} from "../../store/ducks/trends/actionCreator";
import Loader from "../Loader/Loader";
import {Link} from "react-router-dom";

const Trends = () => {
  const dispatch = useDispatch()
  const trends = useSelector(selectTrendsItems);
  const isLoaded = useSelector(selectIsLoaded)

  useEffect(() => {
    dispatch(fetchTrends())
  }, [dispatch])

  return (
    <Paper className="widgets__trends">
      <Paper className='widgets__trends-header'>
        <h2>Trends for you</h2>
      </Paper>
      <List>
        {
          isLoaded ? trends.map(trend => (
            <React.Fragment key={trend._id}>
              <Link to={`/home/search?q=${trend.name}`}>
                <ListItem className='widgets__trends-item' >
                  <ListItemText
                    className='trends-item__title'
                    primary={trend.name}
                    secondary={
                      <Typography component='span' variant='body2' className='trends-item__subtitle'>
                        {trend.tweetCount} Tweets
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Divider component='li'/>
            </React.Fragment>
          ))
            : <Loader />
        }
      </List>
    </Paper>
  );
};

export default Trends;
