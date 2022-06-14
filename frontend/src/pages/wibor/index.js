import React from 'react';
import PropTypes from 'prop-types';
import WiborChartContainer from '../../components/wiborChartContainer';
import {
  WiborContainer,
  Headers,
  Explanation,
  RateContainer,
  Rates,
  Chart,
} from './WiborElements';
import Footer from '../../components/footerPurple';

import { SemiHeader } from '../../components/semiHeader/SemiHeader';
import { GradientText } from '../../components/gradientText/GradientText';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';

function Wibor({ historyData }) {
  return (
    <>
      <WiborContainer>
        <Headers>
          <SemiHeader>Czym jest stopa WIBOR?</SemiHeader>
          <Explanation>
            Stawka WIBOR to wysokość oprocentowania, na jaki banki udzielają
            sobie wzajemnie pożyczek. Na jego wysokość mają bezpośredni wpływ
            stopy procentowe NBP, ustalane przez Radę Polityki Pieniężnej.{' '}
            <br />Z punktu widzenia kredytobiorcy wskaźnik ten ma znaczenie,
            ponieważ jego zmiany wypływają na wysokość miesięcznych rat kredytu
            ze zmiennym oprocentowaniem - wzrost wskaźnika WIBOR oznacza wzrost
            rat.
            <br />
            Raty kredytów hipotecznych zależą najczęściej od wskaźnika
            trzymiesięcznego (WIBOR 3M), oraz rzadziej od sześciomiesięcznego
            (WIBOR 6M).
            <br />
            Warto pamiętać że WIBOR to główna, ale nie jedyna część
            oprocentowania kredytu. W większości przypadków banki doliczają do
            niego jeszcze marżę.
          </Explanation>
        </Headers>
        <Rates>
          <RateContainer variant="3M">
            <SectionTitle>WIBOR 3M</SectionTitle>
            <GradientText>
              {
                historyData.WIBOR_CHART[0].data[
                  historyData.WIBOR_CHART[0].data.length - 1
                ].y
              }
            </GradientText>
          </RateContainer>
          <RateContainer variant="6M">
            <SectionTitle>WIBOR 6M</SectionTitle>
            <GradientText>
              {
                historyData.WIBOR_CHART[1].data[
                  historyData.WIBOR_CHART[0].data.length - 1
                ].y
              }
            </GradientText>
          </RateContainer>
        </Rates>
        <Chart>
          <WiborChartContainer
            chartData={historyData}
            title="Wykres stóp Wibor 3M i 6M"
          />
        </Chart>
      </WiborContainer>
      <Footer />
    </>
  );
}
Wibor.propTypes = {
  historyData: PropTypes.objectOf(PropTypes.object)
};

Wibor.defaultProps = {
  historyData: {},
};

export default Wibor;
