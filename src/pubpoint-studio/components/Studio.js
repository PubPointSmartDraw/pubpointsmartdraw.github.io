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
import '../styles/App.css';
import '../styles/App.scss';

import MenuBar from './MenuBar';
import MainContent from './MainContent';
import AlertDialog from './specific-components/AlertDialog';
import SnackBar from './specific-components/SnackBar';

/**
* Composant principal de l'application rendu par le fichier index.js dans la balise html d'id "root" du fichier index.html du répertoire "public".
*/
class Studio extends Component {
  /**
  * Variable d'état du composant.
  */
  state = {
    projectName: "",
    lastUpdateDate: null,
    sceneList: [],
    sceneListSize: 0,
    sceneObjects: [],
    canSave: false,
    alertDialogSaveProjectOpen: false,
    snackbarOpen: false,
    accessToken: "",
    authenticated: false,
    email: "",
  };

  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props){
    super(props);
    this.state = {
      projectName: "",
      lastUpdateDate: null,
      sceneList: [],
      sceneListSize: 0,
      sceneObjects: [],
      canSave: false,
      alertDialogSaveProjectOpen: false,
      snackbarOpen: false,
    };
  }

  componentWillMount(){
    /*if(localStorage.getItem('access_token')){
      let accessToken = localStorage.getItem('access_token');
      let email = localStorage.getItem('email');
      this.setState({
        accessToken: accessToken,
        authenticated: true,
        email: email,
      });
    }else{
      window.location = "http://www.pubpointsmartdraw.com";
    }*/
  }

/**
* Met à jour le nom du projet.
*/
  updateProjectName = (projectName) => {
    //console.log(projectName);
    this.setState({
      projectName: projectName,
    });
  };

/**
* Active la sauvegarde du projet.
*/
  activateProjectSave = () => {
    this.setState({
      canSave: true,
    });
  };

/**
* Désactive la sauvegarde du Projet.
*/
  deactivateProjectSave = () => {
    this.setState({
      canSave: false,
    });
  };

/**
* Sauvegarde le projet.
* @param {array} sceneList - Liste des scènes.
* @param {int} sceneListSize - La taille de la liste des scènes.
* @param {array} sceneObjects - Liste des objects de toutes les scènes.
*/
  saveProject = (sceneList, sceneListSize, sceneObjects) => {
    if(this.state.projectName === ""){
      this.setState({
        alertDialogSaveProjectOpen: true,
      });
    }else{
      this.setState({
        lastUpdateDate: '',
        sceneList: sceneList,
        sceneListSize: sceneListSize,
        sceneObjects: sceneObjects,
        snackbarOpen: true,
      });
    }
  };

  /**
  * Ouvre un nouvel onglet avec un nouveau projet.
  */
  createNewProject = () => {
    //console.log("ouvre un nouvel onglet avec un nouveau projet");
  };

/**
* Ferme le message d'erreur d'impossibilité de sauvegarde du projet.
* @param {event} e - Source de l'évènement.
*/
  handlerAlertDialogSaveProjectClose = (e) => {
    this.setState({
      alertDialogSaveProjectOpen: false,
    });
  };


  /**
  * Ferme le snackbar d'alerte de confirmation de la sauvegarde du projet.
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
  * Affiche les éléments d'interface du composant.
  *
  */
  render() {
    const canSave = this.state.canSave;
    const alertDialogSaveProjectOpen = this.state.alertDialogSaveProjectOpen;
    const snackbarOpen = this.state.snackbarOpen;
    const objectArrayList = this.state.sceneObjects.concat();
    const sceneList = this.state.sceneList.concat();
    var objectList = [];
    var length = objectArrayList.length;
    var sceneObjects = [];
    var previousSceneDuration = 0;
    for(var i=0; i<length; i++){
      sceneObjects = objectArrayList[i].concat();
      var sceneObjectsSize = sceneObjects.length;
      if(i>=1){
        previousSceneDuration += sceneList[i-1].duration;
      }
      for(var j=0; j<sceneObjectsSize; j++){
        let currentObject = sceneObjects[j];
        currentObject = {...currentObject};
        if(i>=1){
          currentObject.entranceDelay += previousSceneDuration;
          currentObject.exitDelay += previousSceneDuration;
        }
        objectList.push(currentObject);
      }
    }
    /*console.log(objectArrayList);
    console.log(sceneList);*/
    return (
      <div className="App">
        <MenuBar projectName={this.state.projectName}
                 onUpdateProjectName={this.updateProjectName}
                 onSaveProject={this.activateProjectSave}
                 onCreateNewProject={this.createNewProject}
                 objectList={objectList}
                 email={this.state.email}
                 totalSceneDuration={previousSceneDuration}
                 sceneList={this.state.sceneList}/>
        <MainContent canSave={canSave}
                     onSaveProject={this.saveProject}
                     onDeactivateProjectSave={this.deactivateProjectSave}/>
         <AlertDialog alertDialogOpen={alertDialogSaveProjectOpen}
                      alertDialogTitle={"Sauvegarder le projet ?"}
                      alertDialogMessage={"Veillez au préalable saisir un nom pour votre projet dans le champ dédié en haut de l'écran."}
                      alertDialogHandleClose={this.handlerAlertDialogSaveProjectClose}/>


        <SnackBar vertical={"top"}
                  horizontal={"center"}
                  open={snackbarOpen}
                  variant={"success"}
                  duration={2000}
                  message={"Projet enregistré avec succès"}
                  onClose={this.handleSnackBarClose}/>

      </div>
    );
  }
}

export default Studio;
