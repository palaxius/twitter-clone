import React from 'react';
import './SidebarOption.scss'

const SidebarOption = ({text, Icon}) => {
  return (
    <div className='sidebar__option'>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
