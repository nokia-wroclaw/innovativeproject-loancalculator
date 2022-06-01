import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footerPurple';
import {
  FixedInstallmentsContainer,
  IllustrationContainer,
  DescendingInstallmentsContainer,
  YearTabs,
  Headers,
} from './CalculatedResultsElements';
import resultsIllustration from '../../images/results illustration.svg';
import { SemiHeader } from '../../components/semiHeader/SemiHeader';
import InstallmentContainer from '../../components/installmentContainer';
import { PurpleAccentParagraph } from '../../components/accentParagraph/AccentParagraph';
import containerData from './containerData';

const { TabPane } = YearTabs;
function CalculatedResults() {
  const location = useLocation();

  const responseData = [
    location.state.response.baseline_time,
    location.state.response.user_input,
    location.state.response.five_years_less,
    location.state.response.five_years_more,
  ];

  if (location.state.response?.user_input?.installment_type !== 'fixed') {
    return (
      <>
        <DescendingInstallmentsContainer>
          <YearTabs defaultActiveKey="1" centered>
            <TabPane tab="Year 1" key="1">
              Placeholder for descending installments
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
        <Headers>
          <SemiHeader>Twoja rata kredytu</SemiHeader>
          <PurpleAccentParagraph>
            {location.state.response.user_input.interest_type === 'fixed'
              ? 'Oprocentowanie stałe'
              : 'Oprocentowanie zmienne'}
          </PurpleAccentParagraph>
        </Headers>
        {containerData.map((item, index) => (
          <InstallmentContainer
            key={item.id}
            title={item.title}
            type={item.type}
            data={responseData[index]}
            addon={item.addon}
            fieldNames={item.fieldNames}
          />
        ))}
        <IllustrationContainer>
          <img className="img" src={resultsIllustration} alt="illustration" />
        </IllustrationContainer>
      </FixedInstallmentsContainer>
      <Footer />
    </>
  );
}
export default CalculatedResults;
