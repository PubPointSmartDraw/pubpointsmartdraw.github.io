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
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';

import ImageAsset from './specific-components/ImageAsset';
import ControlBar from './ControlBar';
import CreationBoard from './specific-components/CreationBoard';
import AssetContextMenu from './specific-components/AssetContextMenu';
import AssetMoreOptionPopover from './specific-components/AssetMoreOptionPopover';
import AssetEditTextfieldMenu from './specific-components/AssetEditTextfieldMenu';

/**
* Composant responsable de la gestion de la zone de création de la vidéo.
*/
class DesignBoard extends Component {
  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props) {
    super(props);
    const currentSceneObjects = this.props.objectList;
    this.state = {
      images: currentSceneObjects,
      defaultImage: null,
      selectedShapeName: '',
      assetContextMenuOpen: false,
      assetMoreOptionOpen: false,
      assetEditTextfieldMenuOpen: false,
      assetEditTextfieldMenuX: 0,
      assetEditTextfieldMenuY: 0,
      assetContextMenuX: 0,
      assetContextMenuY: 0,
      assetSelectedIndex: 0,
      assetSelectedTextfield: {},
      menuOptionDrawerOpen: false,
      showGrid: false,
    };
  }

  /**
  * Gestionnaire de l'affichage du menu contextuel d'un objet.
  * @param {event} event - Source de l'évènement.
  */
  handlerDisplayMenuDesignBoardElement = (e, index) => {
    this.setState({
      assetContextMenuOpen: true,
      assetSelectedIndex: index,
      assetContextMenuX: e.evt.clientX,
      assetContextMenuY: e.evt.clientY,
      selectedAssetObject: e.target.name(),
    });
  };
  /**
  * Gestionnaire de la fermeture du menu des opérations sur un objet.
  * @param {event} event - Source de l'évènement. 
  */
  handlerCloseMenuDesignBoardElement = (event) => {
    this.setState({
      assetOptionMenuOpen: false,
      assetOptionMenuAnchorElement: null,
    });
  };
  /**
  * Désactive le comportement par défaut d'un évènement.
  * @param {event} event - Source de l'évènement.
  */
  preventDefaultBehaviour = (event) => {
    event.preventDefault();
  };
  /**
  * Gestionnaire de l'affichage du menu contextuel d'un objet.
  * @param {event} event - Source de l'évènement.
  * @param {number} index - Index de l'objet dont on veux afficher le menu contextuel.
  */
  handlerDisplayAssetContextMenu = (event, index) => {
    this.setState({
      assetContextMenuOpen: true,
      assetSelectedIndex: index,
    });
  };
  /**
  *Gestionnaire de la fermeture du menu contextuel d'un objet.
  */
  handlerCloseAssetContextMenu = () => {
    this.setState({
      assetContextMenuOpen: false,
      assetContextMenuAnchorElement: null,
    });
  };
  /**
  * Gestionnaire de la fermeture du menu des opérations sur un objet.
  */
  handlerCloseAssetMoreOption = () => {
    this.setState({
      assetMoreOptionOpen: false,
    });
  };
  /**
  * Gestionnaire de l'affichage du menu des opérations sur un objet.
  */
  handlerOpenAssetMoreOption = () => {
    this.setState({
      assetMoreOptionOpen: true,
    });
  };
  /**
  * Gestion de l'édition' d'un objet sur l'interface de création.
  */
  handlerEditAsset = () => {
    this.props.onSceneObjectEdit(this.state.assetSelectedIndex);
  };
  /**
  * Gestion de la suppression d'un objet sur l'interface de création.
  */
  handlerDeleteAsset = () => {
    this.props.onSceneObjectDelete(this.state.assetSelectedIndex);
    this.setState({
      assetSelectedIndex: 0,
    });
  };
  /**
  * Avance un objet dans le plan de la scène.
  */
  handlerBringAssetForward = () => {
    this.props.onSceneObjectBringForward(this.state.assetSelectedIndex);
  };
  /**
  * Reculer un objet dans le plan de la scène.
  */
  handlerBringAssetBackward = () => {
    this.props.onSceneObjectBringBackward(this.state.assetSelectedIndex);
  };
  /**
  * Afficher le menu contextuel d'une zone de texte et marquer le textfield comme étant sélectionné.
  * @param {object} textfield - La zone de texte sélectionnée.
  * @param {event} event - La source de l'évènement.
  */
  handlerDisplayMenuTextfield = (textfield, event) => {
    this.setState({
      assetEditTextfieldMenuOpen: true,
      assetSelectedTextfield: textfield,
      assetEditTextfieldMenuX: event.evt.clientX + (parseInt(textfield.width)/2),
      assetEditTextfieldMenuY: event.evt.clientY,
    });
  };

  /**
  * Gestionnaire du clic sur une forme géométrique.
  * @param {object} geometricForm - La forme géométrique sélectionnée.
  * @param {event} event - La source de l'évènement.
  */
  handlerGeometricFormClicked= (geometricForm, event) => {
    this.setState({
      assetSelectedTextfield: geometricForm,
    });
  };

  /**
  * Gestionnaire de la mise à jour d'une zone de texte.
  * @param {object} value - Paramètres à mettre à jour dans la zone de texte.
  */
  handlerUpdateTextfield = (value) => {
    var oldTextfieldValue = this.state.assetSelectedTextfield;
    if(value.inputText){
      oldTextfieldValue.inputText = value.inputText;

    }else if(value.xValue){
      oldTextfieldValue.xValue = value.xValue;

    }else if(value.yValue){
      oldTextfieldValue.yValue = value.yValue;

    }else if(value.fontSize){
      oldTextfieldValue.fontSize = value.fontSize;

    }else if(value.fontFamily){
      oldTextfieldValue.fontFamily = value.fontFamily;

    }else if(value.color){
      oldTextfieldValue.color = value.color;

    }else if(value.align){
      oldTextfieldValue.align = value.align;

    }else if(value.width){
      oldTextfieldValue.width = value.width;

    }

    this.setState({
      assetSelectedTextfield : oldTextfieldValue,
    });
  };
  /**
  * Gestionnaire de la fermeture du menu contextuel d'une zone de texte.
  */
  handlerCloseAssetEditTextfieldMenuOpen = () => {
    this.setState({
      assetEditTextfieldMenuOpen: false,
      assetSelectedTextfield: {},
      assetEditTextfieldMenuX: 0,
      assetEditTextfieldMenuY: 0,
    });
  };
  /**
  * Gestionnaire de l'affichage des grilles sur l'interface de création.
  */
  handlerShowGridClicked = () => {
    this.setState({
      showGrid: !this.state.showGrid,
    });
  };
  /**
  * Affiche les éléments d'interface du composant.
  */
  render() {

    const assetContextMenuOpen = this.state.assetContextMenuOpen,
          assetMoreOptionOpen = this.state.assetMoreOptionOpen,
          assetEditTextfieldMenuOpen = this.state.assetEditTextfieldMenuOpen,
          assetEditTextfieldMenuX = this.state.assetEditTextfieldMenuX,
          assetEditTextfieldMenuY = this.state.assetEditTextfieldMenuY,
          data = this.state.assetSelectedTextfield,
          assetContextMenuX = this.state.assetContextMenuX,
          assetContextMenuY = this.state.assetContextMenuY,
          index = this.state.assetSelectedIndex,
          menuOptionDrawerOpen = this.state.menuOptionDrawerOpen,
          showGrid = this.state.showGrid;

   var enterEffect = "", exitEffect = "", entranceDelay=0, exitDelay=0, entranceDuration=500, exitDuration=500;
   if(this.props.objectList.length > index){
     enterEffect = this.props.objectList[index].enterEffect;
     exitEffect = this.props.objectList[index].exitEffect;
     entranceDelay = this.props.objectList[index].entranceDelay;
     entranceDuration = this.props.objectList[index].entranceDuration;
     exitDelay = this.props.objectList[index].exitDelay;
     exitDuration = this.props.objectList[index].exitDuration;
   }

    return (
      <Grid item xs={9} sm={9} container className="Design-board" onContextMenu={this.preventDefaultBehaviour}>
        <Grid className="Board" id="board">
          <CreationBoard objectList={this.props.objectList}
                         onAssetUpdated={this.props.onAssetUpdated}
                         onAssetContextMenuOpen={this.handlerDisplayAssetContextMenu}
                         onAssetClicked={this.handlerDisplayMenuDesignBoardElement}
                         onTextFieldClicked={this.handlerDisplayMenuTextfield}
                         onSceneUpdated={this.props.onSceneUpdated}
                         showGrid={showGrid}
                         backgroundSceneColor={this.props.backgroundSceneColor}/>

           <AssetContextMenu assetOptionMenuOpen={assetContextMenuOpen}
                             onCloseMenuDesignBoardElement={this.handlerCloseAssetContextMenu}
                             anchorPositionX={assetContextMenuX}
                             anchorPositionY={assetContextMenuY}
                             onEditAsset={this.handlerEditAsset}
                             onDeleteAsset={this.handlerDeleteAsset}
                             onBringAssetForward={this.handlerBringAssetForward}
                             onBringAssetBackward={this.handlerBringAssetBackward}
                             onAssetMoreOption={this.handlerOpenAssetMoreOption} />

           <AssetMoreOptionPopover assetOptionMenuOpen={assetMoreOptionOpen}
                                   onCloseMenuDesignBoardElement={this.handlerCloseAssetMoreOption}
                                   anchorPositionX={0}
                                   anchorPositionY={0}
                                   assetIndex={index}
                                   onEnterEffectChange={this.props.onEnterEffectChange}
                                   onEntranceDelayChange={this.props.onEntranceDelayChange}
                                   onEntranceDurationChange={this.props.onEntranceDurationChange}
                                   onExitEffectChange={this.props.onExitEffectChange}
                                   onExitDelayChange={this.props.onExitDelayChange}
                                   onExitDurationChange={this.props.onExitDurationChange}
                                   enterEffect={enterEffect}
                                   entranceDelay={entranceDelay}
                                   entranceDuration={entranceDuration}
                                   exitEffect={exitEffect}
                                   exitDelay={exitDelay}
                                   exitDuration={exitDuration}/>

         <AssetEditTextfieldMenu assetEditTextfieldMenuOpen={assetEditTextfieldMenuOpen}
                                 data={data}
                                 onCloseEditTextfieldMenu={this.handlerCloseAssetEditTextfieldMenuOpen}
                                 anchorPositionX={assetEditTextfieldMenuX}
                                 anchorPositionY={assetEditTextfieldMenuY}
                                 onEditTextfield={this.handlerUpdateTextfield}
                                 onUpdateEditTextfield={this.props.onAssetUpdated}/>

          <ControlBar objectList={this.props.objectList}
                      backgroundSceneColor={this.props.backgroundSceneColor}
                      onSceneBackgroundUpdated={this.props.onSceneUpdated}
                      onShowGridClicked={this.handlerShowGridClicked}/>
        </Grid>
      </Grid>
    );
  }
}

export default DesignBoard;
