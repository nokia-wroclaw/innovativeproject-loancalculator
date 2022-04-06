import PropTypes from 'prop-types';
import React from 'react';
import loanlyLogo from '../../images/loanlyLogo.svg';
import sidebarIllustration from '../../images/sidebar illustration.svg';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <img
          src={sidebarIllustration}
          width="200px"
          height="auto"
          alt="sidebar illustration"
        />
        <img src={loanlyLogo} width="150px" height="auto" alt="logo" />
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Strona główna{' '}
          </SidebarLink>
          <SidebarLink to="/kalkulator" onClick={toggle}>
            Kalkulator
          </SidebarLink>
          <SidebarLink to="/jak-obliczamy-rate" onClick={toggle}>
            Jak obliczamy ratę?
          </SidebarLink>
          <SidebarLink to="/przydatne-pojecia" onClick={toggle}>
            Przydatne pojęcia
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.objectOf(PropTypes.object),
};

Sidebar.defaultProps = {
  isOpen: false,
  toggle: true,
};

export default Sidebar;
