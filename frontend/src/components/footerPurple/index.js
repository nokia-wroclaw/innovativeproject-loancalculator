import React from 'react';
import { FooterContainer } from './FooterPurpleElements';
import loanlyLogo from '../../images/loanlyWhiteLogo.svg';

function Footer() {
  return (
    <FooterContainer>
      <img src={loanlyLogo} width="150px" height="auto" alt="footer logo" />
    </FooterContainer>
  );
}
export default Footer;
