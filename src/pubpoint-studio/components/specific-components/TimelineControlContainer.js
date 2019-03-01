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


import ObjectTimeLineControl from './ObjectTimeLineControl';
import CameraTimeLineControl from './CameraTimeLineControl';
import MusicTimeLineControl from './MusicTimeLineControl';

class TimelineControlContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const selectedMenu = this.props.selectedMenu;
    const currentSceneDuration = this.props.sceneList[this.props.selectedSceneIndex].duration;

    switch (selectedMenu){
      case "object":
        return(
          <ObjectTimeLineControl  sceneDuration={currentSceneDuration}
                                  objectList={this.props.objectList}/>
        );
      case "camera":
        return(
          <CameraTimeLineControl  sceneDuration={currentSceneDuration}
                                  sceneList={this.props.sceneList}/>
        );
      case "music":
        return(
          <MusicTimeLineControl  sliderValue={this.props.sliderValue}
                                 sceneList={this.props.sceneList}/>
        );
      default:
        return(
          <ObjectTimeLineControl  sliderValue={this.props.sliderValue}
                                  objectList={this.props.objectList}/>
        );
    }
  }
}

export default TimelineControlContainer;
