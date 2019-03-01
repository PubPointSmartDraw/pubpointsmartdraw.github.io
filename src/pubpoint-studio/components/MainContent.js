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
import SceneBar from './SceneBar';
import WorkSpace from './WorkSpace';
import AlertDialog from './specific-components/AlertDialog';

const DEFAULT_STATE_VALUE = {
  sceneList: [{
    snapshot: null,
    transition: '',
    duration: 0,
    backgroundColor: "#FFFFFF",
  }],
  sceneListSize: 1,
  sceneObjects: [[]],
  selectedSceneIndex: 0,
  alertDialogAddSceneOpen: false,
};

const TRANSFORM_CHANGE = "Transform-change";
const POSITION_CHANGE = "Position-change";
const UPDATE_ENTER_EFFECT = "Enter-effect-change";
const UPDATE_EXIT_EFFECT = "Exit-effect-change";
const UPDATE_ENTRANCE_DELAY = "Entrance-delay-change";
const UPDATE_ENTRANCE_DURATION = "Entrance-duration-change";
const UPDATE_EXIT_DELAY = "Exit-delay-change";
const UPDATE_EXIT_DURATION = "Exit-duration-change";
const UPDATE_TEXTFIELD = "Update-textfield";

/**
* Composant regroupant et gérant tous les éléments d'interface situés en dessous de la barre des menus.
*/
class MainContent extends Component {
  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE_VALUE;
  }

  /**
  * Fonction de la phase "après mise à jour" du cycle de vie du composant.
  */
  componentDidUpdate(){
    if(this.props.canSave){
      this.props.onSaveProject(this.state.sceneList, this.state.sceneListSize, this.state.sceneObjects);
      this.props.onDeactivateProjectSave();
    }
  }

  /**
  * Gestionnaire de l'ajout d'une nouvelle scène.
  * @param {object} scene - La scène à ajouter.
  */
  handlerAddNewScene = (scene) => {
    const sList = this.state.sceneList;
    const updatedSceneList = sList.concat([scene]);
    const oList = this.state.sceneObjects;
    const updatedObjectList = oList.concat([[]]);
    const listSize = this.state.sceneListSize + 1;

    this.setState({
      sceneList: updatedSceneList,
      sceneListSize: listSize,
      sceneObjects: updatedObjectList,
    });
  };

  /**
  * Ecouteur de la scène sélectionnée par l'utilisateur. Cette fonction définie la scène active.
  * @param {event} event - La source de l'évènement.
  * @param {number} index - L'index de la scène sélectionnée.
  */
  handlerSceneSelected = (event, index) => {
    this.setState({
      selectedSceneIndex: index
    });
  };

  /**
  * Supprime la scène sélectionnée par l'utilisateur.
  * @param {event} event - La source de l'évènement.
  * @param {number} indexToDelete - L'index de la scène à supprimer.
  */
  handlerDeleteScene = (event, indexToDelete) => {
    const sceneList = this.state.sceneList;
    const updatedSceneList = [];
    const sceneObject = this.state.sceneObjects;
    const updatedSceneObject = [];

    event.preventDefault();
    for(let i=0; i<sceneList.length; i++){
      if(i !== indexToDelete){
        updatedSceneList.push(sceneList[i]);
      }
    }

    for(let i=0; i<sceneObject.length; i++){
      if(i !== indexToDelete){
        updatedSceneObject.push(sceneObject[i]);
      }
    }

    this.setState({
      sceneList: updatedSceneList ,
      sceneObjects: updatedSceneObject,
      selectedSceneIndex: 0,
    });
  };

  /**
  * Ajoute un nouvel objet dans la scène active.
  * @param {object} object - L'objet à ajouter à la scène.
  */
  handlerAddNewSceneObject = (object) => {
    const objectList = this.state.sceneObjects;
    const currentIndex = this.state.selectedSceneIndex;
    if(objectList.length !== 0){
      const sObjects = objectList[currentIndex];
      var updatedSobject;
      if(object.type === "landscape"){
        updatedSobject = sObjects.filter(item => item.type !== "landscape");
        updatedSobject = [object].concat(updatedSobject);
      }else if(object.type === "textfield"){
        object.name = object.inputText+"--"+objectList.length;
        updatedSobject = sObjects.concat(object);
      }else{
        updatedSobject = sObjects.concat(object);
      }
      objectList[currentIndex] = updatedSobject;
      this.setState({
        sceneObjects: objectList,
      });
    }else{
      this.setState({
        alertDialogAddSceneOpen: true
      });
    }
  };

  /**
  * Supprime un objet de la scène active.
  * @param {number} objectIndex - L'index de l'objet à supprimer.
  */
  handlerDeleteSceneObject = (objectIndex) => {
    var objectList = this.state.sceneObjects;
    const currentSceneIndex = this.state.selectedSceneIndex;
    if(objectList.length !== 0){
      var sObjects = objectList[currentSceneIndex];
      sObjects.splice(objectIndex, 1);
      objectList[currentSceneIndex] = sObjects;
      this.setState({
        sceneObjects: objectList,
      });
    }
  };

  /**
  * Avance l'objet sélectionné dans le plan de la scène.
  * @param {number} index - Index dans la scène de l'objet à faire avancer.
  */
  handlerBringAssetForward = (index) => {
    var objectList = this.state.sceneObjects;
    const currentSceneIndex = this.state.selectedSceneIndex;
    if(objectList.length !== 0){
      var sObjects = objectList[currentSceneIndex];
      var currentObject = sObjects[index];
      if(sObjects.length > index+1){
        var nextObject = sObjects[index+1];
        sObjects[index] = nextObject;
        sObjects[index+1] = currentObject;
        objectList[currentSceneIndex] = sObjects;
        this.setState({
          sceneObjects: objectList,
        });
      }
    }
  };

  /**
  * Recule l'objet sélectionné dans le plan de la scène.
  * @param {number} index - Index dans la scène de l'objet à faire reculer.
  */
  handlerBringAssetBackward = (index) => {
    var objectList = this.state.sceneObjects;
    const currentSceneIndex = this.state.selectedSceneIndex;
    if(objectList.length !== 0){
      var sObjects = objectList[currentSceneIndex];
      var currentObject = sObjects[index];
      if(index-1 >= 0){
        var previousObject = sObjects[index-1];
        sObjects[index] = previousObject;
        sObjects[index-1] = currentObject;
        objectList[currentSceneIndex] = sObjects;
        this.setState({
          sceneObjects: objectList,
        });
      }
    }
  };

  /**
  * Contrôle la fermeture du message d'erreur d'ajout d'un objet en absence de scène.
  */
  handlerAlertDialogAddSceneClose = () => {
    this.setState({
      alertDialogAddSceneOpen: false,
    });
  };


  /**
  * Gestionnaire de la mise à jour et sauvegarde de l'arrière plan d'une scène.
  * @param {object} data - Données de l'arrière plan à sauvegarder.
  */
  handlerSceneBackgroundUpdated = (data) => {
    const currentSceneIndex = this.state.selectedSceneIndex;
    var updatedSceneList = this.state.sceneList;

    if(data.snapshot){
      updatedSceneList[currentSceneIndex].snapshot = data.snapshot;
    }else if(data.backgroundColor){
      updatedSceneList[currentSceneIndex].backgroundColor = data.backgroundColor;
    }

    this.setState({
      sceneList: updatedSceneList,
    });
  };

  /**
  * Gestionnaire de la mise à jour d'un objet dans la scène.
  * @param {number} index - Index de l'objet à mettre à jour.
  * @param {object} newProps - Nouvelle propriétés de l'objet à mettre à jour.
  * @param {String} updateType - Type de mise à jour à effectuer.
  */
  handlerSceneObjectUpdated = (index, newProps, updateType) => {
    var objectList = this.state.sceneObjects;
    //console.log(newProps);
    const currentSceneIndex = this.state.selectedSceneIndex;
    if(objectList.length !== 0){
      var sObjects = objectList[currentSceneIndex];
      var updatedSobject = sObjects[index];
      if(updateType === POSITION_CHANGE){
        updatedSobject.x = newProps.x;
        updatedSobject.y = newProps.y;

      }else if(updateType === TRANSFORM_CHANGE){
        //console.log(newProps);
        updatedSobject.width = newProps.width;
        updatedSobject.height = newProps.height;
        updatedSobject.rotation = newProps.rotation;

      }else if(updateType === UPDATE_ENTER_EFFECT){
        //console.log(newProps);
        updatedSobject.enterEffect = newProps.enterEffect;

      }else if(updateType === UPDATE_EXIT_EFFECT){
        //console.log(newProps);
        updatedSobject.exitEffect = newProps.exitEffect;

      }else if(updateType === UPDATE_ENTRANCE_DELAY){
        //console.log(newProps);
        updatedSobject.entranceDelay = parseInt(newProps.entranceDelay);

      }else if(updateType === UPDATE_ENTRANCE_DURATION){
        //console.log(newProps);
        updatedSobject.entranceDuration = parseInt(newProps.entranceDuration);

      }else if(updateType === UPDATE_EXIT_DELAY){
        //console.log(newProps);
        updatedSobject.exitDelay = parseInt(newProps.exitDelay);

      }else if(updateType === UPDATE_EXIT_DURATION){
        //console.log(newProps);
        updatedSobject.exitDuration = parseInt(newProps.exitDuration);

      }else if(updateType === UPDATE_TEXTFIELD){
        //console.log(newProps);
        updatedSobject = sObjects.filter(item => item.name===newProps.name);
      }

      sObjects[index] = updatedSobject;
      this.updateSceneDuration(sObjects);
      objectList[currentSceneIndex] = sObjects;
      this.setState({
        sceneObjects: objectList,
      });
    }
  };

  /**
  * Mise à jour de la durée d'une scène.
  * @param {object} currentSceneObjects - Liste des objets de la scène.
  */
  updateSceneDuration = (currentSceneObjects) => {
    var totalDuration = 0;
    currentSceneObjects.map(object => {
      var tempDuration = parseInt(object.entranceDelay) + parseInt(object.entranceDuration)
                           + parseInt(object.exitDelay) + parseInt(object.exitDuration) + 1000;
      totalDuration += tempDuration;
    });

    var scenes = this.state.sceneList;
    scenes[this.state.selectedSceneIndex].duration = totalDuration;
    this.setState({
      sceneList : scenes,
    });
  };

  /**
  * Affiche les éléments d'interface du composant.
  */
  render(){
    const scenes = this.state.sceneList;
    const listSize = this.state.sceneListSize;
    const currentSceneIndex = this.state.selectedSceneIndex;
    var currentSceneObjects = [];
    if(this.state.sceneObjects.length > currentSceneIndex){
      currentSceneObjects = this.state.sceneObjects[currentSceneIndex];
    }
    const alertDialogAddSceneOpen = this.state.alertDialogAddSceneOpen;
    return(
      <div>
        <Grid container>
          <SceneBar sceneList={scenes} sceneListSize={listSize}
                    onAddNewScene={this.handlerAddNewScene}
                    onDeleteScene={this.handlerDeleteScene}
                    onSceneSelected={this.handlerSceneSelected}/>
          <WorkSpace onAddNewSceneObject={this.handlerAddNewSceneObject}
                     onDeleteSceneObject={this.handlerDeleteSceneObject}
                     onBringAssetForward={this.handlerBringAssetForward}
                     onBringAssetBackward={this.handlerBringAssetBackward}
                     onSceneObjectUpdated={this.handlerSceneObjectUpdated}
                     onSceneUpdated={this.handlerSceneBackgroundUpdated}
                     objectList={currentSceneObjects}
                     sceneList={scenes}
                     selectedScene={currentSceneIndex}/>
          <AlertDialog alertDialogOpen={alertDialogAddSceneOpen}
                       alertDialogTitle={"Ajouter un objet dans le panel de création ?"}
                       alertDialogMessage={"Veillez ajouter au préalable une scène dans le panneau de gauche pour pouvoir ajouter un objet."}
                       alertDialogHandleClose={this.handlerAlertDialogAddSceneClose}/>
        </Grid>
      </div>
    );
  }
}

export default MainContent;
