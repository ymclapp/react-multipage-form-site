import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';

function App() {
  return (
    <>
    <Switch>
      <Route exact path={['/', '/home']}>
        <Home />
      </Route>
    </Switch>
    </>
  );
}

export default App;
