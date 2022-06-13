import styled from 'styled-components';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';

export const FixedInstallmentsContainer = styled.div`
  background: #f8f6fb;
  height: auto;
  min-height: 90vh;
  padding-top: 10vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.4fr repeat(3, 1fr) 1.5fr 0.2fr;
  column-gap: 2rem;
  row-gap: 2rem;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 0.4fr repeat(2, 1fr) 1.5fr 0.2fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 0.1fr repeat(3, 1fr) 0.1fr;
    grid-template-rows: 0.2fr repeat(5, 1fr) 4fr 0.2fr;
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

const Illustration = styled.div`
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
`;

export const IllustrationContainer = styled(Illustration)`
  .img {
    width: 90%;
    height: auto;
  }
  grid-area: 2/7/4/12;

  @media screen and (max-width: 1400px) {
    display: none;
  }

  @media screen and (max-width: 780px) {
    grid-area: 4/2/5/5;
    display: block;
    width: 95%;
  }
`;

export const DescendingIllustrationContainer = styled(Illustration)`
  .img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const DescendingContainer = styled.div`
  background: #f8f6fb;
  height: auto;
  min-height: 90vh;
  padding-top: 10vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.2fr 1.85fr 1.8fr 1fr 0.2fr;
  column-gap: 2rem;
  row-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 0.1fr repeat(3, 1fr) 0.1fr;
    grid-template-rows: 0.1fr 0.8fr 0.4fr 0.6fr 1.2fr 0.1fr;
  }
`;

export const YearTabs = styled(Tabs)`
  justify-self: center;
  align-items: center;
  background-color: black;
`;

export const TabContainer = styled.div`
  grid-area: 2/2/3/8;
  @media screen and (max-width: 768px) {
    grid-area: 2/2/3/5;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-area: 2/8/3/12;
  @media screen and (max-width: 768px) {
    grid-area: 3/2/4/5;
  }
`;

export const Content = styled.div`
  grid-area: 4/2/5/12;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: space-around;
    grid-area: 5/2/6/5;
  }
`;

export const FixedContent = styled(Content)`
  grid-area: 5/2/5/12;
  padding: 0rem;
  @media screen and (max-width: 780px) {
    grid-area: 7/2/8/5;
  }
`;

export const DescendingChart = styled.div`
  grid-area: 3/2/4/12;
  @media screen and (max-width: 780px) {
    grid-area: 4/2/5/5;
  }
`;
