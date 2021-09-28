import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import FindPassword from './pages/Signin/FindPassword';
import NewPassword from './pages/Signin/NewPassword';
import Signup from './pages/Signup/Signup';
import SignupInfo from './pages/Signup/Info/SignupInfo';
import SignupDone from './pages/Signup/SignupDone';
import SignupTerms from './pages/Signup/Terms/SignupTerms';
import Applying from './pages/Applying/Applying';
import Application_complete from './pages/Applying/Application_complete';
import Nav from './component/Nav';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Submission from './pages/Applying/Submisson';
import Temporary_save from './pages/TemporarySave/Temporary_save';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <PublicRoute exact path="/applying/:id" component={Temporary_save} />
          <PrivateRoute
            exact
            path="/complete/:id"
            component={Application_complete}
          />
          <PrivateRoute exact path="/submission/:id" component={Submission} />
          <PrivateRoute exact path="/applying" component={Applying} />
          <PrivateRoute
            restricted={true}
            exact
            path="/signupdone"
            component={SignupDone}
          />

          <PublicRoute
            restricted={true}
            exact
            path="/signin"
            component={Signin}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/findpassword"
            component={FindPassword}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/newpassword/:token"
            component={NewPassword}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/signup"
            component={Signup}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/signupinfo"
            component={SignupInfo}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/signupterms"
            component={SignupTerms}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
