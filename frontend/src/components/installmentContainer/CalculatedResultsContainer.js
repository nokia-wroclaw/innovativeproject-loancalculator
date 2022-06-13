import styled from 'styled-components';
import { GradientText } from '../gradientText/GradientText';

const handleGridPlacement = (type, screenSize) =>
  ({
    small: {
      baseline_time: '2/2/3/5',
      user_input: '3/2/4/5',
      five_years_more: '5/2/6/5',
      five_years_less: '6/2/7/5',
    },
    medium: {
      baseline_time: '2/2/3/5',
      user_input: '2/6/3/9',
      five_years_more: '3/2/4/5',
      five_years_less: '3/6/4/9',
    },
    large: {
      baseline_time: '2/2/3/7',
      user_input: '3/2/4/7',
      five_years_more: '4/2/5/7',
      five_years_less: '4/7/5/12',
    },
  }[screenSize][type]);

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ${(props) => handleGridPlacement(props.variant, 'large')};

  @media screen and (max-width: 1400px) {
    width: 40vw;
    grid-area: ${(props) => handleGridPlacement(props.variant, 'medium')};
  }

  @media screen and (max-width: 780px) {
    width: 80vw;
    grid-area: ${(props) => handleGridPlacement(props.variant, 'small')};
  }
`;

export const Data = styled.div`
  background-color: white;
  height: 250px;
  width: 100%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    width: 90%;
    align-self: center;
  }

  & > p {
    width: 90%;
    align-self: center;
  }
`;

export const InstallmentValue = styled(GradientText)`
  &&& {
    align-self: center;
    width: auto;
  }
`;
