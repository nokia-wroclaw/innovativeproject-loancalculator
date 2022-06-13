import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footerPurple';
import {
  FixedInstallmentsContainer,
  IllustrationContainer,
  DescendingContainer,
  YearTabs,
  Headers,
  InfoContainer,
  DescendingChart,
  Content,
  FixedContent,
  TabContainer,
  DescendingIllustrationContainer,
} from './CalculatedResultsElements';
import resultsIllustration from '../../images/results illustration.svg';
import { SemiHeader } from '../../components/semiHeader/SemiHeader';
import InstallmentContainer from '../../components/installmentContainer';
import { PurpleAccentParagraph } from '../../components/AccentParagraph/AccentParagraph';
import containerData from './containerData';
import DescendingInstallmentsContainer from '../../components/DescendingInstallmentsTable';
import userData from './userData';
import DescendingChartContainer from '../../components/descendingChartContainer';
import ComparisonChartContainer from '../../components/comparisonChartContainer';

function CalculatedResults() {
  const location = useLocation();

  const responseData = [
    location.state.response.baseline_time,
    location.state.response.user_input,
    location.state.response.five_years_less,
    location.state.response.five_years_more,
  ];

  const getTitle = (index) => `Rok ${(index + 1).toString()}`;

  const getTabs = (data) =>
    Object.keys(data).map((item, index) => ({
      title: getTitle(index),
      getContent: () => (
        <DescendingInstallmentsContainer
          data={data[item]}
          title={getTitle(index)}
        />
      ),
      key: index,
      tabClassName: 'tab',
      panelClassName: 'panel',
    }));

  const createChartData = (baseline, less, more) => [
    {
      id: 'value',
      'lata bazowe': baseline,
      '5 lat mniej': less,
      '5 lat więcej': more,
    },
  ];

  if (location.state.response?.user_input?.installment_type !== 'fixed') {
    return (
      <>
        <DescendingContainer>
          <Headers>
            <SemiHeader>Twoja rata kredytu</SemiHeader>
            <PurpleAccentParagraph>
              {responseData[1].interest_type === 'fixed'
                ? 'Oprocentowanie stałe'
                : 'Oprocentowanie zmienne'}
            </PurpleAccentParagraph>
          </Headers>
          <TabContainer>
            <YearTabs
              items={getTabs(responseData[0].monthly_payment)}
              transform={false}
              showInkBar
            />
          </TabContainer>
          <InfoContainer>
            <InstallmentContainer
              key={userData[0].id}
              title={userData[0].title}
              type={userData[0].type}
              data={responseData[1]}
              addon={userData[0].addon}
              fieldNames={userData[0].fieldNames}
            />
            <DescendingIllustrationContainer>
              <img
                className="img"
                src={resultsIllustration}
                alt="illustration"
              />
            </DescendingIllustrationContainer>
          </InfoContainer>
          <DescendingChart>
            <DescendingChartContainer
              baselineData={responseData[0].monthly_payment}
              fiveYearsMoreData={responseData[3].monthly_payment}
              fiveYearsLessData={responseData[2].monthly_payment}
            />
          </DescendingChart>
          <Content>
            <ComparisonChartContainer
              chartData={createChartData(
                responseData[0].total_cost,
                responseData[2].total_cost,
                responseData[3].total_cost
              )}
              title="Porównanie kosztów kredytu w zależności od lat"
              theme="purpleRed_green"
            />
            <ComparisonChartContainer
              chartData={createChartData(
                responseData[0].total_interest,
                responseData[2].total_interest,
                responseData[3].total_interest
              )}
              title="Porównanie wysokości odsetek w zależności od lat"
              theme="pink_yellowGreen"
            />
          </Content>
        </DescendingContainer>
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
            {responseData[1].interest_type === 'fixed'
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
        <FixedContent>
          <ComparisonChartContainer
            chartData={createChartData(
              responseData[0].total_cost,
              responseData[2].total_cost,
              responseData[3].total_cost
            )}
            title="Porównanie kosztów kredytu w zależności od lat"
            theme="purpleRed_green"
          />
          <ComparisonChartContainer
            chartData={createChartData(
              responseData[0].total_interest,
              responseData[2].total_interest,
              responseData[3].total_interest
            )}
            title="Porównanie wysokości odsetek w zależności od lat"
            theme="pink_yellowGreen"
          />
        </FixedContent>
      </FixedInstallmentsContainer>
      <Footer />
    </>
  );
}
export default CalculatedResults;
