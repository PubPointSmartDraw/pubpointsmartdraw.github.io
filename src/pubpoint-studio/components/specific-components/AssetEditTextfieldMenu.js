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
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const alignments = [
  {
    value: 'left',
    label: 'gauche',
  },
  {
    value: 'center',
    label: 'centre',
  },
  {
    value: 'right',
    label: 'droit',
  },
];

const fontFamilies = [
  {
    value: 'Arial',
    label: 'arial',
  },
  {
    value: 'Calibri',
    label: 'calibri',
  },
];

const UPDATE_TEXTFIELD = "Update-textfield";


class AssetEditTextfieldMenu extends React.Component {
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
      <div className="Textfield-edit-menu">
      <Popover
        open={this.props.assetEditTextfieldMenuOpen}
        onClose={this.props.onCloseEditTextfieldMenu}
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
          <form autoComplete="off" className="Text-toolbar-asset-form">
            <TextField
               multiline
               rows="2"
               value={this.props.data.inputText}
               placeholder="Entrez votre texte ici ..."
               variant="filled"
               className="Parent-width"
               onChange={(event) => this.props.onEditTextfield({inputText: event.target.value})}
             />
           <TextField
              label="X"
              value={this.props.data.xValue}
              type="number"
              className="Parent-half-width"
              onChange={(event) => this.props.onEditTextfield({xValue: event.target.value})}
            />
            <TextField
               label="Y"
               value={this.props.data.yValue}
               type="number"
               className="Parent-half-width"
               onChange={(event) => this.props.onEditTextfield({yValue: event.target.value})}
             />
           <TextField
              label="Taille"
              value={this.props.data.fontSize}
              type="number"
              className="Parent-half-width"
              onChange={(event) => this.props.onEditTextfield({fontSize: event.target.value})}
            />
            <FormControl className="Parent-half-width">
              <InputLabel>Police</InputLabel>
              <Select
                value={this.props.data.fontFamily}
                onChange={(event) => this.props.onEditTextfield({fontFamily: event.target.value})}
                >
                {fontFamilies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
           <TextField
              label="Couleur"
              value={this.props.data.color}
              className="Parent-half-width"
              onChange={(event) => this.props.onEditTextfield({color: event.target.value})}
            />
            <FormControl className="Parent-half-width">
              <InputLabel>Alignement</InputLabel>
              <Select
                value={this.props.data.align}
                onChange={(event) => this.props.onEditTextfield({align: event.target.value})}
                >
                {alignments.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
           <TextField
              label="Largeur zone de texte"
              value={this.props.data.width}
              type="number"
              className="Parent-width"
              onChange={(event) => this.props.onEditTextfield({width: event.target.value})}
            />
          </form>
        </Paper>
      </Popover>
      </div>
    );
  }
}

export default AssetEditTextfieldMenu;
