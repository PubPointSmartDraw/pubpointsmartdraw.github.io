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
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchOutlined from '@material-ui/icons/SearchOutlined';

import ToolBarAssets from './specific-components/ToolBarAssets';
import ToolBarMenuList from './specific-components/ToolBarMenuList';


/**
* Composant responsable de la gestion des ressources (images, textes, formes, audio) pour la création de la vidéo.
*/
class ToolBar extends Component {
  /**
  * Variable d'état du composant.
  */
  state = {
    anchorEl: "character",
    filterValue: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: "character",
      filterValue: "",
    };
    this.handlerSceneObjectAdd = this.handlerSceneObjectAdd.bind(this);
  }

  /**
  * Gestionnaire du clic sur un menu de la barre d'outils.
  * @param {event} event - Source de l'évènement.
  */
  handlerClickMenuIcon = (event) => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget.id,
    }));
  };
  /**
  * Gestionnaire de l'ajout d'un objet sur la scène.
  * @param {object} sceneObject - Objet à ajouter.
  */
  handlerSceneObjectAdd(sceneObject){
    this.props.onSceneObjectAdd(sceneObject);
  }
  /**
  * Gestionnaire de la modification du contenu du filtre de recherche des ressources.
  * @param {event} event - Source de l'évènement.
  */
  handlerFilterChange = (e) => {
    this.setState({ filterValue: e.target.value });
  };
  /**
  * Affiche les éléments d'interface du composant.
  */
  render(){
    const { anchorEl } = this.state;

    return(
      <Grid item xs={3} sm={3} container className="Tool-bar">
        <Grid className="Tool-bar-view">
          <FormControl fullWidth>
            <Input
              className="Color-white "
              id="filter-value"
              placeholder="Filtre"
              value={this.state.filterValue}
              onChange={this.handlerFilterChange}
              startAdornment={<InputAdornment position="start"><SearchOutlined /></InputAdornment>}
            />
          </FormControl>
          <Fade timeout={250}>
            <ToolBarAssets selectedMenu={anchorEl}
                           onAssetSelected={this.handlerSceneObjectAdd}
                           onFilterValue={this.state.filterValue}/>
          </Fade>
        </Grid>
        <Grid className="Tool-bar-icon">
          <ToolBarMenuList  onClick={this.handlerClickMenuIcon}/>
        </Grid>
      </Grid>
    );
  }
}

export default ToolBar;
