import React from 'react';

import { appendString } from  '../../Utils/utils';
// import './Buttons.scss';

const StandardButton = (props) => {
    var { classlist, ...other } = props;

    return (
        <button className={classlist.join(' ').trim()} {...other}></button>
    );
}


// export const IconButton = (props) => {
export class IconButton extends React.Component {
    render() {
        var { classList, ...translatedProps } = this.props;

        if ( typeof this.props.predefinedbuttonyype !== 'undefined' ) {

            // eslint-disable-next-line
            var { predefinedbuttonyype, ...translatedProps } = translatedProps;
    
            if (predefinedbuttonyype === 'menu') {
                classList = appendString('iconBtn', classList);
            }
        }
    
        return (
            <StandardButton classlist={[ classList ]} {...translatedProps} />
        );    
    };
}
IconButton.defaultProps = {
    classList: [],
    predefinedbuttonyype: '',
};

export class RetractableButton extends React.Component {
    render() {
        return (
        <>
        <input id={this.props.id} type="checkbox" className="retractableBtn" />
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