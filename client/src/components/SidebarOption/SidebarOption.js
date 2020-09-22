import React from 'react';
import './SidebarOption.scss'
import {Hidden} from "@material-ui/core";

const SidebarOption = ({active, text, Icon}) => {
  return (
    <div className={`sidebar__option ${active && 'sidebar__option-active'}`}>
      <Icon />
      <Hidden smDown>
        <h2>{text}</h2>
      </Hidden>
    </div>
  );
};

export default SidebarOption;
