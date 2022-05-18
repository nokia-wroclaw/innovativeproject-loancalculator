import PropTypes from 'prop-types';
import React from 'react';
import { Radio, Space } from 'antd';
import { BoxContainer } from './radioButtonSectionElements';
import { SectionTitle } from '../sectionTitle/SectionTitle';

function RadioButtonSection({ headerText, firstOption, secondOption }) {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <BoxContainer>
      <SectionTitle> {headerText} </SectionTitle>

      <Radio.Group
        onChange={onChange}
        value={value}
        style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          maxWidth: '60vh',
          width: '50vh',
          borderRadius: '20px',
        }}
      >
        <Space direction="vertical">
          <Radio value={1}>{firstOption}</Radio>
          <Radio value={2}>{secondOption}</Radio>
        </Space>
      </Radio.Group>
    </BoxContainer>
  );
}

RadioButtonSection.propTypes = {
  firstOption: PropTypes.string,
  headerText: PropTypes.string,
  secondOption: PropTypes.string,
};

RadioButtonSection.defaultProps = {
  firstOption: '',
  headerText: '',
  secondOption: '',
};

export default RadioButtonSection;
