import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import {
  Container,
  InstallmentTable,
} from './DescendingInstallmentsTableElements';
import { SectionTitle } from '../sectionTitle/SectionTitle';

const columns = [
  {
    title: 'Miesiąc',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: 'Wysokość raty',
    key: 'value',
    dataIndex: 'value',
    render: (value) => (
      <Tag color="purple" key={value}>
        {value}
      </Tag>
    ),
  },
];

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

const createData = (index, value) => ({
  key: index + 1,
  month: months[index],
  value,
});

function DescendingInstallmentsContainer({ data, title }) {
  const installmentData = [];
  data.map((item, index) =>
    installmentData.push(createData(index, data[index]))
  );
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <InstallmentTable
        columns={columns}
        dataSource={installmentData}
        pagination={false}
      />
    </Container>
  );
}

DescendingInstallmentsContainer.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  title: PropTypes.string,
};

DescendingInstallmentsContainer.defaultProps = {
  title: '',
  data: {},
};

export default DescendingInstallmentsContainer;
