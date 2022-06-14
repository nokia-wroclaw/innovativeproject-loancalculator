import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { Container, ChartContainer } from './WiborChartContainerElements';
import WiborChart from './WiborChart';

function WiborChartContainer({ chartData, title }) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <ChartContainer>
        <WiborChart data={chartData.WIBOR_CHART} />
      </ChartContainer>
    </Container>
  );
}

WiborChartContainer.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.oneOfType(PropTypes.objectOf(PropTypes.object))
  ),
  title: PropTypes.string,
};

WiborChartContainer.defaultProps = {
  title: '',
  chartData: [],
};

export default WiborChartContainer;
