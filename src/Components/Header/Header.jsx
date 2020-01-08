import React from 'react';
import uuid from 'react-uuid';
import { RetractableButton, IconButton } from '../../Elements/Form/Buttons';

import '../../sass/layout/_header.scss';
import '../../sass/layout/_navigation.scss';


function SideMenuFC(props) {

  return (
    <div className={props.classes}>
      <div className="headRow">
        <IconButton predefinedButtonType="Exit" onClickEvent={props.onClickEvent}></IconButton>
      </div>
      <div className="footRow">
        
      </div>
    </div>
  );
}


export default class Header extends React.Component {

  state = { 
    mobileMenu_left_Flag: false,
    mobileMenu_right_Flag: false
  };

  toggleMobileMenu = (e) => {
    if (e === 'left') {
      this.setState({
        mobileMenu_left_Flag: !this.state.mobileMenu_left_Flag
      });
    } else if (e === 'right') {
      this.setState({
        mobileMenu_right_Flag: !this.state.mobileMenu_right_Flag
      });
    }
  };

  render() {
    
    var left_sideMenu, right_sideMenu;

    if (this.state.mobileMenu_left_Flag) {
      left_sideMenu = <SideMenuFC 
            classes="leftMenu active" 
            onClickEvent={() => this.toggleMobileMenu('left')} />
    }
    if (this.state.mobileMenu_right_Flag) {
      right_sideMenu = <SideMenuFC
            classes="rightMenu active"
            onClickEvent={() => this.toggleMobileMenu('right')} />
    }

    return (
      <>
        <div className="leftWrapper">
          <RetractableButton id={uuid()} 
                      classList={["menuBtn"]} 
            predefinedButtonType="Menu"
                    onClickEvent={() => this.toggleMobileMenu('left')}
                    buttonChecked={this.state.mobileMenu_left_Flag} />
        </div>
        <div className="centerWrapper"></div>
        <div className="rightWrapper">
          <IconButton predefinedButtonType="Setting"
                              onClickEvent={() => this.toggleMobileMenu('right')} />
        </div>

        {left_sideMenu}
        {/* <SideMenuFC 
            classes={"leftMenu" + (this.state.mobileMenu_left_Flag ? ' active' : '')} 
            onClickEvent={() => this.toggleMobileMenu('left')} /> */}
        {right_sideMenu}
        {/* <SideMenuFC
            classes={"rightMenu" + (this.state.mobileMenu_right_Flag ? ' active' : '')}
            onClickEvent={() => this.toggleMobileMenu('right')} /> */}
        {/* <div className="rightMenu"></div> */}
      </>
    );
  }
}