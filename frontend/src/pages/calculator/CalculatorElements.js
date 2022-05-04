import styled from 'styled-components';
import { Form, Slider, InputNumber } from 'antd';
import { SubmitButton } from '../../components/gradientButton/GradientButton';
import 'antd/dist/antd.css';

export const FormContainer = styled(Form)`
  height: auto;
  min-height: 90vh;
  padding-top: 10vh !important;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr) 0.5fr;
  column-gap: 0.5rem;
  row-gap: 2rem;
  background-color: #f9f6fb;
  align-content: center;
  justify-items: center;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(5, 1fr) 0.5fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr) 1.5fr repeat(4, 1fr) 0.5fr;
  }
`;
export const CustomSlider = styled(Slider)`
  width: 95%;
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
  width: 25vw;
  height: 200px;

  @media screen and (max-width: 1400px) {
    width: 40vw;
  }

  @media screen and (max-width: 780px) {
    width: 80vw;
  }
`;

export const BoxOne = styled(DataPlaceholder)`
  grid-area: 1/2/2/5;

  @media screen and (max-width: 1400px) {
    grid-area: 1/2/2/5;
  }

  @media screen and (max-width: 780px) {
    grid-area: 1/2/2/5;
  }
`;
export const BoxTwo = styled(DataPlaceholder)`
  grid-area: 2/2/3/5;

  @media screen and (max-width: 1400px) {
    grid-area: 2/2/3/5;
  }
  @media screen and (max-width: 780px) {
    grid-area: 2/2/3/5;
  }
`;
export const BoxThree = styled(DataPlaceholder)`
  grid-area: 3/2/4/5;

  @media screen and (max-width: 1400px) {
    grid-area: 3/2/4/5;
  }
  @media screen and (max-width: 780px) {
    grid-area: 3/2/4/5;
  }
`;
export const BoxFour = styled(DataPlaceholder)`
  grid-area: 3/5/4/9;

  @media screen and (max-width: 1400px) {
    grid-area: 3/6/4/9;
  }
  @media screen and (max-width: 780px) {
    grid-area: 4/2/5/5;
  }
`;
export const BoxFive = styled(DataPlaceholder)`
  grid-area: 3/9/4/12;

  @media screen and (max-width: 1400px) {
    grid-area: 4/2/5/5;
  }
  @media screen and (max-width: 780px) {
    grid-area: 6/2/7/5;
  }
`;
export const BoxSix = styled(DataPlaceholder)`
  grid-area: 4/2/5/5;

  @media screen and (max-width: 1400px) {
    grid-area: 4/6/5/9;
  }
  @media screen and (max-width: 780px) {
    grid-area: 7/2/8/5;
  
`;
export const BoxSeven = styled(DataPlaceholder)`
  grid-area: 4/5/5/9;

  @media screen and (max-width: 1400px) {
    grid-area: 5/2/6/5;
  }
  @media screen and (max-width: 780px) {
    grid-area: 8/2/9/5;
  }
`;
export const ButtonContainer = styled.div`
  grid-area: 4/9/5/12;

  @media screen and (max-width: 1400px) {
    grid-area: 5/6/6/9;
  }
  @media screen and (max-width: 780px) {
    grid-area: 9/2/10/5;
  }
`;
export const CalculatorSubmitButton = styled(SubmitButton)`
  width: 25vw;
  height: 200px;
  border-radius: 25px;
  font-size: 1.125rem;

  @media screen and (max-width: 1400px) {
    width: 40vw;
  }
  @media screen and (max-width: 780px) {
    width: 80vw;
  }
`;

export const IllustrationContainer = styled.div`
  .img {
    width: 80%;
    height: auto;
  }
  grid-area: 1/5/3/12;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1400px) {
    grid-area: 1/6/3/9;

    .img {
      width: 100% !important;
      height: auto;
    }
  }

  @media screen and (max-width: 780px) {
    grid-area: 5/2/6/5;
  }
`;
