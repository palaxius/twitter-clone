import React, {useEffect} from 'react';
import Post from "../Post/Post";
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../../store/ducks/tweet/actionCreator";
import {selectIsLoaded, selectTweetData} from "../../store/ducks/tweet/selectors";
import Loader from "../Loader/Loader";

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

  return tweetData && isLoaded ? <Post {...tweetData}/> : <Loader />
};

export default Tweet;
