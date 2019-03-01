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
import './SettingsNavbar.css';


class SettingsNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <Link to="/Home" className="navbar-brand navbar-logo">
            <img src="images/logoblack.png" width="120" height="60" className="d-inline-block" alt="Smart Draw" />
          </Link>
          <div className="d-flex flex-row pull-right navbar-nav">
            <Link className="nav-link font-weight-light font-small" to="/My-Pubpoints">Mes PubPoints</Link>
            <Link className="nav-link ml-4 font-weight-light font-small" to="/Transactions">Transactions</Link>
            <Link className="nav-link ml-4 font-weight-light font-small" to="/Tutorial">Tutoriel</Link>
            <Link className="nav-link ml-4 font-weight-light font-small" to="/Contact-us">Nous contacter</Link>
            <Link className="nav-link ml-4 font-weight-light font-small" to="/Profile">Profil</Link>
          </div>
        </div>
      </nav>
    );
  }

}

export default SettingsNavbar;
