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
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import TimelineControlContainer from './specific-components/TimelineControlContainer';


import object from '../images/icons/object-timeline.png';
import camera from '../images/icons/camera-timeline.png';
import music from '../images/icons/music-timeline.png';



function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 3 }}>
      {children}
    </Typography>
  );
}

class TimelineControl extends React.Component {
  state = {
    value: 0,
    sliderValue: 10,
    selectedMenu: "object",
  };
  constructor(props){
    super(props);
  }

  selectObjectMenu = () => {
    this.setState({selectedMenu : "object"});
  };

  selectCameraMenu = () => {
    this.setState({selectedMenu : "camera"});
  };

  selectMusicMenu = () => {
    this.setState({selectedMenu : "music"});
  };

  render() {
    const value = this.state.value;
    const sliderValue = this.state.sliderValue;
    const selectedMenu = this.state.selectedMenu;
    return (
      <div className="Timeline-panel">
        <ul className="Margin-bottom-none Padding-none Timeline-object-thumb-list">
          <li className={"Timeline-icon-thumb " + (selectedMenu === "object" ? "Background-glass" : "")}
              onClick={this.selectObjectMenu}>
            <Tooltip title="Objets">
              <img src={object} alt={"Object"} height={40}/>
            </Tooltip>
          </li>
          <li className={"Timeline-icon-thumb " + (selectedMenu === "camera" ? "Background-glass" : "")}
              onClick={this.selectCameraMenu}>
            <Tooltip title="Camera">
              <img src={camera} alt={"Camera"} height={40}/>
            </Tooltip>
          </li>
          {/*<li className={"Timeline-icon-thumb " + (selectedMenu === "music" ? "Background-glass" : "")}
              onClick={this.selectMusicMenu}>
            <Tooltip title="Musique">
              <img src={music} alt={"Music"} height={40}/>
            </Tooltip>
          </li>*/}
        </ul>
        <TimelineControlContainer  sliderValue={sliderValue}
                                   sceneList={this.props.sceneList}
                                   selectedSceneIndex={this.props.currentSceneIndex}
                                   objectList={this.props.objectList}
                                   selectedMenu={selectedMenu}/>

      </div>
    );
  }
}

export default TimelineControl;
