import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 82vw;
  align-self: center;
  @media screen and (max-width: 780px) {
    width: 80vw;
  }
`;
export const ChartContainer = styled.div`
  align-self: center;
  height: 100vh;
  width: 80vw;

  @media screen and (max-width: 780px) {
    height: 50vh;
    width: 90vw;
  }
`;
