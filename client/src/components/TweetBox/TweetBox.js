import React, {useEffect, useState} from 'react';
import './TweetBox.scss'
import {Avatar, Button, IconButton} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from "@material-ui/core/CircularProgress";
import {red} from "@material-ui/core/colors";


const TweetBox = ({maxRows = 25, onClose = false}) => {

  const [text, setText] = useState()
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(280)

  const progressHandler = (e) => {
    setProgress(e.target.value.length / 2.8)
    setText(e.target.value)
    setCounter(280 - e.target.value.length)
  }

  const addTweetHandler = () => {
    setText('')
    setProgress(0)
    setCounter(280)
    onClose && onClose()


  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__header">
          <Avatar className='tweetBox__header-avatar' src='https://asia.ifoam.bio/wp-content/uploads/2018/12/avatar__181424.png'/>
          <div className='tweetBox__input'>
            <TextareaAutosize
              type="text"
              placeholder="What's happening?"
              className='tweetBox__input-textarea'
              value={text}
              onChange={progressHandler}
              rowsMax={maxRows}
            />
          </div>
        </div>
        <div className="tweetBox__footer">
          <div className="tweetBox__footer-icons ">
            <IconButton>
              <ImageOutlinedIcon className='tweetBox__footer-icon'/>
            </IconButton>
            <IconButton>
              <SentimentSatisfiedOutlinedIcon className='tweetBox__footer-icon'/>
            </IconButton>
          </div>
          <div className="tweetBox__footer-right">
            <span className='progress-counter'>{counter}</span>
                <div className="circular-progress">
                  <CircularProgress
                    variant="static"
                    value={(progress >= 100) ? 100 : progress}
                    size={30}
                    style={progress >= 100 && {color: 'red'}}
                  />
                  <CircularProgress
                    style={{color: 'rgba(0, 0, 0, 0.1'}}
                    variant='static'
                    size={30}
                    thickness={4}
                    value={100}
                  />
                </div>
            <Button
              className='tweetBox__btn'
              disabled={progress > 100}
              onClick={addTweetHandler}
            >
              Tweet
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
