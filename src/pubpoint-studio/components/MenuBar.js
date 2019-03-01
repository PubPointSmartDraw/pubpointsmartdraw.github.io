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
import TextField from '@material-ui/core/TextField';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import RestoreIcon from '@material-ui/icons/Restore';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpIcon from '@material-ui/icons/Help';
import CameraIcon from '@material-ui/icons/Camera';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SnackBar from './specific-components/SnackBar';

import {APPLICATION_PARAMETERS} from './ApplicationConfiguration';
import HelpModal from './specific-components/HelpModal';
import AlertDialog from './specific-components/AlertDialog';
import AnimationPlayer from './specific-components/AnimationPlayer';
import PreviewDownloadModal from './specific-components/PreviewDownloadModal';

import logo from '../images/logowhite.png';

/**
* Composant responsable de la gestion de la bare de menu de l'application.
*/
class MenuBar extends Component {
  /**
  * Variable d'état du composant.
  */
  state = {
    alertDialogCreditOpen: false,
    animationPreviewWindowOpen: false,
    snackbarOpen: false,
    helpWindowOpen: false,
    canDownloadAnimationVideo: false,
  };

  /**
  * Ferme le dialog récapitulatif du nombre de crédits de l'utilisateur.
  */
  handlerAlertDialogCreditClose = () => {
    this.setState({
      alertDialogCreditOpen: false,
    });
  };

  /**
  * Prend en main le clic sur le bouton shoppingCart dans lequel est visible le nombre de crédits de l'utilisateur.
  */
  handlerShoppingCartClicked = () => {
    this.setState({
      alertDialogCreditOpen: true,
    });
  };

  /**
  * Ferme la fenêtre de prévisualisation de la vidéo.
  */
 handlerCloseAnimationPreviewWindow = () => {
   this.setState({ animationPreviewWindowOpen: false });
 };

 /**
 * Ouvre la fenêtre de prévisualisation de la vidéo.
 */
 handlerOpenAnimationPreviewWindow = () => {
   this.setState(
     {
       animationPreviewWindowOpen: true,
       snackbarOpen:true,
    });
 };

 /**
 * Ferme la fenêtre modale d'aide.
 */
 handlerCloseHelpWindow = () => {
   this.setState({ helpWindowOpen: false });
 };

 /**
 * Ouvre la fenêtre modale d'aide.
 */
 handlerOpenHelpWindow = () => {
   this.setState({ helpWindowOpen: true });
 };

 /**
 * Ferme le snackbar d'alerte de sauvegarde avant prévisualisation.
 * @param {event} event - La source de l'évènement.
 * @param {string} reason - La raison de la fermeture du snackbar.
 */
 handleSnackBarClose = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }
   this.setState({ snackbarOpen: false });
 };

 /**
 * Ecoute les modifications du nom du projet dans l'EditText.
 * @param {event} event - La source de l'évènement.
 */
  onProjectNameChange = (event) => {
    this.props.onUpdateProjectName(event.target.value);
  };


  /**
  * Affiche les éléments d'interface du composant.
  */
  render() {
    const alertDialogCreditOpen = this.state.alertDialogCreditOpen;
    const projectName = this.props.projectName;
    const downloadAnimationVideo = this.state.canDownloadAnimationVideo;

    return (
      <div className="Menu-bar">
        <Grid container>
            <Grid item xs={1} sm={1}>
              <img
                alt="PPSD"
                src={logo}
                className="App-logo"
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <Toolbar>
                <Tooltip title="Nouvelle animation">
                  <a>
                    <AddIcon onClick={this.props.onCreateNewProject}/>
                  </a>
                </Tooltip>
                <Tooltip title="Enregistrer">
                  <a className="Menu-icon">
                    <SaveOutlinedIcon onClick={this.props.onSaveProject}/>
                  </a>
                </Tooltip>
                {/*<Tooltip title="Annuler">
                  <a className="Menu-icon">
                    <RestoreIcon />
                  </a>
                </Tooltip>
                <Tooltip title="Refaire">
                  <a className="Menu-icon">
                    <DeleteOutlinedIcon />
                  </a>
                </Tooltip>*/}
              </Toolbar>
            </Grid>
            <Grid item xs={1} sm={1}>
              <Tooltip title="Abonnements">
                <IconButton aria-label="Cart" className="Color-white" onClick={this.handlerShoppingCartClicked}>
                    <Badge badgeContent={APPLICATION_PARAMETERS.CREDIT} color="primary">
                      <ShoppingCartIcon />
                    </Badge>
                </IconButton>
              </Tooltip>
            </Grid>
          <Grid item xs={4} sm={4}>
            <form>
              <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <TextField placeholder="Titre du projet" className="Project-title-display"
                               value={projectName}
                               onChange={this.onProjectNameChange}/>
                  </div>
              </div>
            </form>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Toolbar>
              <Tooltip title="Prévisualiser">
                <a className="Menu-icon">
                  <CameraIcon onClick={this.handlerOpenAnimationPreviewWindow}/>
                </a>
              </Tooltip>
              <Tooltip title="Réglages">
                <a className="Menu-icon">
                  <SettingsOutlinedIcon />
                </a>
              </Tooltip>
              <Tooltip title="Aide">
                <a className="Menu-icon">
                  <HelpIcon onClick={this.handlerOpenHelpWindow}/>
                </a>
              </Tooltip>
            </Toolbar>
          </Grid>
        </Grid>
        <AlertDialog alertDialogOpen={alertDialogCreditOpen}
                     alertDialogTitle={"Vos abonnements"}
                     alertDialogMessage={"Vous disposez actuellement de "+APPLICATION_PARAMETERS.CREDIT+
                     " abonnement(s). Les abonnements vous donnent la possibilité de convertir vos créations "+
                     "en des fichiers vidéo (MP4). Pour en avoir plus, visitez le menu Transaction de votre panel "+
                     "d'administration."}
                     alertDialogHandleClose={this.handlerAlertDialogCreditClose}/>

         <PreviewDownloadModal animationPreviewWindowOpen={this.state.animationPreviewWindowOpen}
                               onCloseAnimationPreviewWindow={this.handlerCloseAnimationPreviewWindow}
                               objectList={this.props.objectList}
                               projectName={this.props.projectName} />

         <SnackBar vertical={"bottom"}
                   horizontal={"left"}
                   open={this.state.snackbarOpen}
                   variant={"success"}
                   duration={3000}
                   message={"Veillez sauvegarder le projet avant de prévisualiser pour avoir les dernières modifications."}
                   onClose={this.handleSnackBarClose}/>

         <Modal
           open={this.state.helpWindowOpen}
           onClose={this.handlerCloseHelpWindow}
         >
           <Paper className="Screen-player">

           </Paper>
         </Modal>
      </div>
    );
  }
}

export default MenuBar;
