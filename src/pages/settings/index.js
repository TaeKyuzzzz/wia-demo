import React from "react";
import CustomMapCard from "../../components/CustomMapCard/MapCard";

const mapCardPanelStyle = {
    position: 'absolute',
    top: '10px',
    left: '15px',
    margin: '0px',
    border: '1px solid rgb(31, 39, 55)',
    padding: '0px',
    overflow: 'hidden',
    backgroundColor: 'rgb(31, 39, 55)',
    color: 'rgb(214, 214, 214)',
    fontFamily: 'monospace',
    fontSize: '12px',
    width: '300px',
    height: '300px',
    borderRadius: '15px',
}

class Settings extends React.Component {

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
