import React from 'react';

import './Modal.scss'

import {Close} from "@material-ui/icons";
import DialogTitle from "@material-ui/core/DialogTitle";
import TwitterIcon from "@material-ui/icons/Twitter";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";

const Modal = ({ title, children, modalOpen, onClose, logo }) => {

  return modalOpen && (
    <Dialog open={modalOpen} onClose={onClose} className='login-modal'>
      <Close className='login__closeBtn' color='secondary' onClick={onClose}/>
      <DialogTitle>
        {logo && <TwitterIcon className='twitter__icon' />}
        <h2>{title}</h2>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
