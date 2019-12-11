import React from 'react';

import { appendString } from  '../../Utils/utils';

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
    }
}


IconButton.defaultProps = {
    classList: [],
    predefinedbuttonyype: '',
};

// export default IconButton;