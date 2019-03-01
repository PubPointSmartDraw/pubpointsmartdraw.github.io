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

 import BaseCanvasKonvaImage from './BaseCanvasKonvaImage';
 import { GEOMETRIC_FORMS } from "../Constants";

 class AnimatedObjectLoader extends Component {

   constructor(props){
     super(props);
   }


   render(){

     const objectRenderer = () => {
       let objectType = this.props.type;
       switch(objectType){
         case "character":
         console.log("Character");
          return <BaseCanvasKonvaImage  x={this.props.x}
                                        y={this.props.y}
                                        rotation={this.props.rotation}
                                        width={this.props.width}
                                        height={this.props.height}
                                        imageSrc={this.props.image}
                                        assetIndex={this.props.assetIndex}
                                        onPositionChange={this.props.onPositionChange}
                                        onTransformChange={this.props.onTransformChange}
                                        onAssetClicked={this.props.onAssetClicked} />;

          case "object":
           return <BaseCanvasKonvaImage  x={this.props.x}
                                         y={this.props.y}
                                         rotation={this.props.rotation}
                                         width={this.props.width}
                                         height={this.props.height}
                                         imageSrc={this.props.image}
                                         assetIndex={this.props.assetIndex}
                                         onPositionChange={this.props.onPositionChange}
                                         onTransformChange={this.props.onTransformChange}
                                         onAssetClicked={this.props.onAssetClicked} />;

           case "landscape":
            return <BaseCanvasKonvaImage  x={this.props.x}
                                          y={this.props.y}
                                          rotation={this.props.rotation}
                                          width={this.props.width}
                                          height={this.props.height}
                                          imageSrc={this.props.image}
                                          assetIndex={this.props.assetIndex}
                                          onPositionChange={this.props.onPositionChange}
                                          onTransformChange={this.props.onTransformChange}
                                          onAssetClicked={this.props.onAssetClicked} />;

            case GEOMETRIC_FORMS.fr.RECTANGLE:
             return <Rect  x={parseInt(this.props.x)}
                           y={parseInt(this.props.y)}
                           width={parseInt(this.props.width)}
                           height={parseInt(this.props.height)}
                           fill={this.props.fill}
                           stroke={this.props.stroke}
                           strokeWidth={parseInt(this.props.strokeWidth)}
                           className="GeometricForm"
                           onPositionChange={this.props.onPositionChange}
                           onTransformChange={this.props.onTransformChange}
                           onClick={this.props.onAssetClicked}/>;

             case GEOMETRIC_FORMS.fr.CIRCLE:
              return <Circle  x={parseInt(this.props.x)}
                              y={parseInt(this.props.y)}
                              radius={parseInt(this.props.radius)}
                              fill={this.props.fill}
                              stroke={this.props.stroke}
                              strokeWidth={parseInt(this.props.strokeWidth)}
                              className="GeometricForm"
                              onPositionChange={this.props.onPositionChange}
                              onTransformChange={this.props.onTransformChange}
                              onClick={this.props.onAssetClicked}   />;

            case GEOMETRIC_FORMS.fr.ELLIPSE:
             return <Ellipse  x={parseInt(this.props.x)}
                              y={parseInt(this.props.y)}
                              radius={{x: parseInt(this.props.radiusX), y:parseInt(this.props.radiusY)}}
                              fill={this.props.fill}
                              stroke={this.props.stroke}
                              strokeWidth={parseInt(this.props.strokeWidth)}
                              className="GeometricForm"
                              onPositionChange={this.props.onPositionChange}
                              onTransformChange={this.props.onTransformChange}
                              onClick={this.props.onAssetClicked}   />;

            case GEOMETRIC_FORMS.fr.REGULARPOLYGON:
             return <RegularPolygon  x={parseInt(this.props.x)}
                                     y={parseInt(this.props.y)}
                                     sides={parseInt(this.props.sides)}
                                     radius={parseInt(this.props.radius)}
                                     fill={this.props.fill}
                                     stroke={this.props.stroke}
                                     strokeWidth={parseInt(this.props.strokeWidth)}
                                     className="GeometricForm"
                                     onPositionChange={this.props.onPositionChange}
                                     onTransformChange={this.props.onTransformChange}
                                     onClick={this.props.onAssetClicked}   />;

             case "textfield":
              return <Text  fontSize={parseInt(this.props.fontSize)}
                            text={this.props.inputText}
                            fill={this.props.color}
                            x={parseInt(this.props.xValue)}
                            y={parseInt(this.props.yValue)}
                            fontFamily={this.props.fontFamily}
                            align={this.props.align}
                            width={parseInt(this.props.width)}
                            name={this.props.name}
                            type={this.props.type}
                            className="Textfield"
                            onPositionChange={this.props.onPositionChange}
                            onTransformChange={this.props.onTransformChange}
                            onClick={this.props.onAssetClicked} />;
       }
     };

     return(
       objectRenderer()
     );
   }
 }

 export default AnimatedObjectLoader;
