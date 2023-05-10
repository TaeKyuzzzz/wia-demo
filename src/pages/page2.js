import React from "react";
import CustomMapCard from "../components/CustomMapCard/MapCard";

const mapCardPanelStyle = {
    position: 'fixed',
    top: '10px',
    left: '15px',
    margin: '0px',
    border: '1px solid rgb(52, 52, 52)',
    padding: '0px',
    overflow: 'hidden',
    backgroundColor: 'rgb(72, 72, 72)',
    color: 'rgb(214, 214, 214)',
    zIndex: '999',
    fontFamily: 'monospace',
    fontSize: '12px',
    width: '300px',
    height: '300px',
}

class Page2 extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let mapCardPanelStyle2 = {...mapCardPanelStyle};
        let mapCardPanelStyle3 = {...mapCardPanelStyle};
        mapCardPanelStyle2.left = '330px';
        mapCardPanelStyle3.left = '645px';
        return (
            <div className="page2">
                <div style={mapCardPanelStyle}>
                    <CustomMapCard mapName='Map 1' date='2023 / 05 / 08' version='Ver 1.0' />
                </div>
                <div style={mapCardPanelStyle2}>
                    <CustomMapCard mapName='Map 2' date='2023 / 05 / 09' version='Ver 1.0' />
                </div>
                <div style={mapCardPanelStyle3}>
                    <CustomMapCard mapName='Map 3' date='2023 / 05 / 10' version='Ver 1.0' />
                </div>
            </div>
        );
    }
}

export default Page2;
