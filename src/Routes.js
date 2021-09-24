import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import FindPassword from './pages/Signin/FindPassword';
import NewPassword from './pages/Signin/NewPassword';
import Signup from './pages/Signup/Signup';
import SignupInfo from './pages/Signup/Info/SignupInfo';
import SignupDone from './pages/Signup/SignupDone';
import SignupTerms from './pages/Signup/Terms/SignupTerms';
import Applying from './pages/Applying/Applying';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/findpassword" component={FindPassword} />
          <Route exact path="/newpassword/:token" component={NewPassword} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signupinfo" component={SignupInfo} />
          <Route exact path="/signupdone" component={SignupDone} />
          <Route exact path="/signupterms" component={SignupTerms} />
          <Route exact path="/applying" component={Applying} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
