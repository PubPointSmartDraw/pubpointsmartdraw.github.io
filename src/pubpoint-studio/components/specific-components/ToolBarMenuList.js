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
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip';


import character from '../../images/icons/character.png';
import tool from '../../images/icons/tool.png';
import scene from '../../images/icons/scene.png';
import shapes from '../../images/icons/shapes.png';
import text from '../../images/icons/text.png';
import music from '../../images/icons/music.png';
import upload from '../../images/icons/import.png';

class ToolBarMenulist extends Component {

  render(){
    return(
      <MenuList>
        <MenuItem>
          <Tooltip title="Personnages">
            <Avatar id="character"
                    alt="Personnages"
                    src={character}
                    onClick={this.props.onClick}>
            </Avatar>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Objets">
            <Avatar id="object"
                    alt="Objets"
                    src={tool}
                    onClick={this.props.onClick}>
            </Avatar>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Scènes">
            <Avatar id="landscape"
                    alt="Scènes"
                    src={scene}
                    onClick={this.props.onClick}>
            </Avatar>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Formes">
            <Avatar id="shapes"
                    alt="Formes"
                    src={shapes}
                    onClick={this.props.onClick}>
            </Avatar>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Textes">
            <Avatar id="text"
                    alt="Textes"
                    src={text}
                    onClick={this.props.onClick}>
            </Avatar>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Musique">
            <Avatar id="music"
                    alt="Musique"
                    src={music}
                    onClick={this.props.onClick}>
            </Avatar>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Importer">
            <Avatar id="upload"
                    alt="Importer"
                    src={upload}
                    onClick={this.props.onClick}>
            </Avatar>
          </Tooltip>
        </MenuItem>
      </MenuList>
    );
  }
}

export default ToolBarMenulist;
