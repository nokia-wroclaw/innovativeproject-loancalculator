import styled from 'styled-components';

export const WiborContainer = styled.div`
  background-color: #f9f6fb;
  width: 100%;
  display: grid;
  padding-top: 3rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.2fr 0.1fr 0.4fr 0.1fr;
  @media screen and (max-width: 780px) {
    grid-template-rows: 1fr 0.9fr 0.2fr 0.1fr;
  }
`;

export const Headers = styled.div`
  grid-area: 1/2/2/12;
`;

export const Explanation = styled.span`
  font-family: 'Roboto';
  font-size: 1rem;
  color: #271f7f;
  font-weight: 500;
`;

export const RateContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 2rem 16rem 0rem 16rem;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 780px) {
    padding: 2rem 5rem 0rem 5rem;
  }
`;
export const Rates = styled.div`
  grid-area: 2/2/3/12;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0rem;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: space-around;
  }
`;
export const Chart = styled.div`
  grid-area: 3/2/4/12;
`;
