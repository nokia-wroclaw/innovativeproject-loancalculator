import PropTypes from 'prop-types';
import React from 'react';
import { Space } from 'antd';
import {
  CustomSlider,
  CustomInput,
  DataPlaceholder,
  CustomRadio,
} from './FormItemElements';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { FormContainer } from '../../pages/calculator/CalculatorElements';

function FormItem({ item }) {
  if (item.type.includes('radioInput'))
    return (
      <DataPlaceholder variant={item.name}>
        <SectionTitle>{item.title}</SectionTitle>
        <FormContainer.Item name={item.name}>
          <CustomRadio.Group>
            <Space direction="vertical">
              <CustomRadio value={item.value1}>{item.value1Name}</CustomRadio>
              <CustomRadio value={item.value2}>{item.value2Name}</CustomRadio>
            </Space>
          </CustomRadio.Group>
        </FormContainer.Item>
      </DataPlaceholder>
    );
  return (
    <DataPlaceholder variant={item.name}>
      <SectionTitle>{item.title}</SectionTitle>
      <FormContainer.Item name={item.name}>
        <CustomSlider
          min={item.min}
          max={item.max}
          step={item.step}
          marks={item.marks}
        />
      </FormContainer.Item>
      <FormContainer.Item name={item.name}>
        <CustomInput
          min={item.min}
          max={item.max}
          addonAfter={item.addonAfter}
          decimalSeparator=","
        />
      </FormContainer.Item>
    </DataPlaceholder>
  );
}

FormItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object),
};

FormItem.defaultProps = {
  item: {},
};

export default FormItem;
