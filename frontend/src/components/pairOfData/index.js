import PropTypes from 'prop-types';
import React from 'react';
import { PairKey, PairValue, DataRow } from './PairOfDataElements';

function PairOfData({ pairKey, valueKey }) {
  return (
    <DataRow>
      <PairKey>{pairKey}</PairKey>
      <PairValue>{valueKey}</PairValue>
    </DataRow>
  );
}

PairOfData.propTypes = {
  pairKey: PropTypes.string,
  valueKey: PropTypes.string,
};

PairOfData.defaultProps = {
  pairKey: '',
  valueKey: '',
};

export default PairOfData;
