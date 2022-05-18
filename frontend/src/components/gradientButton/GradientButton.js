import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const GradientButton = styled(Link)`
  border-radius: 4px;
  background: linear-gradient(97.27deg, #6930c3 -18.07%, #00ffd4 119.43%);
  padding: 1.5rem 2rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 20vmax;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: rgba(39, 31, 127, 1);
  }
`;

export const SubmitButton = styled.button`
  border-radius: 4px;
  background: linear-gradient(97.27deg, #6930c3 -18.07%, #00ffd4 119.43%);
  padding: 1.5rem 2rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 20vmax;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: rgba(39, 31, 127, 1);
  }
`;
