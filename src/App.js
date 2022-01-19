import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//public pages
import Home from './components/Home';

//user pages
import Registration from './components/user/Registration';
import Login from './components/auth/login';

//conference registration
import DemoForm from './components/conference/DemoForm';

//conference dashboard
import Demographics from './components/Demographics';
import Demo from './components/dashboard/Demographics';

function App() {
  return (
    <>
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
          {/* <Demographics /> */}
          <Demo />
        </Route>

      </Switch>

      <Footer />

    </>
  );
}

export default App;
