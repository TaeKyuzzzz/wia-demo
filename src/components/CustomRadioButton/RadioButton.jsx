import React from 'react';
// import './index.css';
// import { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

class CustomRadioButton extends React.Component {
    state = {
        value: 1,
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value,
            });
    }

    render() {
        return (
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1} style={{color: 'rgb(214, 214, 214)', top: '20px'}}>By time</Radio>
                <Radio value={2} style={{color: 'rgb(214, 214, 214)', marginRight: '20px', top: '20px'}}>Operation by period</Radio>
            </Radio.Group>
        );
    }
}

export default CustomRadioButton;
