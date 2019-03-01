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
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

import CharacterToolBarAssets from './CharacterToolBarAssets';
import ObjectToolBarAssets from './ObjectToolBarAssets';
import SceneToolBarAssets from './SceneToolBarAssets';
import ShapesToolBarAssets from './ShapesToolBarAssets';
import TextToolBarAssets from './TextToolBarAssets';
import MusicToolBarAssets from './MusicToolBarAssets';
import DefaultToolBarAssets from './DefaultToolBarAssets';


class ToolBarAssets extends Component {
  constructor(props){
    super(props);
    this.assetSelectedHandler = this.assetSelectedHandler.bind(this);
  }

  assetSelectedHandler(asset){
    this.props.onAssetSelected(asset);
  }

  render(){
    const selectedMenu = this.props.selectedMenu;

    switch (selectedMenu){
      case "character":
        return(
          <CharacterToolBarAssets onAssetSelected={this.assetSelectedHandler}
                                  filterValue={this.props.onFilterValue}/>
        );
      case "object":
        return(
          <ObjectToolBarAssets onAssetSelected={this.assetSelectedHandler}
                               filterValue={this.props.onFilterValue}/>
        );
      case "landscape":
        return(
          <SceneToolBarAssets onAssetSelected={this.assetSelectedHandler}
                              filterValue={this.props.onFilterValue}/>
        );
      case "shapes":
        return(
          <ShapesToolBarAssets onFormAdd={this.assetSelectedHandler}
                              filterValue={this.props.onFilterValue}/>
        );
      case "text":
        return(
          <TextToolBarAssets onTextFieldAdd={this.assetSelectedHandler}/>
        );
      case "music":
        return(
          <MusicToolBarAssets />
        );
      case "upload":
        return(
          <DefaultToolBarAssets />
        );
      default:
      return(
        <DefaultToolBarAssets />
      );
    }
  }
}

export default ToolBarAssets;
