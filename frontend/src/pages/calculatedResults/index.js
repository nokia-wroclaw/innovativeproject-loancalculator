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
import { PurpleAccentParagraph } from '../../components/purpleAccentParagraph/PurpleAccentParagraph';

const { TabPane } = YearTabs;

function CalculatedResults() {
  const location = useLocation();

  const getInterestType = (interestType) => {
    if (interestType === 'fixed') return 'Oprocentowanie stałe';
    return 'Oprocentowanie zmienne';
  };

  const fieldNames = [
    'Rodzaj oprocentowania',
    'Rodzaj rat',
    'Wkład własny',
    'Kwota kredytu',
    'Długość trwania',
    'Oprocentowanie',
    'Prowizja',
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
            {getInterestType(location.state.response.user_input.interest_type)}
          </PurpleAccentParagraph>
        </Headers>
        <InstallmentContainer
          title="Twoje koszty kredytu"
          type="baseline_time"
          data={location.state.responseata.baseline_time}
          addon="zł"
        />
        <InstallmentContainer
          title="Twoje dane"
          type="user_input"
          data={location.state.response.user_input}
          fieldNames={fieldNames}
        />
        <InstallmentContainer
          title="Twoje koszty kredytu krótszego o 5 lat"
          type="five_years_less"
          data={location.state.response.five_years_less}
          addon="zł"
        />
        <InstallmentContainer
          title="Twoje koszty kredytu dłuższego o 5 lat"
          type="five_years_more"
          data={location.state.response.five_years_more}
          addon="zł"
        />
        <IllustrationContainer>
          <img className="img" src={resultsIllustration} alt="illustration" />
        </IllustrationContainer>
      </FixedInstallmentsContainer>
      <Footer />
    </>
  );
}
export default CalculatedResults;
