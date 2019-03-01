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
import { AuthenticationNavbar } from './components';
import { AuthInput } from './components';
import { Logo } from '../components';


class VerifyEmail extends Component {

  render() {
    return (
      <div>
        <AuthenticationNavbar />
        <div className="d-flex flex-column justify-content-center">
            <Logo logo="images/ic3.png"/>
            <form className="d-flex flex-column justify-content-center">
              <AuthInput type='text' name='verifycode' placeholder='Code de vérification' />
              <button> Vérifier</button>
            </form>
        </div>
      </div>
    );
  }

}

export default VerifyEmail;
