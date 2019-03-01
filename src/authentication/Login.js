/*****************************************************************************
 *
 * PubPoint Smart Draw Web application
 *
 * Developed for PubPoint Strategy by Eng. FEUYAN TCHOUO
 *
 * Copyright (C) PubPoint Strategy - All rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by FEUYAN TCHOUO <tca1audricfeuyan@gmail.com>, November 2018.
 *
 *****************************************************************************
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationNavbar } from './components';
import { AuthInput } from './components';
import { Logo } from '../components';


class Login extends Component {

  render() {
    return (
        <div>
          <AuthenticationNavbar />
          <div className="d-flex flex-column justify-content-center">
              <Logo logo="images/ic2.png"/>
              <form className="d-flex flex-column justify-content-center">
                <AuthInput type='email' name='useremail' placeholder='Email' />
                <AuthInput type='password' name='userpassword' placeholder='Mot de passe' />
                <button> Se connecter</button>
              </form>
              <div className='social-signin d-flex justify-content-center'>
                <button className="fb"><i className="fa fa-facebook" aria-hidden="true"></i></button>
                <button className="tw"><i className="fa fa-twitter" aria-hidden="true"></i></button>
              </div>
                <Link to="/Reset-password" className="d-flex justify-content-start">Mot de passe oublié ?</Link>
          </div>
        </div>
    );
  }

}

export default Login;
