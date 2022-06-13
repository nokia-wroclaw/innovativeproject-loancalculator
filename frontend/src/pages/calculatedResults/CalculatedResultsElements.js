import styled from 'styled-components';
import { Tabs } from 'antd';

export const FixedInstallmentsContainer = styled.div`
  background: #f8f6fb;
  height: auto;
  min-height: 90vh;
  padding-top: 10vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.4fr repeat(3, 1fr) 0.2fr;
  column-gap: 2rem;
  row-gap: 2rem;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 0.4fr repeat(2, 1fr) 0.2fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 0.4fr repeat(5, 1fr) 0.2fr;
  }
`;

export const Headers = styled.div`
  grid-area: 1/2/2/7;

  @media screen and (max-width: 1400px) {
    grid-area: 1/2/2/9;
  }

  @media screen and (max-width: 768px) {
    grid-area: 1/2/2/5;
  }
`;

export const IllustrationContainer = styled.div`
  .img {
    width: 90%;
    height: auto;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-area: 2/7/4/12;
  justify-self: center;
  align-self: center;

  @media screen and (max-width: 1400px) {
    display: none;
  }

  @media screen and (max-width: 780px) {
    grid-area: 4/2/5/5;
    display: block;
    width: 80%;
  }
`;

export const DescendingInstallmentsContainer = styled.div`
  background: #f8f6fb;
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
