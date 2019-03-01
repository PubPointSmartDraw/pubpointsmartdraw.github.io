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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from 'react-modular-audio-player';


const musiclist = [
  { src: "../../music/AfricanDelightLong.mp3",
    title: "African_Delight_Long",
    artist: "PPSD" },
  { src: "../../music/Be_Fun.mp3",
    title: "Be_Fun",
    artist: "PPSD" }
];

class MusicToolBarAssets extends Component {

  render(){
    let rearrangedPlayer = [
      {
        className: "tier-top",
        style: {margin: "0.3rem 0.3rem 0.3rem 0.3rem", color: "white"},
        innerComponents: [
          {
            type: "volume"
          },
          {
            type: "seek"
          },
          {
            type: "time",
            style: {width: "fit-content"}
          }
        ]
      },
      {
        className: "tier-bottom",
        style: {margin: "0.3rem", color: "white"},
        innerComponents: [
          {
            type: "play",
            style: {width: "fit-content"}
          },
          {
            type: "name",
            style: {width: "100%", overflowX: "hidden"}
          }
        ]
      }
    ];
    return(
      <div className="Center-horizontally">
      <AudioPlayer audioFiles={musiclist}
                   rearrange={rearrangedPlayer}
                   playerWidth="100%"
                   fontSize="0.8rem"
                   iconSize="1.5rem"/>
      </div>
    );
  }
}

export default MusicToolBarAssets;
