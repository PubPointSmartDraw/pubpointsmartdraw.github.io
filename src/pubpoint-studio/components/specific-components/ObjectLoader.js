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

 class ObjectLoader extends Component {

   constructor(props){
     super(props);
   }

   handleDragEnd = e => {
     console.log("drag end");
     const shape = e.target;
     this.props.onPositionChange(this.props.assetIndex, {
       x: shape.x(),
       y: shape.y(),
     });
   };

   render(){

     const objectRenderer = () => {
       let objectToLoad = this.props.objectToLoad;
       let objectType = objectToLoad.type;
       switch(objectType){
         case "character":
          return <BaseCanvasKonvaImage  x={objectToLoad.x}
                                        y={objectToLoad.y}
                                        rotation={objectToLoad.rotation}
                                        width={objectToLoad.width}
                                        height={objectToLoad.height}
                                        imageSrc={objectToLoad.image}
                                        assetIndex={this.props.assetIndex}
                                        touched={this.props.touched}
                                        onPositionChange={this.props.onPositionChange}
                                        onTransformChange={this.props.onTransformChange}
                                        onAssetClicked={this.props.onAssetClicked} />;

          case "object":
           return <BaseCanvasKonvaImage  x={objectToLoad.x}
                                         y={objectToLoad.y}
                                         rotation={objectToLoad.rotation}
                                         width={objectToLoad.width}
                                         height={objectToLoad.height}
                                         imageSrc={objectToLoad.image}
                                         assetIndex={this.props.assetIndex}
                                         touched={this.props.touched}
                                         onPositionChange={this.props.onPositionChange}
                                         onTransformChange={this.props.onTransformChange}
                                         onAssetClicked={this.props.onAssetClicked} />;

           case "landscape":
            return <BaseCanvasKonvaImage  x={objectToLoad.x}
                                          y={objectToLoad.y}
                                          rotation={objectToLoad.rotation}
                                          width={objectToLoad.width}
                                          height={objectToLoad.height}
                                          imageSrc={objectToLoad.image}
                                          assetIndex={this.props.assetIndex}
                                          touched={this.props.touched}
                                          onPositionChange={this.props.onPositionChange}
                                          onTransformChange={this.props.onTransformChange}
                                          onAssetClicked={this.props.onAssetClicked} />;

            case GEOMETRIC_FORMS.fr.RECTANGLE:
             return <Rect  x={parseInt(objectToLoad.x)}
                           y={parseInt(objectToLoad.y)}
                           width={parseInt(objectToLoad.width)}
                           height={parseInt(objectToLoad.height)}
                           fill={objectToLoad.fill}
                           stroke={objectToLoad.stroke}
                           strokeWidth={parseInt(objectToLoad.strokeWidth)}
                           className="GeometricForm"
                           onDragEnd={this.handleDragEnd}
                           onPositionChange={this.props.onPositionChange}
                           onTransformChange={this.props.onTransformChange}
                           onClick={this.props.onAssetClicked}/>;

             case GEOMETRIC_FORMS.fr.CIRCLE:
              return <Circle  x={parseInt(objectToLoad.x)}
                              y={parseInt(objectToLoad.y)}
                              radius={parseInt(objectToLoad.radius)}
                              fill={objectToLoad.fill}
                              stroke={objectToLoad.stroke}
                              strokeWidth={parseInt(objectToLoad.strokeWidth)}
                              className="GeometricForm"
                              onPositionChange={this.props.onPositionChange}
                              onTransformChange={this.props.onTransformChange}
                              onClick={this.props.onAssetClicked}   />;

            case GEOMETRIC_FORMS.fr.ELLIPSE:
             return <Ellipse  x={parseInt(objectToLoad.x)}
                              y={parseInt(objectToLoad.y)}
                              radius={{x: parseInt(objectToLoad.radiusX), y:parseInt(objectToLoad.radiusY)}}
                              fill={objectToLoad.fill}
                              stroke={objectToLoad.stroke}
                              strokeWidth={parseInt(objectToLoad.strokeWidth)}
                              className="GeometricForm"
                              onPositionChange={this.props.onPositionChange}
                              onTransformChange={this.props.onTransformChange}
                              onClick={this.props.onAssetClicked}   />;

            case GEOMETRIC_FORMS.fr.REGULARPOLYGON:
             return <RegularPolygon  x={parseInt(objectToLoad.x)}
                                     y={parseInt(objectToLoad.y)}
                                     sides={parseInt(objectToLoad.sides)}
                                     radius={parseInt(objectToLoad.radius)}
                                     fill={objectToLoad.fill}
                                     stroke={objectToLoad.stroke}
                                     strokeWidth={parseInt(objectToLoad.strokeWidth)}
                                     className="GeometricForm"
                                     onPositionChange={this.props.onPositionChange}
                                     onTransformChange={this.props.onTransformChange}
                                     onClick={this.props.onAssetClicked}   />;

             case "textfield":
              return <Text  fontSize={parseInt(objectToLoad.fontSize)}
                            text={objectToLoad.inputText}
                            fill={objectToLoad.color}
                            x={parseInt(objectToLoad.xValue)}
                            y={parseInt(objectToLoad.yValue)}
                            fontFamily={objectToLoad.fontFamily}
                            align={objectToLoad.align}
                            width={parseInt(objectToLoad.width)}
                            name={objectToLoad.name}
                            type={objectToLoad.type}
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

 export default ObjectLoader;
