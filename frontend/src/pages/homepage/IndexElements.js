import styled from 'styled-components';
import { Layout } from 'antd';

export const Container = styled(Layout)`
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
  grid-template-rows: repeat(2, 1fr);
  column-gap: 0.1rem;
  row-gap: 0.1rem;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
    grid-template-rows: 1fr 2fr 1fr minmax(1rem, 2rem);
    padding-top: 1vh;
  }
`;

export const LogoContainer = styled.div`
  .img {
    max-width: 400px;
    width: 50vmin;
    height: auto;
  }
  grid-area: 1/2/2/7;
  padding-top: 5rem;
  align-self: center;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    grid-area: 1/2/2/5;
    padding-top: 0rem;
    justify-self: center;
  }
`;

export const IllustrationContainer = styled.div`
  .largeImg {
    max-width: 40vw;
    width: 50vw;
    height: auto;
  }
  .smallImg {
    display: none;
  }
  grid-area: 1/7/3/12;
  align-self: center;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    .largeImg {
      display: none;
    }
    .smallImg {
      display: block;
      width: 100%;
    }
    grid-area: 2/2/3/5;
    justify-self: center;
  }
`;

export const SemiheaderContainer = styled.div`
  grid-area: 2/2/3/7;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    grid-area: 3/2/4/5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: -200px;
  }
`;
