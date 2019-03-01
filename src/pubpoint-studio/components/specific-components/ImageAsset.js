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
import { Image } from 'react-konva';
import { Spring } from 'react-spring/dist/konva';

class ImageAsset extends Component {
  state = {
    image: null,
    flag: false
  };
  handleClick = () => {
    console.log("Clicked on image");
    this.setState(state => ({ flag: !state.flag }));
  }

  handleChange = e => {
    const shape = e.target;
    this.props.onTransform({
      x: shape.x(),
      y: shape.y(),
      width: shape.width() * shape.scaleX(),
      height: shape.height() * shape.scaleY(),
      rotation: shape.rotation()
    });
    this.handleClick();
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = this.props.image;
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    const img = this.state.image;
    const { flag } = this.state;
    return (
      <Spring
        native
        from={{ x: 0, shadowBlur: 0}}
        to={{
          x: flag ? 150 : 0,
          shadowBlur: flag ? 25 : 0
        }}
      >
        {props => (
          <Image
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            scaleX={1}
            scaleY={1}
            name={this.props.name}
            image={img}
            onDragEnd={this.handleChange}
            onTransformEnd={this.handleChange}
            draggable
          />
        )}
      </Spring>
    );
  }
}

export default ImageAsset;
