import styled from "styled-components"
import { Select } from "antd";
const SelectStyle = styled(Select)`
  left:${(props) => props.left || '20px'};
  top:${(props) => props.top || '20px'};
  width:${(props) => props.width || '120px'};
  height:${(props) => props.height || '25px'};
   .ant-select-selector {
     border-color: #282c34!important;
     background-color: #282c34!important;
     color: white;
   }
  .ant-select-arrow {
    color: white;
  }
`;
export default SelectStyle
