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
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';

class SceneItemContextMenu extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Popover
        open={this.props.assetOptionMenuOpen}
        onClose={this.props.onCloseMenuDesignBoardElement}
        anchorEl={this.props.anchorElement}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper>
          <MenuList>
            <MenuItem onClick={(event) => this.props.onDeleteScene(event, this.props.itemIndex)}>Supprimer</MenuItem>
          </MenuList>
        </Paper>
      </Popover>
    );
  }
}

export default SceneItemContextMenu;
