import { ResponsiveLine } from '@nivo/line';
import React from 'react';
import PropTypes from 'prop-types';

function MyResponsiveLine({ data, size }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 120, left: 70 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: '0',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 20,
        tickPadding: 7,
        tickRotation: -45,
        legend: 'Wartości kredytu w kolejnych miesiącach lat',
        legendOffset: 110,
        legendPosition: 'middle',
        tickValues: size,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Wysokość raty kredytu',
        legendOffset: -48,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'purple_orange' }}
      lineWidth={5}
      enablePoints={false}
      pointSize={11}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      areaOpacity={0.45}
      useMesh
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: -6,
          translateY: -35,
          itemWidth: 200,
          itemHeight: 20,
          itemsSpacing: 4,
          symbolSize: 20,
          symbolShape: 'circle',
          itemDirection: 'left-to-right',
          itemTextColor: '#777',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

MyResponsiveLine.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  size: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
};

MyResponsiveLine.defaultProps = {
  data: {},
  size: [],
};

export default MyResponsiveLine;
