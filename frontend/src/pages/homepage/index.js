import React from 'react';
import {
  Container,
  LogoContainer,
  IllustrationContainer,
  SemiheaderContainer,
} from './IndexElements';
import Footer from '../../components/footerWhite';
import loanlyLogo from '../../images/loanlyLogo.svg';
import landingPageIllustrationSmall from '../../images/landingPageIllustrationSmallScreen.svg';
import landingPageIllustration from '../../images/landingPageIllustration.svg';
import { SemiHeader } from '../../components/semiHeader/SemiHeader';
import { GradientButton } from '../../components/gradientButton/GradientButton';

function Home() {
  return (
    <>
      <Container>
        <LogoContainer>
          <img className="img" src={loanlyLogo} alt="logo" />
        </LogoContainer>
        <SemiheaderContainer>
          <SemiHeader className="semiHeader">
            Wszystko o kredycie hipotecznym <br />w jednym miejscu!
          </SemiHeader>
          <GradientButton to="/kalkulator">Oblicz ratę!</GradientButton>
        </SemiheaderContainer>
        <IllustrationContainer>
          <img
            className="largeImg"
            src={landingPageIllustration}
            alt="homepage illustration"
          />
          <img
            className="smallImg"
            src={landingPageIllustrationSmall}
            alt="homepage illustration"
          />
        </IllustrationContainer>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
