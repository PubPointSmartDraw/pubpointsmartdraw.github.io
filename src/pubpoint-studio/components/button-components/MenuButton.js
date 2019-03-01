import React, { Component } from 'react';

import NewIcon from '../../images/icons/new.png';

const MenuButton = () => (
  <div className="Menu-button rounded mr-3 ml-3">
    <img src={NewIcon} alt="New" className="Image-icon align-items-center justify-content-center"/>
  </div>
);

export default MenuButton;
