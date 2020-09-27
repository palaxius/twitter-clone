import React, {useState} from 'react';
import './SidebarOption.scss'
import {Hidden} from "@material-ui/core";

const SidebarOption = ({ text, Icon}) => {

  return (
    <div className='sidebar__option' >
      <Icon />
      <Hidden smDown>
        <h2>{text}</h2>
      </Hidden>
    </div>
  );
};

export default SidebarOption;
