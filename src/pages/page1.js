import CustomDatePicker from '../components/CustomDatePicker/DatePicker';
import CustomRadioButton from "../components/CustomRadioButton/RadioButton";
import CustomDropDown from "../components/CustomDropDown/DropDown";
import CustomButton from "../components/CustomButton/Button";
import CustomTable from "../components/CustomTable/Table";

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

function page1() {
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

    return (
        <div className="page1">
            <div style={upperPanelStyle}>
                <CustomDatePicker />
                <CustomRadioButton />
                AGV ID
                <CustomDropDown />
                <CustomButton />
            </div>
            <br />
            <div style={lowerPanelStyle}>
                <CustomDropDown presetValue={orderTypes} thumbnail={thumbString}/>
                <br />
                <CustomTable />
            </div>
        </div>
    );
}

export default page1;
