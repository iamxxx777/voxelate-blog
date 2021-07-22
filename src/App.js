import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { getPosts } from './redux/actions/postActions';

import Sidenav from './components/SideNav/Sidenav';
import Overlay from './components/Overlay/Overlay';

// Screens
import Homescreen from "./screens/Homescreen/Homescreen";
import Postsscreen from './screens/Postsscreen/Postsscreen';
import Articlescreen from './screens/Articlescreen/Articlescreen';
import Authorpage from './screens/Authorboard/Authorpage';
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import Notfound from './screens/Notfound/Notfound';

import './App.css';


const App = () => {

  const { user } = useSelector((state) => state.author);

  const [sideToggle, setSideToggle] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Overlay show={sideToggle} click={() => setSideToggle(false)} />
        <Sidenav show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route exact path={"/"}> <Homescreen click={() => setSideToggle(true)} /> </Route>
          <Route path={"/allposts"}> <Postsscreen click={() => setSideToggle(true)} /> </Route>
          <Route path={`/article/:id`}> <Articlescreen click={() => setSideToggle(true)} /> </Route>
          <Route path={"/author"}>{user.username ? <Authorpage /> : <Redirect to="/login" /> } </Route>
          <Route path={"/register"}> {!user.username ? <Register click={() => setSideToggle(true)} /> : <Redirect to="/author" /> } </Route>
          <Route path={"/login"}> <Login click={() => setSideToggle(true)} /> </Route>
          <Route path="/404"> <Notfound click={() => setSideToggle(true)} /> </Route>
          <Redirect from="*" to="/404" />
        </Switch> 
      </div>
    </Router>
    
  )
}

export default App;
