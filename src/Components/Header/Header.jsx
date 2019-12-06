import React from 'react';

import './Header.scss';


export default class Header extends React.Component {


    render() {
        return (
            <>
                <div className="leftWrapper"></div>
                <div className="centerWrapper"></div>
                <div className="rightWrapper"></div>

                <div className="leftMenu"></div>
                <div className="rightMenu"></div>
            </>
        );
    }
}