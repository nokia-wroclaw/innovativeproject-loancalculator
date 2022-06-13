import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { Container, ChartContainer } from './DescendingChartContainerElements';
import MyResponsiveLine from './LineChart';

const months = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
];

const createChartData = (index, value, year) => ({
  x: `Rok ${year.toString()} - ${months[index]}`,
  y: value,
});

const iterateBaselineData = (chartData, array, year) => {
  for (let i = 0; i < array.length; i += 1) {
    chartData[0].data.push(
      createChartData(i, array[i], year + 1, 'Czas bazowy: ')
    );
  }
  return chartData;
};
const iterateFiveYearsMoreData = (chartData, array, year) => {
  for (let i = 0; i < array.length; i += 1) {
    chartData[1].data.push(
      createChartData(i, array[i], year + 1, '5 lat dłużej: ')
    );
  }
  return chartData;
};
const iterateFiveYearsLessData = (chartData, array, year) => {
  for (let i = 0; i < array.length; i += 1) {
    chartData[2].data.push(
      createChartData(i, array[i], year + 1, '5 lat krócej: ')
    );
  }
  return chartData;
};

function DescendingChartContainer({
  baselineData,
  fiveYearsMoreData,
  fiveYearsLessData,
}) {
  let chartData = [
    {
      id: 'Rata kredytu - czas bazowy',
      data: [],
    },
    {
      id: 'Rata kredytu - 5 lat dłużej',
      data: [],
    },
    {
      id: 'Rata kredytu - 5 lat krócej',
      data: [],
    },
  ];

  Object.keys(fiveYearsMoreData).map((item, index) => {
    chartData = iterateFiveYearsMoreData(
      chartData,
      fiveYearsMoreData[item],
      index
    );
    return chartData;
  });

  Object.keys(baselineData).map((item, index) => {
    chartData = iterateBaselineData(chartData, baselineData[item], index);
    return chartData;
  });
  Object.keys(fiveYearsLessData).map((item, index) => {
    chartData = iterateFiveYearsLessData(
      chartData,
      fiveYearsLessData[item],
      index
    );
    return chartData;
  });

  const tickValues = [];

  for (let i = 1, year = 1; i <= chartData[1].data.length; i += 1) {
    if (i % 12 === 0) {
      const tick = `Rok ${year.toString()} - Styczeń`;
      tickValues.push(tick);
      year += 1;
    }
  }
  return (
    <Container>
      <SectionTitle>Wysokość malejącej raty na przestrzeni lat</SectionTitle>
      <ChartContainer>
        <MyResponsiveLine data={chartData} size={tickValues} />
      </ChartContainer>
    </Container>
  );
}

DescendingChartContainer.propTypes = {
  baselineData: PropTypes.objectOf(PropTypes.object),
  fiveYearsMoreData: PropTypes.objectOf(PropTypes.object),
  fiveYearsLessData: PropTypes.objectOf(PropTypes.object),
};

DescendingChartContainer.defaultProps = {
  baselineData: {},
  fiveYearsMoreData: {},
  fiveYearsLessData: {},
};

export default DescendingChartContainer;
