import CustomDatePicker from '../components/CustomDatePicker/DatePicker';
import CustomRadioButton from "../components/CustomRadioButton/RadioButton";
// import CustomDropDown from "../components/CustomDropDown/DropDown";
import CustomButton from "../components/CustomButton/Button";
import CustomTable from "../components/CustomTable/Table";
import React from "react";
import CustomSelect from "../components/CustomSelect/Select";

const upperPanelStyle = {
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
    borderRadius: '20px',
}

const lowerPanelStyle = {
    position: 'fixed',
    alignItems: 'flex-end',
    top: '130px',
    left: '15px',
    marginLeft: '0px',
    border: '1px solid rgb(52, 52, 52)',
    padding: '0px',
    overflow: 'hidden',
    backgroundColor: 'rgb(72, 72, 72)',
    color: 'rgb(214, 214, 214)',
    zIndex: '999',
    fontFamily: 'monospace',
    fontSize: '12px',
    width: '1602px',
    height: '600px',
    borderRadius: '20px',
}

const tableColumns = [
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Number of ...',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Movement ...',
        dataIndex: 'mdots',
        key: 'mdots',
    },
    {
        title: 'Movement time',
        dataIndex: 'mt',
        key: 'mt',
    },
    {
        title: 'Number of movement (pair)',
        dataIndex: 'nomp',
        key: 'nomp',
    },
    {
        title: 'Movement distance (pair)',
        dataIndex: 'mdp',
        key: 'mdp',
    },
    {
        title: 'Movement time (pair)',
        dataIndex: 'mtp',
        key: 'mtp',
    },
    {
        title: 'Number of switch arm off',
        dataIndex: 'saoff',
        key: 'saoff',
    },
    {
        title: 'Number of switch arm on',
        dataIndex: 'saon',
        key: 'saon',
    },
    {
        title: 'Lookup',
        dataIndex: 'lu',
        key: 'lu',
    },
];

const orderTypes = [
    {
        label: 'am',
        key: '1',
    },
    {
        label: 'pm',
        key: '2',
    },
];

const thumbString = "Usage history by timezone"

class Page1 extends React.Component {

    constructor() {
        super();
        this.state = {
            robotLists: [
                {
                    value: 'pr01',
                    label: 'PR01',
                },
                {
                    value: 'pr02',
                    label: 'PR02',
                },
                {
                    value: 'pr03',
                    label: 'PR03',
                },
                {
                    value: 'pr04',
                    label: 'PR04',
                    disabled: true,
                },
            ],
            historyTypes: [
                {
                    value: 'usageHT',
                    label: 'Usage history by timezone',
                },
                {
                    value: 'usageHC',
                    label: 'Usage history by category',
                },
            ],
        }
    }

    render() {
        return (
            <div className="page1">
                <div style={upperPanelStyle}>
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
