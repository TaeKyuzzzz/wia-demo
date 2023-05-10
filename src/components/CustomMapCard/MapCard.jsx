import React, { Component } from 'react';
import { EditOutlined, HistoryOutlined } from "@ant-design/icons";

class CustomMapCard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            version: '',
            date: '',
            img: '',
        }
    }

    componentDidMount() {
        const { mapName, version, date, mapImg } = this.props
        this.setState({
            name: mapName || '',
            version: version || '',
            date: date || '',
            img: mapImg || '',
        });
    }

    render() {
        return(
            <div>
                <br/>
                <text style={{position: "relative", left: '0px', fontSize: 20, color: '#ffffff', marginRight: '100px'}}>{this.state.name}</text>
                <EditOutlined style={{fontSize: '25px', marginRight: '20px'}}/>
                <HistoryOutlined style={{fontSize: '25px'}}/>
                <br />
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8H40JY7v9wyFCNUHctjxVyXwBF9O6jMTsuQhlUvviS559bedVqN9UGvb8TL4-DEiON8&usqp=CAU'} style={{width: '250px', height: '220px'}} />
                <br />
                <text style={{fontSize: 18, color: '#ffffff', marginRight: '60px'}}>{this.state.version}</text>
                <text style={{fontSize: 18, color: '#ffffff'}}>{this.state.date}</text>
            </div>
        );
    }
}

export default CustomMapCard;
