import PropTypes from 'prop-types';
import React from 'react';
import { Slider, InputNumber } from 'antd';
import { InputContainer, SliderContainer } from './sliderInputSectionElements';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { LabelName } from '../labelName/labelName';

const marks = {
  0: '0',
  1000000: '1000000',
};

function SliderInputSection({
  headerText,
  minSlider,
  maxSlider,
  inputText,
  inputUnit,
  defValue,
  stepSize,
}) {
  const [inputValue, setInputValue] = React.useState(0);
  const onChange = (value) => {
    setInputValue(value);
  };

  const formatter = (value) => value;

  return (
    <SliderContainer>
      <SectionTitle> {headerText} </SectionTitle>

      <InputContainer>
        <Slider
          tipFormatter={formatter}
          defaultValue={defValue}
          max={maxSlider}
          min={minSlider}
          marks={marks}
          step={stepSize}
          style={{ width: '500px' }}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />

        <LabelName> {inputText} </LabelName>

        <InputNumber
          defaultValue={defValue}
          addonAfter={inputUnit}
          min={minSlider}
          max={maxSlider}
          onChange={onChange}
          value={inputValue}
        />
      </InputContainer>
    </SliderContainer>
  );
}

SliderInputSection.propTypes = {
  defValue: PropTypes.number,
  headerText: PropTypes.string,
  inputText: PropTypes.string,
  inputUnit: PropTypes.string,
  maxSlider: PropTypes.number,
  minSlider: PropTypes.number,
  stepSize: PropTypes.number,
};

SliderInputSection.defaultProps = {
  defValue: null,
  headerText: '',
  inputText: '',
  inputUnit: '',
  maxSlider: null,
  minSlider: null,
  stepSize: null,
};

export default SliderInputSection;
