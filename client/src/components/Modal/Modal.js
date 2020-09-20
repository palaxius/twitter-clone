import React, {useState} from 'react';

import './Modal.scss'

import {Close} from "@material-ui/icons";
import DialogTitle from "@material-ui/core/DialogTitle";
import TwitterIcon from "@material-ui/icons/Twitter";
import DialogContent from "@material-ui/core/DialogContent";
import {Button, FormControl} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

const Modal = ({ title, children, modalOpen, onClose }) => {

  return modalOpen && (
    <Dialog open={modalOpen} onClose={onClose} className='login-modal'>
      <Close className='login__closeBtn' color='secondary' onClick={onClose}/>
      <DialogTitle>
        <TwitterIcon className='twitter__icon' />
        <h2>{title}</h2>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
