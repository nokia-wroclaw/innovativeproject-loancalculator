import styled from 'styled-components';
import { Table } from 'antd';

export const Container = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 70vw;
  }
`;
export const InstallmentTable = styled(Table)`
  width: 45vw;

  @media screen and (max-width: 780px) {
    width: 90vw;
  }
`;

export const ChartContainer = styled.div`
  width: 55vw;
  align-self: center;
  justify-self: flex-end;
  height: 100vh;

  @media screen and (max-width: 780px) {
    width: 100vw;
    height: 55vh;
  }
`;
