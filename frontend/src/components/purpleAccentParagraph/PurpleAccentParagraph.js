import styled from 'styled-components';

export const PurpleAccentParagraph = styled.p`
  color: #7400b8;
  font-weight: 600;
  font-size: 3vmin;
  padding: 0;
  line-height: 0.5rem;

  @media screen and (max-width: 768px) and (orientation: landscape),
    screen and (max-height: 1400px) and (orientation: portrait) {
    font-size: 4vmin;
  }
`;
