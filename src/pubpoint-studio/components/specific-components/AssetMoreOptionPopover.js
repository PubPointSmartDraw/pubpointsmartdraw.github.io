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
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import AssetMoreOptionEffects from './AssetMoreOptionEffects';

/**
* Fonction gestionnaire du tab container.
*/
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 3 }}>
      {children}
    </Typography>
  );
}

const UPDATE_ENTER_EFFECT = "Enter-effect-change";
const UPDATE_EXIT_EFFECT = "Exit-effect-change";
const UPDATE_ENTRANCE_DELAY = "Entrance-delay-change";
const UPDATE_ENTRANCE_DURATION = "Entrance-duration-change";
const UPDATE_EXIT_DELAY = "Exit-delay-change";
const UPDATE_EXIT_DURATION = "Exit-duration-change";

/**
* Composant chargée de la gestion du menu des paramètres de l'animation d'un objet.
*/
class AssetMoreOptionPopover extends Component {
  /**
  * Variable d'état du composant.
  */
  state = {
    value: 0,
    direction: 'rtl',
    enterEffect: '',
    exitEffect: '',
  };
  /**
  * Gestionnaire du changement d'onglet du TabContainer.
  * @param {event} event - Source de l'évènement.
  * @param {number} value - Index de l'onglet du TabContainer.
  */
  handlerTabMenuChange = (event, value) => {
    this.setState({ value });
  };
  /**
  * Gestionnaire du changement d'index du TabContainer.
  * @param {number} index - Index de l'onglet du TabContainer.
  */
  handlerChangeIndex = index => {
    this.setState({ value: index });
  };
  /**
  * Gestionnaire du changement de l'effet d'entrée.
  * @param {String} value - Désignation de l'effet d'entrée.
  */
  handlerEnterEffectChange = (value) => {
    this.props.onEnterEffectChange(this.props.assetIndex, {enterEffect:value}, UPDATE_ENTER_EFFECT);
  };
  /**
  * Gestionnaire du changement du retard de l'effet d'entrée.
  * @param {number} value - Valeur du retard en millisecondes.
  */
  handlerEntranceDelayChange = (value) => {
    this.props.onEntranceDelayChange(this.props.assetIndex, {entranceDelay:value}, UPDATE_ENTRANCE_DELAY);
  };
  /**
  * Gestionnaire de la durée de l'effet d'entrée.
  * @param {number} value - Durée de l'effet d'entrée en millisecondes.
  */
  handlerEntranceDurationChange = (value) => {
    this.props.onEntranceDurationChange(this.props.assetIndex, {entranceDuration:value}, UPDATE_ENTRANCE_DURATION);
  };
  /**
  * Gestionnaire de la modification de l'effet de sortie.
  * @param {String} value - Désignation de l'effet de sortie.
  */
  handlerExitEffectChange = (value) => {
    this.props.onExitEffectChange(this.props.assetIndex, {exitEffect:value}, UPDATE_EXIT_EFFECT);
  };
  /**
  * Gestionnaire du changement du retard de l'effet de sortie.
  * @param {number} value - Valeur du retard en millisecondes.
  */
  handlerExitDelayChange = (value) => {
    this.props.onExitDelayChange(this.props.assetIndex, {exitDelay:value}, UPDATE_EXIT_DELAY);
  };
  /**
  * Gestionnaire de la durée de l'effet de sortie.
  * @param {number} value - Durée de l'effet de sortie en millisecondes.
  */
  handlerExitDurationChange = (value) => {
    this.props.onExitDurationChange(this.props.assetIndex, {exitDuration:value}, UPDATE_EXIT_DURATION);
  };
  /**
  * Affiche les éléments d'interface du composant.
  */
  render(){
    const anchorPositionX = this.props.anchorPositionX;
    const anchorPositionY = this.props.anchorPositionY;
    const mode = { top: 0, left: 0 };
    mode.top = anchorPositionY;
    mode.left = anchorPositionX;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    w = w/4;
    return(
      <div className="Half-screen-width">
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
          className="More-option-popover"
        >
          <Tabs
            value={this.state.value}
            onChange={this.handlerTabMenuChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Effets" />
          </Tabs>

          <SwipeableViews
            axis={this.state.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handlerChangeIndex}
          >
            <TabContainer dir={this.state.direction}>
              <AssetMoreOptionEffects onEnterEffectSelected={this.handlerEnterEffectChange}
                                      onEntranceDelayChange={this.handlerEntranceDelayChange}
                                      onEntranceDurationChange={this.handlerEntranceDurationChange}
                                      onExitEffectSelected={this.handlerExitEffectChange}
                                      onExitDelayChange={this.handlerExitDelayChange}
                                      onExitDurationChange={this.handlerExitDurationChange}
                                      enterEffect={this.props.enterEffect}
                                      enterDelay={this.props.entranceDelay}
                                      enterDuration={this.props.entranceDuration}
                                      exitEffect={this.props.exitEffect}
                                      exitDelay={this.props.exitDelay}
                                      exitDuration={this.props.exitDuration} />
            </TabContainer>
          </SwipeableViews>
        </Popover>
      </div>
    );
  }
}

export default AssetMoreOptionPopover;
