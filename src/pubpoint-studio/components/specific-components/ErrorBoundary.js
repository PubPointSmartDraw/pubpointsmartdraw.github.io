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
import { Rect } from 'react-konva';

/**
* Composant responsable de la capture des erreurs.
*/
class ErrorBoundary extends Component {
  /**
  * Variable d'état du composant.
  */
  state = { error: null, errorInfo: null };
  /**
  *Contructeur du Composant
  * @constructor
  */
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  /**
  * Gestionnaire de capture d'erreurs.
  */
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.log(error);
    console.log(errorInfo);
  }
  /**
  * Affiche les éléments d'interface du composant.
  */
  render() {
    if (this.state.errorInfo) {
      return (
        <Rect
         x={0}
         y={0}
         width={100}
         height={80}
         fill={"red"}
         shadowBlur={0}
       />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
