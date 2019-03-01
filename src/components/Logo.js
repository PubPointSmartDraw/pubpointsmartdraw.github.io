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

class Logo extends React.Component {
  render() {
    return <div className="d-flex justify-content-center">
              <img src={this.props.logo} width="160" height="150" className="d-inline-block logo-image-2" alt="Smart Draw" />
            </div>
  }
}

export default Logo;
