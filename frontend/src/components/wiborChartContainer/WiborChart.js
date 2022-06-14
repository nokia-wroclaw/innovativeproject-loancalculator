import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import React from 'react';

function WiborChart({ data }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 100, left: 60 }}
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
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'dni',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'wysokość stopy [%]',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'purple_orange' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea
      areaBlendMode="multiply"
      areaOpacity={0.35}
      areaBaselineValue={0}
      useMesh
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 6,
          translateY: -41,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 90,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
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

WiborChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

WiborChart.defaultProps = {
  data: {},
};

export default WiborChart;
