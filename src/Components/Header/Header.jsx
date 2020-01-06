import React from 'react';
import uuid from 'react-uuid';
import { RetractableButton } from '../../Elements/Form/Buttons';

import '../../sass/layout/_header.scss';
import '../../sass/layout/_navigation.scss';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = { mobileMenuFlag: false };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu = (e) => {
    console.log("toggle mobile menu: " + new Date() );
    this.setState({
      mobileMenuFlag: !this.state.mobileMenuFlag
    });
  };

  render() {
    return (
      <>
        <div className="leftWrapper">
          <RetractableButton id={uuid()} classList={["menuBtn"]} 
            content={<><span></span><span></span><span></span></>}
            onClickEvent={this.toggleMobileMenu} />
        </div>
        <div className="centerWrapper"></div>
        <div className="rightWrapper"></div>

        <div className={"leftMenu" + (this.state.mobileMenuFlag ? ' active' : '')} ></div>
        <div className="rightMenu"></div>
      </>
    );
  }
}