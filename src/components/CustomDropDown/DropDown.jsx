import React from 'react';
// import './index.css';
import { DownOutlined } from '@ant-design/icons';
// import { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

const dropStyle = {
    top: '20px',
}

class CustomDropDown extends React.Component {

    state = {
        items: [
            {
                label: 'PR01',
                key: '1',
            },
            {
                label: 'PR02',
                key: '2',
            },
            {
                label: 'PR03',
                key: '3',
            },
        ]
    };

    onClick = ({key}) => {
        message.info(`Click on ${key}`);
    }

    render() {
        const { presetValue, thumbnail } = this.props;

        return (
            <Dropdown align={{offset: [0, 20]}} menu={ { items: presetValue || this.state.items, onClick: this.onClick }}>
                <a onClick={(e) => e.preventDefault()}>
                    {
                        thumbnail ? (
                                <Space>
                                    {thumbnail}
                                    <DownOutlined/>
                                </Space>
                            )
                            : (
                                <Space>
                                    AGV ID
                                    <DownOutlined/>
                                </Space>
                            )
                    }
                </a>
            </Dropdown>
        );
    }
}

export default CustomDropDown;
