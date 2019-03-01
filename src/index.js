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
 import ReactDOM from 'react-dom';
 import { BrowserRouter as Router } from 'react-router-dom';
 import { Routes } from './routes';
 import './index.css';
 import registerServiceWorker from './registerServiceWorker';

 ReactDOM.render(
   <Router>
    <Routes />
   </Router>,
   document.getElementById('root')
 );
 registerServiceWorker();
