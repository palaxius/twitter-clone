import React, {useState} from 'react';

import './Login.scss'

import TwitterIcon from '@material-ui/icons/Twitter';
import {Button, DialogContentText, FormControl, IconButton, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import Modal from "../../components/Modal/Modal";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const [modalOpen, setModalOpen] = useState()

  // const handleOpenLogin = () => {
  //   setModalLoginOpen(true)
  // }
  //
  // const handleCloseLogin = () => {
  //   setModalLoginOpen(false)
  // }

  const handleOpenSignIn = () => {
    setModalOpen('signIn')
  }

  const handleOpenLogin = () => {
    setModalOpen('login')
  }

  const handleCloseModal = () => {
    setModalOpen(undefined)
  }

  return (
    <div className='login'>
      <div className="wrapper">
        <div className="leftSide">
          <TwitterIcon className='twitter__bigIcon' />
          <ul>
            <li>
              <Typography className='leftSide__text'>
                <SearchIcon  className='leftSide__icon'/>
                Follow your interests.
              </Typography>
            </li>
            <li>
              <Typography className='leftSide__text'>
                <PeopleOutlineIcon  className='leftSide__icon'/>
                Hear what people are talking about.
              </Typography>
            </li>
            <li>
              <Typography className='leftSide__text'>
                <ModeCommentOutlinedIcon className='leftSide__icon'/>
                Join the conversation.
              </Typography>
            </li>
          </ul>
        </div>
        <div className="rightSide">
          <div className='rightSide__wrapper'>
            <TwitterIcon className='twitter__icon' />
            <Typography className='rightSide__title' variant='h4'>
              See what’s happening in the world right now
            </Typography >
            <Typography className='rightSide__text'>
              Join Twitter today.
            </Typography>
            <Button className='signup-btn' variant='outlined' fullWidth onClick={handleOpenSignIn}>
              Sign up
            </Button>
            <Button className='login-btn' fullWidth onClick={handleOpenLogin}>
              Log in
            </Button>

            <Modal title='Log in to Twitter' modalOpen={modalOpen === 'login'} onClose={handleCloseModal}>
              <FormControl className='formControl' component='fieldset' fullWidth>
                <FormGroup aria-label='position' row>
                  <TextField
                    className='loginField'
                    autoFocus
                    margin='dense'
                    id='email'
                    label='Email Address'
                    type='email'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant='filled'
                  />
                  <TextField
                    className='loginField'
                    margin='dense'
                    id='password'
                    label='Password'
                    type='password'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant='filled'
                  />
                  <Button
                    className='signup-btn'
                    fullWidth
                  >
                    Log In
                  </Button>
                </FormGroup>
              </FormControl>
            </Modal>

            <Modal title='Create your account' modalOpen={modalOpen === 'signIn'} onClose={handleCloseModal}>
              <FormControl className='formControl' component='fieldset' fullWidth>
                <FormGroup aria-label='position' row>
                  <TextField
                    className='registerField'
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Name'
                    type='name'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant='filled'
                  />
                  <TextField
                    className='registerField'
                    margin='dense'
                    id='email'
                    label='Email'
                    type='email'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant='filled'
                  />
                  <TextField
                    className='registerField'
                    margin='dense'
                    id='password'
                    label='Password'
                    type='password'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant='filled'
                  />
                  <div className='signup-btn__wrapper'>
                      <Button
                        className='signup-btn'
                      >
                        Next
                      </Button>
                  </div>
                </FormGroup>
              </FormControl>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
