//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//public pages
import Home from './components/Home';
import Registration from './components/user/Registration';

//user pages
import Login from './components/auth/login';

//conference registration
import DemoForm from './components/conference/DemoForm';

//dashboard
import Demo from './components/dashboard/Demographics';
import Users from './components/dashboard/Users';

function App() {
  return (
    <>
    <Router>
      <NavMenu />
      <Header />

      <Switch>

        <Route exact path={['/', '/home']}>
          <Home />
        </Route>

        <Route path='/registration'>
          <Registration />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/demoform'>
          <DemoForm />
        </Route>

        <Route path='/demographics'>
          <Users />
          <Demo />
        </Route>

      </Switch>

      <Footer />
      </Router>

    </>
  );
}

export default App;
