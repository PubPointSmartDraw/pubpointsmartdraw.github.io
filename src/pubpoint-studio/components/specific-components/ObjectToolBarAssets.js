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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { ANIMATION_EFFECTS } from "../Constants";

import img1 from '../../images/animationTools/objects/thumbnails/1.png';
import img2 from '../../images/animationTools/objects/thumbnails/2.png';
import img3 from '../../images/animationTools/objects/thumbnails/3.png';
import img4 from '../../images/animationTools/objects/thumbnails/4.png';
import img5 from '../../images/animationTools/objects/thumbnails/5.png';
import img6 from '../../images/animationTools/objects/thumbnails/6.png';
import img7 from '../../images/animationTools/objects/thumbnails/7.png';
import img8 from '../../images/animationTools/objects/thumbnails/8.png';
import img9 from '../../images/animationTools/objects/thumbnails/9.png';
import img10 from '../../images/animationTools/objects/thumbnails/10.png';
import img11 from '../../images/animationTools/objects/thumbnails/11.png';
import img12 from '../../images/animationTools/objects/thumbnails/12.png';
import img13 from '../../images/animationTools/objects/thumbnails/13.png';
import img14 from '../../images/animationTools/objects/thumbnails/14.png';
import img15 from '../../images/animationTools/objects/thumbnails/15.png';
import img16 from '../../images/animationTools/objects/thumbnails/16.png';
import notfound from '../../images/icons/notfound.png';

const tileData = [
  {
    img: img1,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img2,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img3,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img5,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img6,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img7,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img8,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img9,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img10,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img12,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img13,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img14,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img15,
    title: 'Image',
    label: 'objet',
  },
  {
    img: img16,
    title: 'Image',
    label: 'objet',
  },
];

const emptyItem = [
  {
    img: notfound,
    title: 'Image',
    label: 'vide',
  },
];

/**
* Composant responsable de l'affichage et de l'insertion dans la zone de création des objets divers.
*/
class ObjectToolBarAssets extends Component {
  /**
  * Gestionnaire de sélection d'un objet.
  * @param {event} e - Source de l'évènement.
  * @param {object} src - Fichier image de l'objet.
  */
  assetSelectedHandler = (e, src) => {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        ch = h*0.6,
        cw = w*74 / 120;
    const img = {
      x: cw/2-100,
      y: ch/2-100,
      width: 100,
      height: 100,
      rotation: 0,
      name: src,
      image: src,
      enterEffect: ANIMATION_EFFECTS.fr.DEFAULT,
      entranceDelay: 0,
      entranceDuration: 0,
      exitEffect: ANIMATION_EFFECTS.fr.DEFAULT,
      exitDelay: 0,
      exitDuration: 0,
      type: 'object',
    }
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
          <GridListTile  key={tile.img} cols={1} className="Toolbar-gridlist-item-object">
            <Card onClick={event => this.assetSelectedHandler(event, tile.img)} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Objet"
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

export default ObjectToolBarAssets;
