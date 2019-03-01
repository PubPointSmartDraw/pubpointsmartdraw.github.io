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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { GEOMETRIC_FORMS, ANIMATION_EFFECTS } from "../Constants";


const forms = [
  {
    value: GEOMETRIC_FORMS.fr.CIRCLE,
    label: GEOMETRIC_FORMS.fr.CIRCLE,
  },
  {
    value: GEOMETRIC_FORMS.fr.ELLIPSE,
    label: GEOMETRIC_FORMS.fr.ELLIPSE,
  },
  {
    value: GEOMETRIC_FORMS.fr.REGULARPOLYGON,
    label: GEOMETRIC_FORMS.fr.REGULARPOLYGON,
  },
  {
    value: GEOMETRIC_FORMS.fr.RECTANGLE,
    label: GEOMETRIC_FORMS.fr.RECTANGLE,
  },
];

class ShapesToolBarAssets extends Component {
  state = {
    form: GEOMETRIC_FORMS.fr.RECTANGLE,
    xValue : 25,
    yValue : 12,
    width : 50,
    height: 25,
    sides: 4,
    radius: 0,
    radiusX: 0,
    radiusY: 0,
    fill: "white",
    stroke: "black",
    strokeWidth: 4,
  };
  constructor(props) {
    super(props);
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        ch = h*0.6,
        cw = w*74 / 120;
    this.defaultFormValue = {
      form: GEOMETRIC_FORMS.fr.RECTANGLE,
      x : cw/2 - 25,
      y : ch/2 -12,
      width : 50,
      height: 25,
      sides: 4,
      radius: 0,
      radiusX: 0,
      radiusY: 0,
      fill: "white",
      stroke: "black",
      strokeWidth: 4,
    };
    this.state = this.defaultFormValue;
  }

  onInputChange = (value) => {
    this.setState(value);
  };

  handlerAddForm = () => {
    let value = {
      form: this.state.form,
      x : this.state.x,
      y : this.state.y,
      width : this.state.width,
      height: this.state.height,
      sides: this.state.sides,
      radius: this.state.radius,
      radiusX: this.state.radiusX,
      radiusY: this.state.radiusY,
      fill: this.state.fill,
      stroke: this.state.stroke,
      strokeWidth: this.state.strokeWidth,
      enterEffect : ANIMATION_EFFECTS.fr.DEFAULT,
      entranceDelay : 0,
      entranceDuration : 0,
      exitEffect : ANIMATION_EFFECTS.fr.DEFAULT,
      exitDelay : 0,
      exitDuration : 0,
      type : this.state.form,
      name :this.state.form+"-"+this.state.x+"-"+this.state.y+"-"+this.state.width
      +"-"+this.state.height+"-"+this.state.sides+"-"+this.state.radius+"-"
      +this.state.radiusX+"-"+this.state.radiusY+"-"+this.state.fill+"-"+this.state.stroke+"-"+this.state.strokeWidth,
      image: null,
    };
    this.props.onFormAdd(value);
    this.setState(this.defaultTextfieldValue);
  };
  render(){
    const { form, x, y, width, height, sides, radius, radiusX, radiusY, fill, stroke, strokeWidth } = this.state;
    return(
      <div className="Center-horizontally Text-toolbar-asset">
         <form autoComplete="off" className="Text-toolbar-asset-form">
           <FormControl className="Parent-width">
             <Select
               value={form}
               onChange={(event) => this.onInputChange({form: event.target.value})}
               >
               {forms.map(option => (
                 <MenuItem key={option.value} value={option.value}>
                   {option.label}
                 </MenuItem>
               ))}
             </Select>
           </FormControl>
          <TextField
             label="X"
             value={x}
             type="number"
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({x: event.target.value})}
           />
           <TextField
              label="Y"
              value={y}
              type="number"
              className="Parent-half-width"
              onChange={(event) => this.onInputChange({y: event.target.value})}
            />
          <TextField
             label="Largeur"
             value={width}
             type="number"
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({width: event.target.value})}
           />
         <TextField
            label="Hauteur"
            value={height}
            type="number"
            className="Parent-half-width"
            onChange={(event) => this.onInputChange({height: event.target.value})}
          />
          <TextField
             label="Côtés"
             value={sides}
             type="number"
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({sides: event.target.value})}
           />
         <TextField
            label="Rayon(cercle)"
            value={radius}
            type="number"
            className="Parent-half-width"
            onChange={(event) => this.onInputChange({radius: event.target.value})}
          />
          <TextField
             label="Rayon-x(ellipse)"
             value={radiusX}
             type="number"
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({radiusX: event.target.value})}
           />
           <TextField
              label="Rayon-y(ellipse)"
              value={radiusY}
              type="number"
              className="Parent-half-width"
              onChange={(event) => this.onInputChange({radiusY: event.target.value})}
            />
          <TextField
             label="Remplissage"
             value={fill}
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({fill: event.target.value})}
           />
         <TextField
            label="Bordure"
            value={stroke}
            className="Parent-half-width"
            onChange={(event) => this.onInputChange({stroke: event.target.value})}
          />
          <TextField
             label="Épaisseur"
             value={strokeWidth}
             type="number"
             className="Parent-half-width"
             onChange={(event) => this.onInputChange({strokeWidth: event.target.value})}
           />
           <Button className="Float-right" variant="contained" size="large" onClick={this.handlerAddForm}>
            Ajouter
           </Button>
         </form>
      </div>
    );
  }
}

export default ShapesToolBarAssets;
