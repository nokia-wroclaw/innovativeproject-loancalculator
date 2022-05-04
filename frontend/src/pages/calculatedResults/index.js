import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footerPurple';
import {
  FixedInstallmentsContainer,
  InstallmentContainer,
  IllustrationContainer,
  DescendingInstallmentsContainer,
  YearTabs,
} from './CalculatedResultsElements';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';
import { GradientText } from '../../components/gradientText/GradientText';
import landingPageIllustration from '../../images/landingPageIllustration.svg';

const { TabPane } = YearTabs;

function CalculatedResults() {
  const location = useLocation();

  if (location.state.response.monthly_payment.length !== undefined) {
    return (
      <>
        <DescendingInstallmentsContainer>
          <YearTabs defaultActiveKey="1" centered>
            <TabPane tab="Rok 1" key="1">
              Raty w roku 1
            </TabPane>
            <TabPane tab="Rok 2" key="2">
              Raty w roku 2
            </TabPane>
            <TabPane tab="Rok 3" key="3">
              Raty w roku 3
            </TabPane>
            <TabPane tab="Rok 4" key="4">
              Raty w roku 4
            </TabPane>
          </YearTabs>
        </DescendingInstallmentsContainer>
        <Footer />
      </>
    );
  }
  return (
    <>
      <FixedInstallmentsContainer>
        <InstallmentContainer>
          <SectionTitle>Twoja miesięczna rata kredytu</SectionTitle>
          <GradientText>{location.state.response.monthly_payment}</GradientText>
        </InstallmentContainer>
        <IllustrationContainer>
          <img
            className="img"
            src={landingPageIllustration}
            alt="illustration"
          />
        </IllustrationContainer>
      </FixedInstallmentsContainer>
      <Footer />
    </>
  );
}
export default CalculatedResults;
