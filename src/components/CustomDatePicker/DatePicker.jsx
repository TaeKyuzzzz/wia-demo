import React from 'react';
// import './index.css';
import { DatePicker } from 'antd';
// import { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

const { RangePicker } = DatePicker;

const pickerStyle = {
    top: '20px',
    marginRight: '50px',
}

class CustomDatePicker extends React.Component {

    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    onOk = (value) => {
        console.log('onOk: ', value);
    };

    render() {
        return (
            <RangePicker
                style={pickerStyle}
                showTime={{format: 'HH:mm'}}
                format="YYYY-MM-DD HH:mm"
                onChange={this.onChange}
                onOk={this.onOk}
            />
        );
    };
}

export default CustomDatePicker;
