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
import DesignBoard from './DesignBoard';
import ToolBar from './ToolBar';
import TimelineControl from './TimelineControl';

/**
* Composant responsable de la zone de travail (il s'agit de tout l'espace situé à droite la bare des scènes et en dessous de la barre des menus).
*/
class WorkSpace extends Component {
  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props) {
    super(props);
    this.handlerSceneObjectAdd = this.handlerSceneObjectAdd.bind(this);
    this.handlerSceneObjectDelete = this.handlerSceneObjectDelete.bind(this);
    this.handlerSceneObjectBringForward = this.handlerSceneObjectBringForward.bind(this);
    this.handlerSceneObjectBringBackward = this.handlerSceneObjectBringBackward.bind(this);
  }
  /**
  * Gestionnaire de l'ajout d'un objet dans la scène.
  * @param {object} object - Objet à ajouter.
  */
  handlerSceneObjectAdd(object){
    this.props.onAddNewSceneObject(object);
  }
  /**
  * Gestionnaire de la suppression d'un objet dans la scène.
  * @param {number} index - Index de l'objet à supprimer.
  */
  handlerSceneObjectEdit(index){
    console.log("Scene object updated "+index);
  }
  /**
  * Gestionnaire de la suppression d'un objet dans la scène.
  * @param {number} index - Index de l'objet à supprimer.
  */
  handlerSceneObjectDelete(index){
    this.props.onDeleteSceneObject(index);
  }
  /**
  * Gestionnaire de la mise en avant d'un objet dans le plan de la scène.
  * @param {number} index - Index de l'objet à mettre en avant dans le plan.
  */
  handlerSceneObjectBringForward(index){
    this.props.onBringAssetForward(index);
  }
  /**
  * Gestionnaire de la mise en arrière d'un object dans le plan de la scène.
  * @param {number} index - Index de l'objet à mettre en arrière.
  */
  handlerSceneObjectBringBackward(index){
    this.props.onBringAssetBackward(index);
  }

  /**
  * Affiche les éléments d'interface du composant.
  */
  render(){
    const currentSceneObjects = this.props.objectList;
    const sceneList = this.props.sceneList;
    var selectedScene = this.props.selectedScene;
    var backgroundSceneColor = "white";
    if(this.props.sceneList.length > selectedScene){
      backgroundSceneColor = this.props.sceneList[selectedScene].backgroundColor;
    }

    return(
      <Grid item xs={10} sm={10} container className="Work-space">
        <DesignBoard onSceneObjectDelete={this.handlerSceneObjectDelete}
                     onSceneObjectEdit={this.handlerSceneObjectEdit}
                     onSceneObjectBringForward={this.handlerSceneObjectBringForward}
                     onSceneObjectBringBackward={this.handlerSceneObjectBringBackward}
                     onSceneUpdated={this.props.onSceneUpdated}
                     objectList={currentSceneObjects}
                     backgroundSceneColor={backgroundSceneColor}
                     onAssetUpdated={this.props.onSceneObjectUpdated}
                     onEnterEffectChange={this.props.onSceneObjectUpdated}
                     onEntranceDelayChange={this.props.onSceneObjectUpdated}
                     onEntranceDurationChange={this.props.onSceneObjectUpdated}
                     onExitEffectChange={this.props.onSceneObjectUpdated}
                     onExitDelayChange={this.props.onSceneObjectUpdated}
                     onExitDurationChange={this.props.onSceneObjectUpdated}
                     />
        <ToolBar onSceneObjectAdd={this.handlerSceneObjectAdd}/>
        <TimelineControl objectList={currentSceneObjects}
                         sceneList={sceneList}
                         currentSceneIndex={this.props.selectedScene}/>
      </Grid>
    );
  }
}

export default WorkSpace;
