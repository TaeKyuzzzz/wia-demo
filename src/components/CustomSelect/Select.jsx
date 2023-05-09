import React from 'react';
import SelectStyle from './Select.style';
import { CaretDownOutlined } from '@ant-design/icons'
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
class CustomSelect extends React.Component {
    render() {
        const { left, top, width, height, defaultValue, valueLists } = this.props;
        return (
            <SelectStyle
                left={left}
                top={top}
                width={width}
                height={height}
                suffixIcon={<CaretDownOutlined />}
                defaultValue={defaultValue}
                dropdownStyle={{
                    backgroundColor: '#282c34',
                    color: '#ffffff',
                }}
                onChange={handleChange}
                options={valueLists}
            />
        );
    }
}

export default CustomSelect;
