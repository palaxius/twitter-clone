import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/login' component={Login} exact/>
        <Route path='/' component={Home}/>
       </Switch>
    </div>
  );
}

export default App;
