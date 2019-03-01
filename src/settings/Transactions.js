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
import { SettingsNavbar } from './components';


class Transactions extends Component {

  render() {
    return (
      <div>
        <SettingsNavbar />
        <div className="jumbotron">
            <h2>Mes Transactions</h2>
        </div>
      </div>
    );
  }

}

export default Transactions;
