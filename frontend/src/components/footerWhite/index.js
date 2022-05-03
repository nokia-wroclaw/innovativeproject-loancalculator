import React from 'react';
import { FooterContainer } from './FooterWhiteElements';
import loanlyLogo from '../../images/loanlyLogo.svg';

function Footer() {
  return (
    <FooterContainer>
      <img src={loanlyLogo} width="150px" height="auto" alt="footer logo" />
    </FooterContainer>
  );
}
export default Footer;
