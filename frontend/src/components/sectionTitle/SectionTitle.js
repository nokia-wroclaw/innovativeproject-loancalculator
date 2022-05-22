import styled from 'styled-components';

export const SectionTitle = styled.p`
  color: rgba(39, 31, 127, 1);
  font-weight: 600;
  font-size: 2.5vmin;
  line-height: 2vh;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    font-size: 2vmax;
    line-height: 1.2vh;
  }
`;
