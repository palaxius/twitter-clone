import React from 'react';

import './Home.scss'

import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Widgets from "../../components/Widgets/Widgets";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
