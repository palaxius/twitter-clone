import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/login' component={Login} exact />
        <Route
          path={['/home', '/explore', '/notifications', '/messages', '/bookmarks', '/lists', '/profile']}
          component={Home}
        />
        <Route path='/' exact><Redirect to="/home" /></Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
