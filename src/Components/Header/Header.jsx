import React from 'react';
import { IconButton } from '../../Elements/Form/Buttons';

import './Header.scss';


export default class Header extends React.Component {


  render() {
    return (
      <>
        <div className="leftWrapper">
          <IconButton predefinedbuttonyype="menu" />
        </div>
        <div className="centerWrapper"></div>
        <div className="rightWrapper"></div>

        <div className="leftMenu"></div>
        <div className="rightMenu"></div>
      </>
    );
  }
}