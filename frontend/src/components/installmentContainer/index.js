import PropTypes from 'prop-types';
import React from 'react';
import {
  Data,
  InstallmentValue,
  ResultsContainer,
} from './CalculatedResultsContainer';
import PairOfData from '../pairOfData';
import { SectionTitle } from '../sectionTitle/SectionTitle';

function CalculatedResultsContainer({ title, type, data, addon, fieldNames }) {
  const parseFields = (key, value) => {
    if (key === 'interest_type' || key === 'installment_type') {
      return {
        fixed: 'stałe',
        WIBOR: 'zmienne',
        descending: 'malejące',
      }[value];
    }
    return value.toString();
  };
  if (type === 'user_input') {
    return (
      <ResultsContainer variant={type}>
        <SectionTitle>{title}</SectionTitle>
        <Data>
          {Object.keys(data).map((key, index) => (
            <PairOfData
              key={key}
              pairKey={fieldNames[index]}
              valueKey={parseFields(key, data[key])}
            />
          ))}
        </Data>
      </ResultsContainer>
    );
  }
  return (
    <ResultsContainer variant={type}>
      <SectionTitle>{title}</SectionTitle>
      <Data>
        <SectionTitle>{'Miesięczna rata: '}</SectionTitle>
        <InstallmentValue>
          {`${data.monthly_payment.year_1[0]} ${addon}`}
        </InstallmentValue>
        <PairOfData
          pairKey="Całkowity koszt kredytu:"
          valueKey={`${data.total_cost} ${addon}`}
        />
        <PairOfData
          pairKey="Całkowita wartość odsetek:"
          valueKey={`${data.total_interest} ${addon}`}
        />
      </Data>
    </ResultsContainer>
  );
}

CalculatedResultsContainer.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.object),
  addon: PropTypes.string,
  fieldNames: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
};

CalculatedResultsContainer.defaultProps = {
  title: '',
  type: '',
  data: {},
  addon: '',
  fieldNames: [],
};
export default CalculatedResultsContainer;
