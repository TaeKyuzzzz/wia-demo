import React from 'react';
// import './index.css';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const buttonStyle = {
    top: '20px',
    marginLeft: '350px',
}

class CustomButton extends React.Component {
    state = {
        size: 'large',
    }

    render () {
        return (
            <Button type="primary" icon={<DownloadOutlined/>} size={this.state.size} style={buttonStyle}>
                Download
            </Button>
        );
    }
};

export default CustomButton;

// https://codesandbox.io/s/g4iut5?file=/demo.tsx
