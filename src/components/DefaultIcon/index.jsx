import React, { Component } from 'react';
import StyleWrapper from './DefaultIcon.style'

class DefaultIcon extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <StyleWrapper>
                <text className="icon-text">
                    ICON
                </text>
            </StyleWrapper>
        );
    }
}

export default DefaultIcon;
