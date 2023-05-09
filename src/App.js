// import logo from './logo.svg';
import CustomDatePicker from './components/CustomDatePicker/DatePicker';
import CustomRadioButton from "./components/CustomRadioButton/RadioButton";
import CustomDropDown from "./components/CustomDropDown/DropDown";
import CustomButton from "./components/CustomButton/Button";
import CustomTable from "./components/CustomTable/Table";
import './App.css';

const panelStyle = {
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

function App() {
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
          <div className="App">
              <div style={panelStyle}>
                <CustomDatePicker />
                <CustomRadioButton />
                  AGV ID
                <CustomDropDown />
                <CustomButton />
              </div>
              <br />
              <CustomDropDown presetValue={orderTypes} thumbnail={thumbString}/>
              <br />
              <CustomTable />
          </div>
    );
}

export default App;
