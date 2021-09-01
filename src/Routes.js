import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Applying from './pages/Applying/Applying';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/applying" component={Applying} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
