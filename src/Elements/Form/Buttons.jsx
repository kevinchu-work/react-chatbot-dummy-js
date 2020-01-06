import React from 'react';

import { appendString } from  '../../Utils/utils';
// import './Buttons.scss';

const StandardButton = (props) => {
  var { classList, ...other } = props;

  return (
    <button className={classList.join(' ').trim()} {...other}></button>
  );
}


// export const IconButton = (props) => {
export class IconButton extends React.Component {
  render() {
    var { classList, ...translatedProps } = this.props;

    if ( typeof this.props.predefinedButtonType !== 'undefined' ) {

      // eslint-disable-next-line
      var { predefinedButtonType, ...translatedProps } = translatedProps;

      if (predefinedButtonType === 'menu') {
        classList = appendString('iconBtn', classList);
      }
    }

    return (
      <StandardButton classList={[ classList ]} {...translatedProps} />
    );
  };
}
IconButton.defaultProps = {
  classList: [],
  predefinedButtonType: '',
};

export class RetractableButton extends React.Component {

  render() {
    return (
      <>
      <input id={this.props.id} type="checkbox" className="retractableBtn" onChange={this.props.onClickEvent} />
      <label htmlFor={this.props.id} className={`retractableBtn ${this.props.classList.join(' ').trim()}`}>
        {this.props.content}
      </label>
      </>
    );
  };

}
RetractableButton.defaultProps = {
  id: '',
  classList: [],
  content: '',
}