import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 40vw;

  @media screen and (max-width: 780px) {
    width: 80vw;
  }
`;
export const ChartContainer = styled.div`
  width: 37vw;
  align-self: center;
  height: 50vh;

  @media screen and (max-width: 780px) {
    width: 80vw;
    height: 50vh;
  }
`;
