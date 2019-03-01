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
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


class ObjectTimelineControl extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const objectList = this.props.objectList;
    var formatedDuration = "";
    var tierces = this.props.sceneDuration % 1000;
    var quotient = this.props.sceneDuration - tierces;
    var seconds = quotient / 1000;
    var minutes = 0;
    return (
      <div className="Background-glass">
        <Paper className="Timeline-objectlist">
          <ul className="Timeline-object-thumb-list Padding-top-none">
            {objectList.map((tile, index) => (
              <li key={tile.image+"---"+index} className="Timeline-object-thumb">
                <img src={tile.image} alt={tile.label} height={40}/>
              </li>
            ))}
          </ul>
        </Paper>
        <Grid container direction="row">
          <Grid item xs={2} sm={2}>
            <Paper className="Timeline-slider-value">
              <Typography component="p" className="Color-white">
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ObjectTimelineControl;
