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
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import AnimationPlayer from './AnimationPlayer';

class PreviewDownloadModal extends React.Component {
  state = {
    canDownloadAnimationVideo: false,
    downloadAnimationVideo: false,
  }
  constructor(props){
    super(props);
  }

  componentDidMount(){
    setTimeout(this.setCanDownloadAnimationVideo, this.props.totalSceneDuration);
  }

  setCanDownloadAnimationVideo = () => {
    this.setState({
      downloadAnimationVideo: true,
    });
  };

  /**
  * Active le téléchargement de la vidéo d'animation.
  */
  handlerDownloadAnimationVideo = () => {
    this.setState({ canDownloadAnimationVideo : !this.state.canDownloadAnimationVideo });
  };

  render() {
    return (
      <Modal
        open={this.props.animationPreviewWindowOpen}
        onClose={this.props.onCloseAnimationPreviewWindow}
      >
        <Paper className="Screen-player">
          <AnimationPlayer objectList={this.props.objectList}
                           canDownloadAnimationVideo={this.state.downloadAnimationVideo}
                           projectName={this.props.projectName}/>
          <Button variant="contained" color="primary" disabled={this.state.canDownloadAnimationVideo} className="Float-right" onClick={this.handlerDownloadAnimationVideo}>
           Générer le fichier vidéo
          </Button>
        </Paper>
      </Modal>
    );
  }
}

export default PreviewDownloadModal;
