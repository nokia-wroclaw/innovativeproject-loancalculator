import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  background-color: rgba(248, 246, 251, 1);
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: rgba(39, 31, 127, 1);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #f8f6fb;
  align-items: center;
  row-gap: 2rem;
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  text-align: center;
`;
export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #271f7f;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    color: #5e60ce;
    transition: 0.2s ease-in-out;
  }
`;

export const SideIllustration = styled.img`
  width: 200px;
  height: auto;
`;

export const LoanlyLogo = styled.img`
  width: 150px;
  height: auto;
`;
