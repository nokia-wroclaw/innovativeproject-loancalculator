import PropTypes from 'prop-types';
import React from 'react';
import {
  Nav,
  NavLink,
  HamburgerIcon,
  Icon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import loanlyLogo from '../../images/loanlyWhiteLogo.svg';

function Navbar({ toggle }) {
  return (
    <Nav>
      <NavLink to="/">
        <img src={loanlyLogo} width="120px" height="auto" alt="navbar logo" />
      </NavLink>
      <Icon onClick={toggle}>
        <HamburgerIcon />
      </Icon>
      <NavMenu>
        <NavBtn>
          <NavBtnLink to="/kalkulator">Kalkulator</NavBtnLink>
        </NavBtn>
        <NavLink to="/jak-obliczamy-rate">Jak obliczamy ratę?</NavLink>
        <NavLink to="/wibor">Wibor</NavLink>
      </NavMenu>
    </Nav>
  );
}

Navbar.propTypes = {
  toggle: PropTypes.func,
};

Navbar.defaultProps = {
  toggle: 0,
};

export default Navbar;
