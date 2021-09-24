import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Applying from './pages/Applying/Applying';
import Application_complete from './pages/Applying/Application_complete';
import Nav from './component/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/applying" component={Applying} />
          <Route exact path="/complete" component={Application_complete} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
