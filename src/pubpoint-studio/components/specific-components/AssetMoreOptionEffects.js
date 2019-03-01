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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {ANIMATION_EFFECTS} from '../Constants';

const effectValue = ANIMATION_EFFECTS.fr;
const effects = [
  effectValue.FROMRIGHT,
  effectValue.FROMLEFT,
  effectValue.FROMTOP,
  effectValue.FROMBOTTOM,
];

/**
* Composant responsable de la gestion de la mise à jour des paramètres d'animation d'un objet.
*/
class AssetMoreOptionEffects extends Component {
  /**
  * Constructeur du Composant.
  * @constructor
  */
  constructor(props){
    super(props);
  }
  /**
  * Gestionnaire de la modification de l'effet d'entrée.
  * @param {event} event - Source de l'évènement.
  */
  handlerEntranceEffectChange = event => {
    this.props.onEnterEffectSelected(event.target.value);
  };
  /**
  * Gestionnaire de la modification du retard d'entrée d'un objet.
  * @param {event} event - Source de l'évènement.
  */
  handlerEntranceDelayChange = event => {
    var entranceDelay = event.target.value;
    if(entranceDelay>=0 && entranceDelay<=15000){
      this.props.onEntranceDelayChange(entranceDelay);
    }else if(entranceDelay<0){
      this.props.onEntranceDelayChange(0);
    }else if(entranceDelay>15000){
      this.props.onEntranceDelayChange(15000);
    }
  };
  /**
  * Gestionnaire de la modification du la durée de l'éffet d'entrée.
  * @param {event} event - Source de l'évènement.
  */
  handlerEntranceDurationChange = event => {
    var entranceDuration = event.target.value;
    if(entranceDuration>=0 && entranceDuration<=15000){
      this.props.onEntranceDurationChange(entranceDuration);
    }else if(entranceDuration<0){
      this.props.onEntranceDurationChange(0);
    }else if(entranceDuration>15000){
      this.props.onEntranceDurationChange(15000);
    }
  };
  /**
  * Gestionnaire de la modification de l'effet de sortie.
  * @param {event} event - Source de l'évènement.
  */
  handlerExitEffectChange = event => {
    this.props.onExitEffectSelected(event.target.value);
  };
  /**
  * Gestionnaire de la modification du retard de sortie.
  * @param {event} event - Source de l'évènement.
  */
  handlerExitDelayChange = event => {
    var exitDelay = event.target.value;
    if(exitDelay>=0 && exitDelay<=15000){
      this.props.onExitDelayChange(exitDelay);
    }else if(exitDelay<0){
      this.props.onExitDelayChange(0);
    }else if(exitDelay>15000){
      this.props.onExitDelayChange(15000);
    }
  };
  /**
  * Gestionnaire de la modification de la durée de l'effet de sortie.
  * @param {event} event - Source de l'évènement.
  */
  handlerExitDurationChange = event => {
    var exitDuration = event.target.value;
    if(exitDuration>=0 && exitDuration<=15000){
      this.props.onExitDurationChange(exitDuration);
    }else if(exitDuration<0){
      this.props.onExitDurationChange(0);
    }else if(exitDuration>15000){
      this.props.onExitDurationChange(15000);
    }
  };
  /**
  * Affiche les éléments d'interface du composant.
  */
  render(){
    const enterEffect = this.props.enterEffect,
          exitEffect = this.props.exitEffect,
          enterDelay = this.props.enterDelay,
          enterDuration = this.props.enterDuration,
          exitDelay = this.props.exitDelay,
          exitDuration = this.props.exitDuration;
    //console.log(this.props);
    return(
      <div>
        <FormControl className="Effect-input">
          <InputLabel htmlFor="effet-entree">{"Effet d'entrée"}</InputLabel>
          <Select
            value={enterEffect}
            onChange={this.handlerEntranceEffectChange}
            inputProps={{
              name: 'effetentree',
              id: 'effet-entree',
            }}
          >
            <MenuItem key="Default" value="Default">
              <em>Défaut</em>
            </MenuItem>
            {effects.map(effect => (
              <MenuItem
                key={effect}
                value={effect}
              >
                {effect}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="Effect-input">
          <InputLabel htmlFor="delai-entree">{"Délai d'entrée (en millisecondes)"}</InputLabel>
          <Input
            type={"number"}
            value={enterDelay}
            onChange={this.handlerEntranceDelayChange}
          />
        </FormControl>
        <FormControl className="Effect-input">
          <InputLabel htmlFor="duree-entree">{"Durée d'entrée (en millisecondes)"}</InputLabel>
          <Input
            type={"number"}
            value={enterDuration}
            onChange={this.handlerEntranceDurationChange}
          />
        </FormControl>

        <FormControl className="Effect-input">
          <InputLabel htmlFor="effet-sortie">Effet de sortie</InputLabel>
          <Select
            value={exitEffect}
            onChange={this.handlerExitEffectChange}
            inputProps={{
              name: 'effetsortie',
              id: 'effet-sortie',
            }}
          >
            <MenuItem key="" value="">
              <em>Aucun</em>
            </MenuItem>
            {effects.map(effect => (
              <MenuItem
                key={effect}
                value={effect}
              >
                {effect}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="Effect-input">
          <InputLabel htmlFor="delai-sortie">{"Délai de sortie (en millisecondes)"}</InputLabel>
          <Input
            type={"number"}
            value={exitDelay}
            onChange={this.handlerExitDelayChange}
          />
        </FormControl>
        <FormControl className="Effect-input">
          <InputLabel htmlFor="duree-sortie">{"Durée de sortie (en millisecondes)"}</InputLabel>
          <Input
            type={"number"}
            value={exitDuration}
            onChange={this.handlerExitDurationChange}
          />
        </FormControl>

      </div>
    );
  }
}

export default AssetMoreOptionEffects;
