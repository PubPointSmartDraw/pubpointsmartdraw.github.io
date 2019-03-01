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
import { Text, Rect, Circle, Ellipse, RegularPolygon } from 'react-konva';
import { Spring, Keyframes, config, animated } from 'react-spring/dist/konva';
import delay from 'delay';

import BaseCanvasKonvaImage from './BaseCanvasKonvaImage';
import {  GEOMETRIC_FORMS, ANIMATION_EFFECTS } from '../Constants';
import ErrorBoundary from "./ErrorBoundary";

const effectValue = ANIMATION_EFFECTS.fr;

/**
* Composant responsable du rendu des images animées.
*/
class BaseCanvasKonvaAnimatedObject extends Component {
  /**
  * Variable d'état du composant.
  */
  state = {
    fromValue : {},
    toValue : {},
    currentObject : {},
    reverseSpring: false,
  };


  /**
  * Constructeur du composant.
  * @constructor
  */
  constructor(props){
    super(props);
    this.state = {
      fromValue : {},
      toValue : {},
      currentObject : {},
    };
  }

  /**
  * Fonction de la phase "Avant montage" du cycle de vie du composant.
  */
  componentWillMount(){
    this.currentObject = this.props.animatedObject;
    this.setState({ fromValue : { ...this.currentObject, opacity:0 } });
    this.updateAnimationFromValue();
    this.updateAnimationToValue();
  }
  /**
  * Fonction de la phase "Avant démontage" du cycle de vie du composant.
  */
  componentWillUnmount(){

  }

  /**
  * Fonction ayant la responsabilité de faire rien du tout.
  */
  doNothing = () => {};

  /**
  * Mise à jour des paramètres de l'état initial de l'objet à animer.
  */
  updateAnimationFromValue = () => {
    this.newX = (this.currentObject.x/this.props.creationBoardWidth)*this.props.windowWidth;
    this.newY = (this.currentObject.y/this.props.creationBoardHeight)*this.props.windowHeight;
    this.newWidth = (this.currentObject.width/this.props.creationBoardWidth)*this.props.windowWidth;
    this.newHeight = (this.currentObject.height/this.props.creationBoardHeight)*this.props.windowHeight;

    const enterEffect = this.currentObject.enterEffect;
    var fromValue = this.state.fromValue;
    var xpos = 0, ypos = 0;
    switch(enterEffect){
      case effectValue.FROMRIGHT:
        xpos = this.props.windowWidth + this.newWidth*1.1;
        fromValue.x = xpos;
        break;
      case effectValue.FROMLEFT:
        xpos = -this.newWidth*1.1;
        fromValue.x = xpos;
        break;
      case effectValue.FROMTOP:
        ypos = -this.newHeight*1.1;
        fromValue.y = ypos;
        break;
      case effectValue.FROMBOTTOM:
        ypos = this.props.windowHeight + this.newHeight*1.1;
        fromValue.y = ypos;
        break;
      case effectValue.DEFAULT:
        fromValue.opacity = 1;
        break;
      default :
        fromValue.opacity = 1;
    }
    this.setState({ fromValue: fromValue });
  };
  /**
  * Mise à jour des paramètres de l'état final de l'objet à animer.
  */
  updateAnimationToValue =  () => {
    let updatedCurrentObject = { ...this.currentObject };
    updatedCurrentObject.x = this.newX;
    updatedCurrentObject.y = this.newY;
    updatedCurrentObject.width = this.newWidth;
    updatedCurrentObject.height = this.newHeight;
    this.setState({
      toValue: { ...updatedCurrentObject, opacity:1 }
    });
  };

  /**
  * Affiche les éléments d'interface du composant.
  */
  render() {
    let toValue = this.state.toValue,
        fromValue = this.state.fromValue,
        entranceDelay = this.currentObject.entranceDelay,
        entranceDuration = this.currentObject.entranceDuration,
        exitDelay = this.currentObject.exitDelay,
        exitDuration = this.currentObject.exitDuration;

    /*console.log(fromValue);
    console.log(toValue);
    console.log(this.props.animatedObject.entranceDelay);
    console.log(this.props.animatedObject.entranceDuration);*/

    const PubPointAnimator = Keyframes.Spring(
      async (next, cancel, ownProps) => {
        await delay(entranceDelay)
        await next({ from:fromValue, to:toValue, duration:entranceDuration })
        await delay(exitDelay)
        await next({ from:toValue, to:fromValue, duration:exitDuration })
      });

    const animationRenderer = () => {
      let objectType = this.props.type;
      switch(objectType){
        case "character":
        console.log("Character");
         return <PubPointAnimator onFrame={this.props.captureFrameCallback}>
                 {props => <BaseCanvasKonvaImage  imageSrc={this.currentObject.image}
                                                  type={this.currentObject.type}
                                                  assetIndex={this.props.objectIndex}
                                                  onAssetClicked={this.doNothing}
                                                  onPositionChange={this.doNothing}
                                                  onTransformChange={this.doNothing}
                                                  {...props}/>}
                </PubPointAnimator>;

         case "object":
          return <PubPointAnimator onFrame={this.props.captureFrameCallback}>
                  {props => <BaseCanvasKonvaImage  imageSrc={this.currentObject.image}
                                                   type={this.currentObject.type}
                                                   assetIndex={this.props.objectIndex}
                                                   onAssetClicked={this.doNothing}
                                                   onPositionChange={this.doNothing}
                                                   onTransformChange={this.doNothing}
                                                   {...props}/>}
                 </PubPointAnimator>;

          case "landscape":
           return <PubPointAnimator onFrame={this.props.captureFrameCallback}>
                   {props => <BaseCanvasKonvaImage  imageSrc={this.currentObject.image}
                                                    type={this.currentObject.type}
                                                    assetIndex={this.props.objectIndex}
                                                    onAssetClicked={this.doNothing}
                                                    onPositionChange={this.doNothing}
                                                    onTransformChange={this.doNothing}
                                                    { ...props } />}
                  </PubPointAnimator>;

           case GEOMETRIC_FORMS.fr.RECTANGLE:
             return <Rect  x={parseInt(this.currentObject.x)}
                           y={parseInt(this.currentObject.y)}
                           width={parseInt(this.currentObject.width)}
                           height={parseInt(this.currentObject.height)}
                           fill={this.currentObject.fill}
                           stroke={this.currentObject.stroke}
                           strokeWidth={parseInt(this.currentObject.strokeWidth)}
                           className="GeometricForm"
                           onPositionChange={this.props.onPositionChange}
                           onTransformChange={this.props.onTransformChange}
                           onClick={this.props.onAssetClicked}  />;

          case GEOMETRIC_FORMS.fr.CIRCLE:
           return <Circle  x={parseInt(this.currentObject.x)}
                           y={parseInt(this.currentObject.y)}
                           radius={parseInt(this.currentObject.radius)}
                           fill={this.currentObject.fill}
                           stroke={this.currentObject.stroke}
                           strokeWidth={parseInt(this.currentObject.strokeWidth)}
                           className="GeometricForm"
                           onPositionChange={this.props.onPositionChange}
                           onTransformChange={this.props.onTransformChange}
                           onClick={this.props.onAssetClicked}   />;

           case GEOMETRIC_FORMS.fr.ELLIPSE:
            return <Ellipse  x={parseInt(this.currentObject.x)}
                             y={parseInt(this.currentObject.y)}
                             radius={{x: parseInt(this.currentObject.radiusX), y:parseInt(this.currentObject.radiusY)}}
                             fill={this.currentObject.fill}
                             stroke={this.currentObject.stroke}
                             strokeWidth={parseInt(this.currentObject.strokeWidth)}
                             className="GeometricForm"
                             onPositionChange={this.props.onPositionChange}
                             onTransformChange={this.props.onTransformChange}
                             onClick={this.props.onAssetClicked}   />;

           case GEOMETRIC_FORMS.fr.REGULARPOLYGON:
            return <RegularPolygon  x={parseInt(this.currentObject.x)}
                                    y={parseInt(this.currentObject.y)}
                                    sides={parseInt(this.currentObject.sides)}
                                    radius={parseInt(this.currentObject.radius)}
                                    fill={this.currentObject.fill}
                                    stroke={this.currentObject.stroke}
                                    strokeWidth={parseInt(this.currentObject.strokeWidth)}
                                    className="GeometricForm"
                                    onPositionChange={this.props.onPositionChange}
                                    onTransformChange={this.props.onTransformChange}
                                    onClick={this.props.onAssetClicked}   />;

            case "textfield":
             return <Text  fontSize={parseInt(this.currentObject.fontSize)}
                           text={this.currentObject.inputText}
                           fill={this.currentObject.color}
                           x={parseInt(this.currentObject.xValue)}
                           y={parseInt(this.currentObject.yValue)}
                           fontFamily={this.currentObject.fontFamily}
                           align={this.currentObject.align}
                           width={parseInt(this.currentObject.width)}
                           name={this.currentObject.name}
                           type={this.props.type}
                           className="Textfield"
                           onPositionChange={this.props.onPositionChange}
                           onTransformChange={this.props.onTransformChange}
                           onClick={this.props.onAssetClicked} />;
      }
    };

    return (
      <ErrorBoundary>
        { animationRenderer() }
      </ErrorBoundary>
    );
  }
}

export default BaseCanvasKonvaAnimatedObject;
