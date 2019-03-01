import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './home';
import { NoMatch } from './404';
import { Login, Register, ResetPassword, VerifyEmail } from './authentication';
import { Projects, Transactions, Tutorial, Contact, Profile } from './settings';
import { PubpointStudio } from './pubpoint-studio';

export const Routes = () => {

  return (
    <Switch>
      {/* Home */}
      <Route exact path="/Home" component={Home} />
      <Route exact path="/">
        <Redirect to ="/Home" />
      </Route>

      {/* Authentication */}
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Reset-password" component={ResetPassword} />
      <Route exact path="/Verify-email" component={VerifyEmail} />

      {/* Settings */}
      <Route exact path="/My-Pubpoints" component={Projects} />
      <Route exact path="/Transactions" component={Transactions} />
      <Route exact path="/Tutorial" component={Tutorial} />
      <Route exact path="/Contact-us" component={Contact} />
      <Route exact path="/Profile" component={Profile} />

      {/* PubPoint Studio */}
      <Route exact path="/Pubpoint-studio" component={PubpointStudio} />

      <Route component={NoMatch}/>
    </Switch>
  );

};
