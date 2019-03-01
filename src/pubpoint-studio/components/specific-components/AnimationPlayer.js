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
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Stage, Layer, Rect, Group, Text } from 'react-konva';
import { Spring, animated, Keyframes, config } from 'react-spring/dist/konva';
import html2canvas from 'html2canvas';
import delay from 'delay';
import {SCREEN_PARAMETERS} from '../Constants';

import BaseCanvasKonvaAnimatedObject from './BaseCanvasKonvaAnimatedObject';
import BaseCanvasKonvaImage from './BaseCanvasKonvaImage';

import play from '../../images/icons/play.png';
import stop from '../../images/icons/stop.png';
import pause from '../../images/icons/pause.png';
import signature from '../../images/signature-small.png';


/**
* Composant responsable de la prévisualisation de la vidéo d'animation
*/
class AnimationPlayer extends Component {
  /**
  * Variable d'état du composant
  */
  state = {
    completed: 0,
    animationWindowWidth : 20,
    animationWindowHeight : 20,
    creationBoardWidth : 20,
    creationBoardHeight : 20,
    sprite : null,
    currentVideoProcessComplete: true,
  };
  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props){
    super(props);
    this.state = {
      completed: 0,
      animationWindowWidth : 20,
      animationWindowHeight : 20,
      creationBoardWidth : 20,
      creationBoardHeight : 20,
      sprite : null,
      currentVideoProcessComplete: true,
    };
    this.timer = null;
    this.counter = 1;
    this.images = [];
    this.savedCaptures = [];
    this.stageAnimation = React.createRef();
  }
  /**
  * Fonction de la phase "pré-montage" du cycle de vie du composant.
  */
  componentWillMount(){
    this.initScreenDimensions();
  }

  /*shouldComponentUpdate(nextProps, nextState){
    if(nextProps.canDownloadAnimationVideo){
      if(this.canDownload){
        this.canDownload = false;
        this.send();
      }
      return false;
    }
    return true;
  }*/
  /**
  * Fonction d'initialisation des variable de stockage des dimensions de l'écran et des fenêtre de l'interface.
  */
  initScreenDimensions = () => {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var finalWidth = w*0.7,
        finalHeight = finalWidth/SCREEN_PARAMETERS.ASPECTRATION;
    this.setState({
      animationWindowWidth : finalWidth,
      animationWindowHeight : finalHeight,
      creationBoardWidth : w * SCREEN_PARAMETERS.WIDTHPROPORTION,
      creationBoardHeight : h * SCREEN_PARAMETERS.HEIGHTPROPORTION,
    });
  };
  /**
  * Fonction responsable de l'envoie du vecteur d'images de capture de l'animation au serveur de compilation de la vidéo.
  */
  send = () => {
    this.setState({ currentVideoProcessComplete:false });
    var size = this.images.length;
    var data = 'data=' + JSON.stringify(this.images) + '&title=' + this.props.projectName+ '&email=tca1audricfeuyan@gmail.com';
    console.log("Envoie de images en ligne");
    return fetch("http://imagebr.000webhostapp.com/uploadImages.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
      })
    .then(response => {
      if(response.ok){
        this.setState({ currentVideoProcessComplete:true });
        return response.json();
      }else{
        this.setState({ currentVideoProcessComplete:true });
        return response.json();
      }
    })
    .then(responseData => {
      if(responseData.success){
        console.log("Video générée avec succès.")
      }else{
        console.log("Un problème est survenue pendant la génération de la vidéo.")
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  /**
  * Fonction responsable de la capture et du stockage d'une Frame de l'animation au format image JPEG.
  */
  captureAnimationFrame = () => {
    var canvas = this.stageAnimation.current.getStage().toCanvas();
    var image = canvas.toDataURL("image/jpeg", 1);
    this.images.push(encodeURIComponent(image));
    //console.log("Ajout");
  };

  /**
  * Affiche les éléments d'interface du composant.
  */
  render() {
    const windowWidth = this.state.animationWindowWidth;
    const windowHeight = this.state.animationWindowHeight;
    const creationBoardWidth = this.state.creationBoardWidth;
    const creationBoardHeight = this.state.creationBoardHeight;

    //console.log(this.props.objectList);

    let animatedObjects = this.props.objectList.filter(item => item.type !== "landscape");
    let landscape = this.props.objectList.filter(item => item.type === "landscape");
    let objectListSize = animatedObjects.length + 1;

    if(landscape.length !== 0){
      landscape[0].width = creationBoardWidth;
      landscape[0].height = creationBoardHeight;
    }


    return (
      <Paper id="screen-board">
        <Stage width={windowWidth} height={windowHeight} className="Background-white" ref={this.stageAnimation}>
          <Layer>
            <Rect
             x={0}
             y={0}
             width={windowWidth}
             height={windowHeight}
             fill={this.props.backgroundSceneColor}
             shadowBlur={0}
           />
           <Group>
            {
              landscape.map( (item, index) => (
                <BaseCanvasKonvaAnimatedObject animatedObject={item} key={index}
                                               objectIndex={index}
                                               type={item.type}
                                               windowWidth={windowWidth}
                                               windowHeight={windowHeight}
                                               creationBoardWidth={creationBoardWidth}
                                               creationBoardHeight={creationBoardHeight}
                                               captureFrameCallback={this.captureAnimationFrame}/>
              ))
            }
            {
              animatedObjects.map( (item, index) => (
                <BaseCanvasKonvaAnimatedObject animatedObject={item} key={index+1}
                                               objectIndex={index+1}
                                               type={item.type}
                                               windowWidth={windowWidth}
                                               windowHeight={windowHeight}
                                               creationBoardWidth={creationBoardWidth}
                                               creationBoardHeight={creationBoardHeight}
                                               captureFrameCallback={this.captureAnimationFrame}/>
              ))
            }
            </Group>

            <BaseCanvasKonvaImage  imageSrc={signature}
                                   type={"signature"}
                                   assetIndex={10000}
                                   onAssetClicked={(e) => {}}
                                   onPositionChange={(e) => {}}
                                   onTransformChange={(e) => {}}
                                   x={this.state.animationWindowWidth-100}
                                   y={this.state.animationWindowHeight-50}
                                   width={80}
                                   height={34}/>
          </Layer>
        </Stage>



      </Paper>
    );
  }
}

export default AnimationPlayer;
