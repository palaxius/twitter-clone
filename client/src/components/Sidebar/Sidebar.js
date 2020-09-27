import React, {useState} from 'react';

import './Sidebar.scss'

import SidebarOption from "../SidebarOption/SidebarOption";
import TweetBox from "../TweetBox/TweetBox";
import Modal from "../Modal/Modal";
import {Link} from "react-router-dom";


import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button, Hidden, IconButton} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import NavLink from "../NavLink/NavLink";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false)

  const openModalHandler = () => {
    setOpenModal(true)
  }

  const onCloseModal = () => {
    setOpenModal(false)
  }

  const currentLocation = window.location.pathname

  return (
    <div className='sidebar'>

      <Link to='/home'>
        <IconButton className='sidebar__twitterIcon'>
          <TwitterIcon style={{fontSize: '35px'}}/>
        </IconButton>
      </Link>

      <NavLink to={'/home'}>
        <SidebarOption text='Home' Icon={HomeIcon} />
      </NavLink>

      <NavLink to='/explore' >
        <SidebarOption text='Explore' Icon={SearchIcon} />
      </NavLink>

      <NavLink to='/notifications' >
        <SidebarOption text='Notifications' Icon={NotificationsNoneIcon} />
      </NavLink>

      <NavLink to='/messages'>
        <SidebarOption text='Messages' Icon={MailOutlineOutlinedIcon} />
      </NavLink>

      <NavLink to='/bookmarks'>
        <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
      </NavLink>

      <NavLink to='/lists'>
        <SidebarOption text='Lists' Icon={ListAltIcon} />
      </NavLink>

      <NavLink to='/profile'>
        <SidebarOption text='Profile' Icon={PermIdentityIcon} />
      </NavLink>

        <SidebarOption text='More' Icon={MoreHorizIcon} />
      <Button
        variant='outlined'
        className='sidebar__btn'
        fullWidth
        onClick={openModalHandler}
      >
        <Hidden smDown>
          Tweet
        </Hidden>
        <Hidden mdUp>
          <CreateIcon />
        </Hidden>
      </Button>


      <Modal
        title=''
        modalOpen={openModal}
        onClose={onCloseModal}
        className='sidebar__modal'
      >
        <div style={{ width: '550px'}}>
          <TweetBox
            className='sidebar__tweetBox'
            maxRows={15}
            onClose={onCloseModal}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
