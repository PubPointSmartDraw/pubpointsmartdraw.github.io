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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { ANIMATION_EFFECTS } from "../Constants";

  const alignments = [
    {
      value: 'left',
      label: 'Gauche',
    },
    {
      value: 'center',
      label: 'Centre',
    },
    {
      value: 'right',
      label: 'Droit',
    },
  ];

  const fontFamilies = [
    {
      value: 'Arial',
      label: 'Arial',
    },
    {
      value: 'Calibri',
      label: 'Calibri',
    },
  ];


class TextToolBarAssets extends Component {

  constructor(props) {
    super(props);
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        ch = h*0.6,
        cw = w*74 / 120;
    this.defaultTextfieldValue = {
      inputText : "",
      xValue : cw/2 - 25,
      yValue : ch/2,
      fontSize : 12,
      fontFamily : "Arial",
      color : "black",
      align : "left",
      width : 50,
    };
    this.state = this.defaultTextfieldValue;
  }

  onInputChange = (value) => {
    this.setState(value);
  };

  handlerAddTextField = () => {
    let value = {
      inputText : this.state.inputText,
      xValue : this.state.xValue,
      yValue : this.state.yValue,
      fontSize : this.state.fontSize,
      fontFamily : this.state.fontFamily,
      color : this.state.color,
      align : this.state.align,
      width : this.state.width,
      enterEffect : ANIMATION_EFFECTS.fr.DEFAULT,
      entranceDelay : 0,
      entranceDuration : 0,
      exitEffect : ANIMATION_EFFECTS.fr.DEFAULT,
      exitDelay : 0,
      exitDuration : 0,
      type : "textfield",
      name : this.state.inputText+"-"+this.state.xValue+"-"+this.state.yValue+"-"+this.state.fontSize
      +"-"+this.state.fontFamily+"-"+this.state.color+"-"+this.state.align+"-"+this.state.width,
      image: null,
    };
    this.props.onTextFieldAdd(value);
    this.setState(this.defaultTextfieldValue);
  };

  render(){
    const inputText = this.state.inputText;
    const xValue = this.state.xValue;
    const yValue = this.state.yValue;
    const fontSize = this.state.fontSize;
    const fontFamily = this.state.fontFamily;
    const color = this.state.color;
    const align = this.state.align;
    const width = this.state.width;
    return(
      <div className="Center-horizontally Text-toolbar-asset">
         <form autoComplete="off" className="Text-toolbar-asset-form">
           <TextField
              multiline
              rows="2"
              value={inputText}
              placeholder="Entrez votre texte ici ..."
              variant="filled"
              className="Parent-width"
              onChange={(event) => this.onInputChange({inputText: event.target.value})}
            />
          <TextField
             label="X"
             value={xValue}
             type="number"
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({xValue: event.target.value})}
           />
           <TextField
              label="Y"
              value={yValue}
              type="number"
              className="Parent-half-width"
              onChange={(event) => this.onInputChange({yValue: event.target.value})}
            />
          <TextField
             label="Taille"
             value={fontSize}
             type="number"
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({fontSize: event.target.value})}
           />
           <FormControl className="Parent-half-width">
             <InputLabel>Police</InputLabel>
             <Select
               value={fontFamily}
               onChange={(event) => this.onInputChange({fontFamily: event.target.value})}
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
             value={color}
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({color: event.target.value})}
           />
           <FormControl className="Parent-half-width">
             <InputLabel>Alignement</InputLabel>
             <Select
               value={align}
               onChange={(event) => this.onInputChange({align: event.target.value})}
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
             value={width}
             type="number"
             className="Parent-width"
             onChange={(event) => this.onInputChange({width: event.target.value})}
           />
           <Button className="Float-right" variant="contained" size="large" onClick={this.handlerAddTextField}>
            Ajouter
           </Button>
         </form>
      </div>
    );
  }
}

export default TextToolBarAssets;
