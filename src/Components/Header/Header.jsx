import React from 'react';
import uuid from 'react-uuid';
import { RetractableButton } from '../../Elements/Form/Buttons';


export default class Header extends React.Component {


  render() {
    return (
      <>
        <div className="leftWrapper">
          <RetractableButton id={uuid()} classList={["menuBtn"]} content={<><span></span><span></span><span></span></>} />
        </div>
        <div className="centerWrapper"></div>
        <div className="rightWrapper"></div>

        <div className="leftMenu"></div>
        <div className="rightMenu"></div>
      </>
    );
  }
}