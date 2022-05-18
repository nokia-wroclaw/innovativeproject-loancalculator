import styled from 'styled-components';
import { Slider, InputNumber, Radio } from 'antd';
import 'antd/dist/antd.css';

const handleGridPlacement = (name, screenSize) => {
  if (
    name === 'interest_type' ||
    name === 'installment_type' ||
    name === 'credit_amount'
  ) {
    return {
      interest_type: '1/2/2/5',
      installment_type: '2/2/3/5',
      credit_amount: '3/2/4/5',
    }[name];
  }
  return {
    small: {
      down_payment: '4/2/5/5',
      loan_term: '6/2/7/5',
      interest_rate: '7/2/8/5',
      commission: '8/2/9/5',
    },
    medium: {
      down_payment: '3/6/4/9',
      loan_term: '4/2/5/5',
      interest_rate: '4/6/5/9',
      commission: '5/2/6/5',
    },
    large: {
      down_payment: '3/5/4/9',
      loan_term: '3/9/4/12',
      interest_rate: '4/2/5/5',
      commission: '4/5/5/9',
    },
  }[screenSize][name];
};

export const CustomRadio = styled(Radio)`
  .ant-radio-inner::after {
    background-color: #5e60ce;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: #5e60ce;
  }
`;

export const CustomSlider = styled(Slider)`
  width: 91%;
  .ant-slider-rail {
    background-color: #ccccd8;
  }
  .ant-slider-track {
    background-color: #5e60ce;
  }
  .ant-slider-handle {
    background-color: white;
    border-color: #5e60ce;
  }
  .ant-slider-dot {
    background-color: #fff;
    border-color: #5e60ce;
  }
  .ant-slider-rail:hover {
    background-color: #e5e5f0;
  }
  .ant-slider-track:hover {
    background-color: #06dfc8;
  }
  .ant-slider-handle:hover {
    background-color: #5e60ce;
    border-color: #5e60ce;
  }
  .ant-slider-dot:hover {
    background-color: #fff;
    border-color: #5e60ce;
  }
  .ant-slider-handle:focus {
    background-color: #5e60ce;
    border: #5e60ce;
  }
  .ant-slider-track:focus {
    background-color: #06dfc8;
  }

  .ant-slider-mark-text {
    white-space: nowrap;
  }
`;

export const CustomInput = styled(InputNumber)`
  color: #6930c3;
  font-family: 'Roboto';
  width: 95%;

  .ant-input-number {
    border-color: #6930c3;
  }
  .ant-input-number-group-addon {
    background-color: #6930c3;
    color: #fff;
    border: 1px solid #6930c3;
  }
  .ant-input-number-wrap {
    border: 2px solid #6930c3;
  }
  .ant-input-number-focused {
    box-shadow: 0 0 0 2px rgba(94, 96, 206, 20%);
  }
`;

export const DataPlaceholder = styled.div`
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  width: 26vw;
  height: 200px;

  grid-area: ${(props) => handleGridPlacement(props.variant, 'large')};

  @media screen and (max-width: 1400px) {
    width: 40vw;
    grid-area: ${(props) => handleGridPlacement(props.variant, 'medium')};
  }

  @media screen and (max-width: 780px) {
    width: 80vw;
    grid-area: ${(props) => handleGridPlacement(props.variant, 'small')};
  }
`;
