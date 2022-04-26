import styled from 'styled-components';

export const PairKey = styled.span`
  font-size: 2vmin;
  color: #271f7f;
  align-self: left;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 2vmax;
  }
`;

export const PairValue = styled.span`
  font-size: 2vmin;
  color: #271f7f;
  align-self: left;
  font-weight: 800;

  @media screen and (max-width: 768px) {
    font-size: 2vmax;
  }
`;

export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
