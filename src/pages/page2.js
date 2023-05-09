import CustomDatePicker from '../components/CustomDatePicker/DatePicker';
import CustomRadioButton from "../components/CustomRadioButton/RadioButton";
// import CustomDropDown from "../components/CustomDropDown/DropDown";
import CustomButton from "../components/CustomButton/Button";
import CustomTable from "../components/CustomTable/Table";
import React from "react";
import CustomSelect from "../components/CustomSelect/Select";

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
    width: '1602px',
    height: '100px',
}

class Page2 extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="page2">
                <div style={mapCardPanelStyle}>
                    <CustomDatePicker/>
                    <CustomRadioButton/>
                    AGV ID
                    <CustomSelect left='10px' top='20px' width='120px' defaultValue='pr01' valueLists={this.state.robotLists}/>
                    <CustomButton/>
                </div>
                <br/>
                <div style={lowerPanelStyle}>
                    <CustomSelect left='0px' top='0px' width='220px' height='20px' defaultValue='usageHT' valueLists={this.state.historyTypes}/>
                    <br/>
                    <CustomTable/>
                </div>
            </div>
        );
    }
}

export default Page1;
