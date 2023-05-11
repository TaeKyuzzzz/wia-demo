import React, { Component } from 'react';
import DefaultIcon from "../DefaultIcon";
import StyleWrapper from 'MenuCard.style';

class MenuCard extends Component {
    constructor() {
        super();
        this.state = {
            imgSrc: '',
            menu: '',
        }
    }

    componentDidMount() {
        const { imgSrc, menu, top, left } = this.props
        this.setState({
            imgSrc: imgSrc || '',
            menu: menu || '',
        });
    }

    render() {
        return(
            <StyleWrapper>
                <DefaultIcon />
                <text className="menu-text">{this.state.menu}</text>
            </StyleWrapper>
        );
    }
}

export default MenuCard;
