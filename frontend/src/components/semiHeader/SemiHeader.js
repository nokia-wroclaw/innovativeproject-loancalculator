import styled from 'styled-components';

export const SemiHeader = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 3vmin;
  color: #271f7f;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    font-size: 4vmin;
  }
`;
