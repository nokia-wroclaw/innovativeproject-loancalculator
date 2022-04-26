import styled from 'styled-components';

export const GradientText = styled.p`
  background: linear-gradient(97.27deg, #6930c3 -18.07%, #00ffd4 119.43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 3vmax;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    font-size: 5.5vmax;
  }
`;
