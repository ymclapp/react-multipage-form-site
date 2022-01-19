import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Home from './components/Home';

function App() {
  return (
    <>
    <NavMenu />
    <Header />

    <Switch>

      <Route exact path={['/', '/home']}>
        <Home />
      </Route>


    </Switch>

    <Footer />

    </>
  );
}

export default App;
