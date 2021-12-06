import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import UserRegistration from './pages/userRegistration/UserRegistration';
import Login from './pages/login/Login';
import {Grid} from '@material-ui/core';
import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/userregistration'>
              <UserRegistration />
            </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
