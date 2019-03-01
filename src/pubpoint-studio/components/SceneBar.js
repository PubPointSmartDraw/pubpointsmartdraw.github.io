
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
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import OpenInNewRounded from '@material-ui/icons/OpenInNewRounded';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import SceneItemContextMenu from './specific-components/SceneItemContextMenu';

import image from '../images/logoblack.png';

/**
* Composant responsable de l'ajout et de la suppression de scènes dans le projet. Il est visible dans la panel vertical de gauche dans l'application.
*/
class SceneBar extends Component {
  /**
  * Variable d'état du composant.
  */
  state = {
    assetOptionMenuOpen: false,
    assetOptionMenuAnchorElement: null,
    indexToDelete: 0,
  };

  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props) {
    super(props);
    this.handlerAddNewScene = this.handlerAddNewScene.bind(this);
    this.handlerDeleteScene = this.handlerDeleteScene.bind(this);
  }

  /**
  * Gestionnaire de l'ajout d'une nouvelle scène.
  * @param {object} scene - Scène à ajouter.
  */
  handlerAddNewScene(scene){
    this.props.onAddNewScene(scene);
  }

  /**
  * Gestionnaire de la sélection d'une scène.
  * @param {event} event - Source de l'évènement.
  * @param {number} index - Index de la scène sélectionnée.
  */
  handlerSceneSelected = (event, index) => {
    if(!this.state.assetOptionMenuOpen){
      this.props.onSceneSelected(event, index);
    }
  };

  /**
  * Gestionnaire de la suppression d'une scène.
  * @param {event} event - Source de l'évènement.
  * @param {number} index - Index de la scène à supprimer.
  */
  handlerDeleteScene(event, index){
    event.preventDefault();
    this.setState({
      assetOptionMenuOpen: false,
      assetOptionMenuAnchorElement: null,
    });
    if(index>0){
      this.props.onDeleteScene(event, index);
    }
  }

  /**
  * Gestionnaire de l'affichage du menu contextuel des scène.
  * @param {event} event - Source de l'évènement.
  * @param {number} index - Index de la scène pour laquelle il faut afficher le menu contextuel.
  */
  handlerDisplayMenuDesignBoardElement = (event, index) => {
    event.preventDefault();
    this.setState({
      assetOptionMenuOpen: true,
      assetOptionMenuAnchorElement: event.currentTarget,
      indexToDelete: index,
    });
  };

  /**
  * Gestionnaire de la fermeture du menu contextuel des scènes.
  */
  handlerCloseMenuDesignBoardElement = () => {
    this.setState({
      assetOptionMenuOpen: false,
      assetOptionMenuAnchorElement: null,
    });
  };

  /**
  * Affiche les éléments d'interface du composant.
  */
  render() {
    const sceneList = this.props.sceneList;
    const nextSceneIndex = this.props.sceneListSize + 1;
    const nextScene = {
      snapshot: null,
      transition: '',
      duration: 0,
      backgroundColor: "#FFFFFF",
    };
    const assetOptionMenuOpen = this.state.assetOptionMenuOpen;
    const anchorElement = this.state.assetOptionMenuAnchorElement;
    return (
      <Grid item xs={2} sm={2}>
        <GridList cellHeight={110} cols={1} className="Scene-bar">
          {sceneList.map((tile, index) => (
           <GridListTile key={tile.snapshot+":"+index} className="Scene-item-display"
                         onClick={(event) => this.handlerSceneSelected(event, index)}
                         onContextMenu={(event) => this.handlerDisplayMenuDesignBoardElement(event, index)} >
             <img src={tile.snapshot} alt={tile.title}/>

             <GridListTileBar
               title={<span className="Scene-title">{"Scene " + (index+1)}</span>}
               subtitle={<span>{tile.transition}</span>}
             />
             <SceneItemContextMenu assetOptionMenuOpen={assetOptionMenuOpen}
                                   onCloseMenuDesignBoardElement={this.handlerCloseMenuDesignBoardElement}
                                   anchorElement={anchorElement}
                                   onDeleteScene={this.handlerDeleteScene}
                                   itemIndex={index} />
           </GridListTile>
         ))}
         <GridListTile key={image} className="Scene-item-display Last-scene">
           <Button variant="fab" className="New-scene-button" onClick={() => this.handlerAddNewScene(nextScene)}>
             <AddIcon />
           </Button>
          </GridListTile>
       </GridList>

      </Grid>
    );
  }
}

export default SceneBar;
