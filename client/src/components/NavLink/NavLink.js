import React from 'react';
import {Link} from "react-router-dom";

const NavLink = ({children, to}) => {
  const currentLocation = window.location.pathname

  return (
    <Link to={to} className={`${currentLocation === to && 'active'}`}>
      {children}
    </Link>
  );
};

export default NavLink;
