import React from 'react';

// import './Buttons.scss';

const StandardButton = (props) => {
  let { classList, onClick, ...translatedProps } = props;

  // console.log(classList);
    
  // parser css classes
  // Remove duplicated css class
  let defClassSet = new Set([]);
  let allClassSet = new Set([ ...defClassSet, ...classList ]);
  let classListStr = [ ...allClassSet ].join(' ').trim();  
  
  // console.log(allClassSet, classListStr);

  return (
    <button className={classListStr} onClick={onClick} {...translatedProps}></button>
  );
}


export class IconButton extends React.Component {

  render() {
    let { classList, predefinedButtonType, onClick, ...translatedProps } = this.props;
    let parsered_classList = [...classList];

    if (predefinedButtonType) {
      predefinedButtonType = predefinedButtonType.toLowerCase().trim();

      if (predefinedButtonType === 'exit') {
        parsered_classList.push('exitBtn');
        parsered_classList.push('iconBtn');
      }
      if (predefinedButtonType === 'setting') {
        parsered_classList.push('settingBtn');
        parsered_classList.push('iconBtn');
      }

    }

    return (
      <StandardButton classList={parsered_classList} onClick={onClick} {...translatedProps} />
    );
  };
}
IconButton.defaultProps = {
  classList: ['iconBtn'],
  predefinedButtonType: '',
};


export class RetractableButton extends React.Component {

  render() {
    let {id, classList, predefinedButtonType, content, onClick, buttonChecked} = this.props;

    if (predefinedButtonType) {
      predefinedButtonType = predefinedButtonType.toLowerCase().trim();

      if ((predefinedButtonType === 'menu') && (content === '')) {
        content = (<><span></span><span></span><span></span></>);
      }
  
    }

    return (
      <>
      <input id={id} type="checkbox" className="retractableBtn" onChange={onClick} checked={buttonChecked} tabIndex="-1" />
      <label htmlFor={id} className={`retractableBtn ${classList.join(' ').trim()}`} tabIndex="1">
        {content}
      </label>
      </>
    );
  };
}
RetractableButton.defaultProps = {
  id: '',
  classList: [],
  predefinedButtonType: '',
  content: '',
  buttonChecked: false,
}