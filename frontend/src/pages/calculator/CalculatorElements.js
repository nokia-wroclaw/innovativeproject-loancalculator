import styled from 'styled-components';
import { Form } from 'antd';
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
