import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
