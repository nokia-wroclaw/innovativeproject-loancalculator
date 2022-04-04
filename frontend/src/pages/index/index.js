import React from 'react'
import './style.css'
import { Row, Col, Grid, Image, Layout } from 'antd';
import {GradientButton} from '../../components/gradientButton/GradientButton.js'
import { SemiHeader } from '../../components/semiHeader/SemiHeader';
import landingPageIllustration from '../../images/landingPageIllustration.svg';
import landingPageIllustrationSmall from '../../images/landingPageIllustrationSmallScreen.svg';
import loanlyLogo from '../../images/loanlyLogo.svg';

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '90vh'}}>
      <h1>
        Placeholder for homepage
      </h1>
  </div>
);
};

export default Home;