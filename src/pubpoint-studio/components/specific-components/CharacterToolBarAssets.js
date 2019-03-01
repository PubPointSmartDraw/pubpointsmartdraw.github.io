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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { ANIMATION_EFFECTS } from "../Constants";

import img1 from '../../images/animationTools/characters/1.png';
import img2 from '../../images/animationTools/characters/2.png';
import img3 from '../../images/animationTools/characters/3.png';
import img4 from '../../images/animationTools/characters/4.png';
import img5 from '../../images/animationTools/characters/5.png';
import img6 from '../../images/animationTools/characters/6.png';
import img7 from '../../images/animationTools/characters/7.png';
import img8 from '../../images/animationTools/characters/8.png';
import img9 from '../../images/animationTools/characters/9.png';
import img10 from '../../images/animationTools/characters/10.png';
import img11 from '../../images/animationTools/characters/11.png';
import img12 from '../../images/animationTools/characters/12.png';
import img13 from '../../images/animationTools/characters/13.png';
import notfound from '../../images/icons/notfound.png';

const tileData = [
  {
    img: img1,
    title: 'Image',
    label: 'homme',
  },
  {
    img: img2,
    title: 'Image',
    label: 'homme',
  },
  {
    img: img3,
    title: 'Image',
    label: 'homme',
  },
  {
    img: img4,
    title: 'Image',
    label: 'homme',
  },
  {
    img: img5,
    title: 'Image',
    label: 'homme',
  },
  {
    img: img6,
    title: 'Image',
    label: 'homme',
  },
  {
    img: img7,
    title: 'Image',
    label: 'femme',
  },
  {
    img: img8,
    title: 'Image',
    label: 'femme',
  },
  {
    img: img9,
    title: 'Image',
    label: 'femme',
  },
  {
    img: img10,
    title: 'Image',
    label: 'femme',
  },
  {
    img: img11,
    title: 'Image',
    label: 'femme',
  },
  {
    img: img12,
    title: 'Image',
    label: 'enfant',
  },
  {
    img: img13,
    title: 'Image',
    label: 'homme',
  },
];

const emptyItem = [
  {
    img: notfound,
    title: 'Image',
    label: 'vide',
  },
];

const CHARACTER_RATIO = 0.708;

/**
* Composant chargé de l'affichage et de l'insertion dans la zone de création des personnages.
*/
class CharacterToolBarAssets extends Component {
  /**
  * Constructeur du Composant
  * @constructor
  */
  constructor(props){
    super(props);
  }

  /**
  * Gestionnaire de sélection d'un personnage.
  * @param {event} e - Source de l'évènement.
  * @param {object} src - Fichier image du personnage.
  */
  assetSelectedHandler = (e, src) => {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        ch = h*0.6,
        cw = w*74 / 120;
    var characterHeight = ch-10, characterWidth = CHARACTER_RATIO*characterHeight;
    const img = {
      x: cw/2-characterWidth/2,
      y: ch/2-characterHeight/2,
      width: characterWidth,
      height: characterHeight,
      rotation: 0,
      name: src,
      image: src,
      enterEffect: ANIMATION_EFFECTS.fr.DEFAULT,
      entranceDelay: 0,
      entranceDuration: 0,
      exitEffect: ANIMATION_EFFECTS.fr.DEFAULT,
      exitDelay: 0,
      exitDuration: 0,
      type: 'character',
    };
    this.props.onAssetSelected(img);
  };

  /**
  * Affiche les éléments d'interface du composant.
  */
  render(){
    let assetList = tileData.filter( item => item.label.includes(this.props.filterValue));
    if(assetList.length === 0){
      assetList = emptyItem;
    }
    return(
        <GridList cols={2} className="Toolbar-gridlist">

          {assetList.map(tile => (
            <GridListTile  key={tile.img} cols={1} className="Toolbar-gridlist-item">
              <Card onClick={event => this.assetSelectedHandler(event, tile.img)} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Personnage"
                    image={tile.img}
                    title={tile.img}
                  />
                </CardActionArea>
              </Card>
            </GridListTile>
          ))}
        </GridList>
    );
  }
}

export default CharacterToolBarAssets;
