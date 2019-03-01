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
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import AnimationPlayer from './specific-components/AnimationPlayer';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ColorPicker from 'material-ui-color-picker';
import {ColorLens} from '@material-ui/icons';

import play from '../images/icons/play.png';
import grid from '../images/icons/grid.png';
import zoomout from '../images/icons/zoom-out.png';
import zoomin from '../images/icons/zoom-in.png';
var counter = 0;

/**
* Composant responsable de la gestion des boutons d'action situés en dessous de la zone de création.
*/
class ControlBar extends Component {
  /**
  * Variable d'état du composant.
  */
  state = {
    openPlayWindow: false,
  };

  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props) {
    super(props);
    this.state = {
      openPlayWindow: false,
    };
  }

  /**
  * Gestionnaire de l'ouverture de la fenêtre modale de prévisualisation de la scène.
  */
  handleOpenPlayWindow = () => {
     this.setState({ openPlayWindow: true });
   };
   /**
   * Gestionnaire de la fermeture de la fenêtre de prévisualisation de la vidéo.
   */
    handleClosePlayWindow = () => {
      this.setState({ openPlayWindow: false });
    };
   /**
   * Gestionnaire de l'affichage des grilles sur la zone de création.
   */
  handleClickGrid = () => {
    this.props.onShowGridClicked();
  };
  /**
  * Gestionnaire du zoom de la zone de création.
  */
  handleClickZoomout = () => {

  };
  /**
  * Gestionnaire de dézoom de la zone de création.
  */
  handleClickZoomin = () => {

  };

   /**
   * Affiche les éléments d'interface du composant.
   */
  render() {
    const objectList = this.props.objectList;
    //console.log(this.props.backgroundSceneColor);
    return (
      <Grid item xs={11} sm={11} container className="Control-bar">
        <Toolbar className="Float-left Padding-none Color-white">
          <Tooltip title="Grille">
            <a className="Menu-icon" onClick={this.handleClickGrid}>
              <Avatar alt="Grille" className="Small-icon"
                      src={grid}>
              </Avatar>
            </a>
          </Tooltip>
          {/*<Tooltip title="Réduire">
            <a className="Menu-icon" onClick={this.handleClickZoomout}>
              <Avatar alt="Réduire" className="Small-icon"
                      src={zoomout}>
              </Avatar>
            </a>
          </Tooltip>
          <Tooltip title="Réduire">
            <a className="Menu-icon" onClick={this.handleClickZoomin}>
              <Avatar alt="Agrandir" className="Small-icon"
                      src={zoomin}>
              </Avatar>
            </a>
          </Tooltip>*/}
        </Toolbar>

        <Toolbar className="Parent-align-center">
          <Tooltip title="Lire la scène">
            <a className="Menu-icon" onClick={this.handleOpenPlayWindow}>
              <Avatar alt="Lire"
                      src={play}>
              </Avatar>
            </a>
          </Tooltip>
        </Toolbar>

        <FormControl>
          <InputLabel className="Color-white">Arrière plan</InputLabel>
          <Input
            onChange={event => this.props.onSceneBackgroundUpdated({backgroundColor: event.target.value})}
            startAdornment={<InputAdornment position="start"><ColorLens /></InputAdornment>}
            className="Color-white Cursor-pointer"
            placeholder="green/#00FF00"
            value={this.props.backgroundSceneColor}
            type="color"
          />
        </FormControl>

        <Modal
          open={this.state.openPlayWindow}
          onClose={this.handleClosePlayWindow}
        >
          <Paper className="Screen-player">
            <AnimationPlayer objectList={objectList}
                             backgroundSceneColor={this.props.backgroundSceneColor}/>
          </Paper>
        </Modal>
      </Grid>
    );
  }
}

export default ControlBar;
