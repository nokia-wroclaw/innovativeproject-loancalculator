import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import loanlyLogo from '../../images/loanlyWhiteLogo.svg';
const Navbar= () => {
  return (
    <>
        <Nav>
            <NavLink to='/'>
                <img src={loanlyLogo} alt="Yoł yoł yoł"/>
            </NavLink>
            <Bars />
            <NavMenu>
            <NavBtn>
                <NavBtnLink to="/kalkulator">Kalkulator</NavBtnLink>
            </NavBtn>
                <NavLink to="/jak-obliczamy-rate" activeStyle>Jak Obliczamy Rate?</NavLink>
                <NavLink to="/przydatne-pojecia" activeStyle>Przydatne Pojecia</NavLink>
            </NavMenu>

        </Nav>
    </>
  );
};

export default Navbar;
