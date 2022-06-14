import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  width: 82vw;
  align-self: center;
  @media screen and (max-width: 780px) {
    width: 80vw;
    height: auto;
  }
`;
export const ChartContainer = styled.div`
  align-self: center;
  height: 80vh;
  width: 80vw;

  @media screen and (max-width: 780px) {
    height: 50vh;
    width: 80vw;
  }
`;
