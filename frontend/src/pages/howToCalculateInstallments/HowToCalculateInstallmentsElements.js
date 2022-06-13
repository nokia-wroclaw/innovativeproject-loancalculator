import styled from 'styled-components';
import { WhiteAccentParagraph } from '../../components/AccentParagraph/AccentParagraph';

export const Container = styled.div`
  background-color: ${(props) =>
    props.variant === 'light' ? '#f9f6fb' : '#271F7F'};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: ${(props) =>
    props.variant === 'light' ? '0.5fr 1.5fr 0.5fr' : 'auto 0.5fr 1.5fr 0.5fr'};
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-rows: ${(props) =>
      props.variant === 'light' ? '0.5fr 1fr 0.5fr' : 'auto 0.5fr 1fr 0.5fr'};
  }
`;
export const Headers = styled.div`
  grid-area: 1/2/2/12;
`;

export const Formula = styled.div`
  grid-area: ${(props) =>
    props.variant === 'light' ? '2/4/3/10' : '3/4/4/10'};
  background-color: white;
  padding: 5rem;
  width: 50vw;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .katex .base {
    font-weight: 400;
    font-size: 3vmax;
    color: #271f7f;
    font-family: 'Roboto';
    line-height: 0rem;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
    padding: 0.5rem 0rem;

    .katex .base {
      font-size: 4vmax;
    }
  }
`;
export const Explanation = styled.div`
  font-family: 'Roboto';
  font-size: 1.125rem;
  color: white;
  grid-area: 2/2/3/12;
  padding: 1.5rem 0rem;
`;

export const FormulaItems = styled.div`
  grid-area: ${(props) =>
    props.variant === 'light' ? '3/2/4/12' : '4/2/5/12'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: self-start;
  }
`;

export const FormulaItem = styled.p`
  color: ${(props) => (props.variant === 'light' ? '#fff' : '#271F7F')};
  font-family: 'Roboto';
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem 0rem;
  max-width: 250px;

  @media screen and (max-width: 768px) {
    padding: 0rem;
    max-width: 80vw;
    text-align: left;
  }
`;
export const WhiteSubtitle = styled(WhiteAccentParagraph)`
  grid-area: 1/2/2/12;
  margin-bottom: 0;
`;
