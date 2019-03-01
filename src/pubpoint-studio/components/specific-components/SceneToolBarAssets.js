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
import {SCREEN_PARAMETERS} from '../Constants';

import img1 from '../../images/animationTools/scenes/thumbnails/1.jpg';
import img2 from '../../images/animationTools/scenes/thumbnails/2.jpg';
import img3 from '../../images/animationTools/scenes/thumbnails/3.jpg';
import img4 from '../../images/animationTools/scenes/thumbnails/4.jpg';
import img5 from '../../images/animationTools/scenes/thumbnails/5.jpg';
import img6 from '../../images/animationTools/scenes/thumbnails/6.jpg';
import img7 from '../../images/animationTools/scenes/thumbnails/7.jpg';
import img8 from '../../images/animationTools/scenes/thumbnails/8.jpg';
import img9 from '../../images/animationTools/scenes/thumbnails/9.jpg';
import img10 from '../../images/animationTools/scenes/thumbnails/10.jpg';
import img11 from '../../images/animationTools/scenes/thumbnails/11.jpg';
import img12 from '../../images/animationTools/scenes/thumbnails/12.jpg';
import img13 from '../../images/animationTools/scenes/thumbnails/13.jpg';
import img14 from '../../images/animationTools/scenes/thumbnails/14.jpg';
import img15 from '../../images/animationTools/scenes/thumbnails/15.jpg';
import notfound from '../../images/icons/notfound.png';

const tileData = [
  {
    img: img1,
    src: img1,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img2,
    src: img2,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img3,
    src: img3,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img4,
    src: img4,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img5,
    src: img5,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img6,
    src: img6,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img7,
    src: img7,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img8,
    src: img8,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img9,
    src: img9,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img10,
    src: img10,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img11,
    src: img11,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img12,
    src: img12,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img13,
    src: img13,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img14,
    src: img14,
    title: 'Image',
    label: 'scene',
  },
  {
    img: img15,
    src: img15,
    title: 'Image',
    label: 'scene',
  },
];

const emptyItem = [
  {
    img: notfound,
    src: notfound,
    title: 'Image',
    label: 'vide',
  },
];

/**
* Composant chargé de l'affichage et de l'insertion des la zone de création des arrière-plans de scène.
*/
class SceneToolBarAssets extends Component {
  /**
  * Gestionnaire de sélection d'un arrière plan de scène.
  * @param {event} e - Source de l'évènement.
  * @param {object} src - Fichier image de l'arrière plan.
  */
  assetSelectedHandler = (e, src) => {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        ch = h*SCREEN_PARAMETERS.WIDTHPROPORTION,
        cw = w*SCREEN_PARAMETERS.HEIGHTPROPORTION;
    const img = {
      x: 0,
      y: 0,
      width: cw,
      height: ch,
      rotation: 0,
      name: src,
      image: src,
      enterEffect: "Default",
      entranceDelay: 0,
      entranceDuration: 10,
      exitEffect: "Default",
      exitDelay: 0,
      exitDuration: 10,
      type: 'landscape',
      backgroundColor: "#FFFFFF",
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
          <Card onClick={event => this.assetSelectedHandler(event, tile.src)} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scène"
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

export default SceneToolBarAssets;
