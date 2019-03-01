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
import Konva from 'konva';
import { render } from 'react-dom';
import { Image } from 'react-konva';


class BaseCanvasKonvaImage extends Component {
  state = {
    image: null,
  };
  componentWillMount() {
    const image = new window.Image();
    image.src = this.props.imageSrc;
    image.onload = () => {
      this.setState({
        image: image,
      });
    };
  }

 handleDragEnd = e => {
   console.log("drag end");
   const shape = e.target;
   this.props.onPositionChange(this.props.assetIndex, {
     x: shape.x(),
     y: shape.y(),
   });
 };

 handleTransformEnd = e => {
    const shape = e.target;
    this.props.onTransformChange(this.props.assetIndex, {
      width: shape.width() * shape.scaleX(),
      height: shape.height() * shape.scaleY(),
      rotation: shape.rotation()
    });
  };

  handlerOnContextMenuOpen = (event) => {
    //console.log(event.target);
    this.props.onAssetContextMenu(event, this.props.assetIndex);
  };

  render() {
    return (
          <Image image={this.state.image}
                  name={this.state.src+"--"+this.props.assetIndex}
                  type={this.props.type}
                  draggable
                  x={this.props.x}
                  y={this.props.y}
                  width={this.props.width}
                  height={this.props.height}
                  rotation={this.props.rotation}
                  onDragStart={this.handleDragStart}
                  onDragEnd={this.handleDragEnd}
                  onTransformEnd={this.handleTransformEnd}
                  onClick={this.props.onAssetClicked}
                  />

    );
  }
}

export default BaseCanvasKonvaImage;
