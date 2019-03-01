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
import { Stage, Layer, Text, Group, Image, Line, Rect, Circle, Ellipse, RegularPolygon } from 'react-konva';
import { SCREEN_PARAMETERS, GEOMETRIC_FORMS } from '../Constants';
import Konva from 'konva';

import BaseCanvasKonvaImage from './BaseCanvasKonvaImage';
import BaseCanvasKonvaAnimatedObject from './BaseCanvasKonvaAnimatedObject';
import TransformerComponent from './TransformerComponent';
import ObjectLoader from './ObjectLoader';

import img2 from '../../images/animationTools/characters/gif.gif';
import img3 from '../../images/animationTools/characters/canvas.png';

const imageWidthHeightRatio = 0.707;
const TRANSFORM_CHANGE = "Transform-change";
const POSITION_CHANGE = "Position-change";
var stageSnapshot = null;

class CreationBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      assetObjects: [],
      selectedAssetObject: '',
      windowWidth : 0,
      windowHeight : 0,
      creationBoardHeight : 0,
      creationBoardWidth : 0,
      characterWidth: 0,
      characterHeight: 0,
      characterX: 0,
      characterY: 0,
      x: 0,
      y: 0,
      assetContextMenuOpen: false,
      assetContextMenuAnchorElement: null,
      assetSelectedIndex: 0,
      touched: false,
      snapshot: "",
      gridVerticalLines: [],
      gridHorizontalLines: [],
    };
  }

  componentWillMount(){
    this.updateScreenDimensions();

    window.onresize = () => {
      this.updateScreenDimensions();
    };
  }

  componentDidMount(){
    var foreground = this.refs.foregroundLayer;
    var stage = this.refs.theStage;
    this.updateGridVerticalLines();
    this.updateGridHorizontalLines();
  }


  updateScreenDimensions = () => {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        ch = h*SCREEN_PARAMETERS.WIDTHPROPORTION,
        cw = w*SCREEN_PARAMETERS.HEIGHTPROPORTION;
    this.setState({
      windowWidth : w,
      windowHeight : h,
      creationBoardHeight : ch,
      creationBoardWidth : cw,
    });
  };

 handleAssetsPositionChange = (index, newProps) => {
    this.props.onAssetUpdated(index, newProps, POSITION_CHANGE);
    this.setState({ touched: true });
  };

 handleAssetsTransformChange = (index, newProps) => {
   this.props.onAssetUpdated(index, newProps, TRANSFORM_CHANGE);
 };

 handleStageMouseDown = e => {
   var sceneSnapshot = e.target.getStage().toDataURL();
   this.props.onSceneUpdated({snapshot:sceneSnapshot});

    if (e.target === e.target.getStage()) {
      this.setState({
        selectedAssetObject: ''
      });
      return;
    }

    const clickedOnTransformer = e.target.getParent().className === 'Transformer';
    if (clickedOnTransformer) {
      return;
    }

    const name = e.target.name();
    this.setState({
      selectedAssetObject: name
    });
  };

  handlerDisplayAssetContextMenu = (event, index) => {
    this.props.onAssetContextMenuOpen(event, index);
  };

  updateGridVerticalLines = () => {
    var maxX = this.state.creationBoardWidth,
        maxY = this.state.creationBoardHeight;
    var step = 50;
    var x = 0;
    var verticalLines = [];
    while(x<=maxX){
      verticalLines = verticalLines.concat([x,-1, x+step,-1, x+step,maxY+1, x+step*2,maxY+1]);
      x += step*2;
    }
    this.setState({
      gridVerticalLines: verticalLines,
    });
  };

  updateGridHorizontalLines = () => {
    var maxX = this.state.creationBoardWidth,
        maxY = this.state.creationBoardHeight;
    var step = 50;
    var y = 0;
    var horizontalLines = [];
    while(y<=maxY){
      horizontalLines = horizontalLines.concat([-1,y, -1,y+step, maxX+1,y+step, maxX+1,y+step*2]);
      y += step*2;
    }
    this.setState({
      gridHorizontalLines: horizontalLines,
    });
  };

  render(){
    var updatedCreationBoardWidth = this.state.creationBoardWidth,
        updatedCreationBoardHeight = this.state.creationBoardHeight;
    const objectList = this.props.objectList;
    const touch = this.state.touched;
    const verticalLines = this.state.gridVerticalLines;
    const horizontalLines = this.state.gridHorizontalLines;

    return(
      <Stage width={updatedCreationBoardWidth} height={updatedCreationBoardHeight} className="Background-white"
             onMouseDown={this.handleStageMouseDown} className="Konva-stage">

        <Layer>
          <Rect
           x={0}
           y={0}
           width={updatedCreationBoardWidth}
           height={updatedCreationBoardHeight}
           fill={this.props.backgroundSceneColor}
           shadowBlur={0}
         />

          <Group >
            {objectList.map( (item, index) => (
                <ObjectLoader objectToLoad={item}
                              assetIndex={index}
                              touched={touch}
                              onPositionChange={this.handleAssetsPositionChange}
                              onTransformChange={this.handleAssetsTransformChange}
                              onAssetClicked={event => this.props.onAssetClicked(event, index)}
                              key={item.image+"--"+index} />
            ))}
            </Group>

            {this.props.showGrid && <Line points={verticalLines}
                  stroke="black"
                  strokeWidth={1}
                  dash={[4, 4]}
                  closed={false}
                  lineCap="round"
                  lineJoin="round"/>}
            {this.props.showGrid && <Line points={horizontalLines}
                  stroke="black"
                  strokeWidth={2}
                  dash={[4, 4]}
                  closed={false}
                  lineCap="round"
                  lineJoin="round"/>}
          <TransformerComponent selectedAssetObject={this.state.selectedAssetObject} />
        </Layer>
      </Stage>
    );
  }
}

export default CreationBoard;
