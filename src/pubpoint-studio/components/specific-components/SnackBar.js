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
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class SnackBar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  render() {
    var anchorOrigin = {};
    anchorOrigin.vertical = this.props.vertical;
    anchorOrigin.horizontal = this.props.horizontal;
    return (
        <Snackbar
          anchorOrigin={anchorOrigin}
          open={this.props.open}
          autoHideDuration={this.props.duration}
          onClose={this.props.onClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={this.props.message}
          className="Color-white"
        />
    );
  }
}

export default SnackBar;
