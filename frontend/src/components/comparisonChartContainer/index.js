import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { Container, ChartContainer } from './ComparisonChartContainer';
import MyResponsiveBar from './BarChart';

function ComparisonChartContainer({ chartData, title, theme }) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <ChartContainer>
        <MyResponsiveBar data={chartData} color={theme} />
      </ChartContainer>
    </Container>
  );
}

ComparisonChartContainer.propTypes = {
  chartData: PropTypes.objectOf(PropTypes.object),
  title: PropTypes.string,
  theme: PropTypes.string,
};

ComparisonChartContainer.defaultProps = {
  title: '',
  chartData: {},
  theme: '',
};

export default ComparisonChartContainer;
