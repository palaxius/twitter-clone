import React, {useState} from 'react';

import './Sidebar.scss'

import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button, Hidden} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import TweetBox from "../TweetBox/TweetBox";
import Modal from "../Modal/Modal";
// import Modal from "@material-ui/core/Modal";



const Sidebar = () => {

  const [openModal, setOpenModal] = useState(false)

  const openModalHandler = () => {
    setOpenModal(true)
  }

  const onCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon'/>
      <SidebarOption active text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={SearchIcon} />
      <SidebarOption text='Notifications' Icon={NotificationsNoneIcon} />
      <SidebarOption text='Messages' Icon={MailOutlineOutlinedIcon} />
      <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
      <SidebarOption text='Lists' Icon={ListAltIcon} />
      <SidebarOption text='Profile' Icon={PermIdentityIcon} />
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
