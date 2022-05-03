import styled from 'styled-components';
import { Form, Slider, InputNumber } from 'antd';
import { SubmitButton } from '../../components/gradientButton/GradientButton';
import 'antd/dist/antd.css';

export const FormContainer = styled(Form)`
  height: auto;
  min-height: 90vh;
  padding-top: 10vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr) 0.5fr;
  column-gap: 0.5rem;
  row-gap: 2rem;
  background-color: #f9f6fb;
  align-content: center;
  justify-items: center;
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
`;

export const BoxOne = styled(DataPlaceholder)`
  grid-area: 1/2/2/5;
`;
export const BoxTwo = styled(DataPlaceholder)`
  grid-area: 2/2/3/5;
`;
export const BoxThree = styled(DataPlaceholder)`
  grid-area: 3/2/4/5;
`;
export const BoxFour = styled(DataPlaceholder)`
  grid-area: 3/5/4/9;
`;
export const BoxFive = styled(DataPlaceholder)`
  grid-area: 3/9/4/12;
`;
export const BoxSix = styled(DataPlaceholder)`
  grid-area: 4/2/5/5;
`;
export const BoxSeven = styled(DataPlaceholder)`
  grid-area: 4/5/5/9;
`;
export const ButtonContainer = styled.div`
  grid-area: 4/9/5/12;
`;
export const CalculatorSubmitButton = styled(SubmitButton)`
  width: 25vw;
  height: 200px;
  border-radius: 25px;
  font-size: 1.125rem;
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
`;
// import styled from 'styled-components';
// import { SemiHeader } from '../../components/semiHeader/SemiHeader';
// import { GradientButton } from '../../components/gradientButton/GradientButton';

// export const CalculatorHeader = styled(SemiHeader)`
//   grid-area: 1/2/2/5;
//   align-self: flex-end;
//   width: 100%;
// `;

// export const CalculatorPage = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: 3fr 5fr 5fr 6fr 6fr 3fr;
//   row-gap: 3vmax;
// `;

// export const BoxOne = styled.div`
//   grid-area: 2/2/3/5;
//   align-self: center;
// `;
// export const BoxTwo = styled.div`
//   grid-area: 3/2/4/5;
//   align-self: center;
// `;
// export const BoxThree = styled.div`
//   grid-area: 4/2/5/5;
//   align-self: center;
// `;
// export const BoxFour = styled.div`
//   grid-area: 4/5/5/9;
//   justify-self: center;
//   align-self: center;
// `;
// export const BoxFive = styled.div`
//   grid-area: 4/9/5/12;
//   align-self: center;
// `;
// export const BoxSix = styled.div`
//   grid-area: 5/2/6/5;
//   align-self: center;
// `;
// export const BoxSeven = styled.div`
//   grid-area: 5/5/6/9;
//   justify-self: center;
//   align-self: center;
// `;
// export const CalculatorImage = styled.img`
//   grid-area: 2/6/4/12;
//   width: 70vh;
//   align-self: center;
//   justify-self: center;
// `;

// export const ResultsFooter = styled.div`
//   display: flex;
//   background: linear-gradient(
//     88.54deg,
//     #6930c3 -0.21%,
//     #271f7f 60.5%,
//     #271f7f 112.08%
//   );
//   justify-content: center;
//   padding: 3rem;
// `;

// export const CTAButton = styled(GradientButton)`
//   grid-area: 6/1/7/13;
//   justify-self: center;
//   padding-bottom: 5rem;
//   align-self: center;
// `;
