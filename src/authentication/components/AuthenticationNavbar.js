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
import AuthInput from './AuthInput';
import Logo from '../../components/Logo';
import './AuthenticationNavbar.css';


class AuthenticationNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <Link to="/Home" className="navbar-brand navbar-logo">
            <img src="images/logoblack.png" width="120" height="60" className="d-inline-block" alt="Smart Draw" />
          </Link>
          <div className="pull-right">
            <Link className="btn btn-outline-dark auth-menu-button" to="/Register">Compte</Link>
            <Link className="btn btn-outline-dark auth-menu-button" to="/Login">Connexion</Link>
          </div>
        </div>
      </nav>
    );
  }

}

export default AuthenticationNavbar;
