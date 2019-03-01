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
import React from 'react';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';

class AssetContextMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const anchorPositionX = this.props.anchorPositionX;
    const anchorPositionY = this.props.anchorPositionY;
    const mode = { top: 0, left: 0 };
    mode.top = anchorPositionY;
    mode.left = anchorPositionX;
    return (
      <Popover
        open={this.props.assetOptionMenuOpen}
        onClose={this.props.onCloseMenuDesignBoardElement}
        anchorReference="anchorPosition"
        anchorPosition={mode}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Paper>
          <MenuList>
          <MenuItem onClick={this.props.onBringAssetForward}>Avancer dans le plan</MenuItem>
          <MenuItem onClick={this.props.onBringAssetBackward}>Reculer dans le plan</MenuItem>
          <MenuItem onClick={this.props.onDeleteAsset}>Supprimer</MenuItem>
          <MenuItem onClick={this.props.onAssetMoreOption}>Plus...</MenuItem>
          </MenuList>
        </Paper>
      </Popover>
    );
  }
}

export default AssetContextMenu;
