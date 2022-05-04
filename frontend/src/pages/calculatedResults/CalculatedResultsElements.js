import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

export const FixedInstallmentsContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(173, 229, 247, 0) 4.98%,
    rgba(147, 228, 239, 0.0618911) 42.46%,
    rgba(6, 223, 200, 0.4) 74.66%,
    #5e60ce 98.46%
  );
  height: auto;
  min-height: 90vh;
  padding-top: 10vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5fr 0.5fr;
  column-gap: 0.1rem;
  row-gap: 0.1rem;

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 2.5fr 2.5fr 0.5fr;
  }
`;

export const InstallmentContainer = styled.div`
  grid-area: 1/2/2/7;
  background-color: white;
  height: 90%;
  width: 90%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    grid-area: 1/2/2/5;
  }
`;

export const IllustrationContainer = styled.div`
  .img {
    width: 100%;
    height: auto;
  }
  grid-area: 1/8/3/12;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    grid-area: 2/2/3/5;
    width: 80%;
  }
`;

export const DescendingInstallmentsContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(173, 229, 247, 0) 4.98%,
    rgba(147, 228, 239, 0.0618911) 42.46%,
    rgba(6, 223, 200, 0.4) 74.66%,
    #5e60ce 98.46%
  );
  height: auto;
  min-height: 90vh;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
`;

export const YearTabs = styled(Tabs)`
  width: 90%;
  height: 90%;
  justify-self: center;
  align-items: center;
`;
