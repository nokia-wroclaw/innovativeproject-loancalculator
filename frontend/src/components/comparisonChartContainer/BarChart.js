import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';
import React from 'react';

function MyResponsiveBar({ data, color }) {
  return (
    <ResponsiveBar
      data={data}
      keys={['lata bazowe', '5 lat mniej', '5 lat więcej']}
      indexBy="id"
      margin={{ top: 50, right: 50, bottom: 50, left: 110 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: color }}
      borderRadius={4}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Koszty kredytu',
        legendPosition: 'middle',
        legendOffset: -80,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="white"
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 12,
          translateY: 41,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

MyResponsiveBar.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  color: PropTypes.string,
};

MyResponsiveBar.defaultProps = {
  data: {},
  color: '',
};

export default MyResponsiveBar;
