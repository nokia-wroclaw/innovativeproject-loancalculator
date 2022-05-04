/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Radio, Space } from 'antd';
import {
  FormContainer,
  CustomSlider,
  CustomInput,
  BoxOne,
  BoxTwo,
  BoxThree,
  BoxFour,
  BoxFive,
  BoxSix,
  BoxSeven,
  ButtonContainer,
  CalculatorSubmitButton,
  IllustrationContainer,
} from './CalculatorElements';
import Footer from '../../components/footerPurple';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';
import calculatorIllustration from '../../images/calculatorIllustration.svg';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
function Calculator() {
  const [creditValue, setCreditValue] = React.useState(0);
  const [downPaymentValue, setDownPaymentValue] = React.useState(0);
  const [loanTermValue, setLoanTermValue] = React.useState(0);
  const [interestRateValue, setInterestRateValue] = React.useState(0);
  const [commissionValue, setComissionValue] = React.useState(0);
  const [interestTypeValue, setInterestTypeValue] = React.useState(1);
  const [installmentTypeValue, setInstallmentType] = React.useState(1);
  const navigate = useNavigate();

  const onCreditValueChange = (value) => {
    setCreditValue(value);
  };
  const onDownPaymentValueChange = (value) => {
    setDownPaymentValue(value);
  };
  const onLoanTermValueChange = (value) => {
    setLoanTermValue(value);
  };
  const onSetInterestRateValueChange = (value) => {
    setInterestRateValue(value);
  };
  const onComissionValueChange = (value) => {
    setComissionValue(value);
  };

  const onInterestTypeValueChange = (value) => {
    setInterestTypeValue(value.target.value);
  };

  const onInstallmentTypeValueChange = (value) => {
    setInstallmentType(value.target.value);
  };

  const formatter = (value) => value;

  return (
    <>
      <FormContainer
        {...formItemLayout}
        onFinish={(values) => {
          axios
            .put(
              'http://127.0.0.1:5000/mortgageCalculator',
              JSON.stringify(values),
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
            .then((response) =>
              navigate('/wyniki-obliczen', {
                state: { response: response.data },
              })
            )
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <IllustrationContainer>
          <img
            className="img"
            src={calculatorIllustration}
            alt="calculator illustration"
          />
        </IllustrationContainer>
        <BoxOne>
          <SectionTitle>Wybierz rodzaj oprocentowania</SectionTitle>
          <FormContainer.Item name="interest_type">
            <Radio.Group
              onChange={onInterestTypeValueChange}
              value={interestTypeValue}
            >
              <Space direction="vertical">
                <Radio value="fixed">oprocentowanie stałe</Radio>
                <Radio value="WIBOR">oprocentowanie zmienne</Radio>
              </Space>
            </Radio.Group>
          </FormContainer.Item>
        </BoxOne>
        <BoxTwo>
          <SectionTitle>Wybierz rodzaj rat</SectionTitle>
          <FormContainer.Item name="installment_type">
            <Radio.Group
              onChange={onInstallmentTypeValueChange}
              value={installmentTypeValue}
            >
              <Space direction="vertical">
                <Radio value="descending">raty malejące</Radio>
                <Radio value="fixed">raty stałe</Radio>
              </Space>
            </Radio.Group>
          </FormContainer.Item>
        </BoxTwo>
        <BoxThree>
          <SectionTitle>Wprowadź kwotę kredytu</SectionTitle>
          <FormContainer.Item name="credit_amount">
            <CustomSlider
              tipFormatter={formatter}
              min={0}
              max={1000000}
              step={50000}
              marks={{ 0: '0', 1000000: '1000000' }}
              value={typeof creditValue === 'number' ? creditValue : 0}
              onChange={onCreditValueChange}
            />
          </FormContainer.Item>
          <CustomInput
            min={0}
            max={1000000}
            onChange={onCreditValueChange}
            value={creditValue}
            addonAfter="zł"
          />
        </BoxThree>
        <BoxFour>
          <SectionTitle>Podaj wkład własny</SectionTitle>
          <FormContainer.Item name="down_payment">
            <CustomSlider
              tipFormatter={formatter}
              min={0}
              max={500000}
              step={10000}
              marks={{ 0: '0', 500000: '500000' }}
              value={
                typeof downPaymentValue === 'number' ? downPaymentValue : 0
              }
              onChange={onDownPaymentValueChange}
            />
          </FormContainer.Item>
          <CustomInput
            min={0}
            max={1000000}
            onChange={onDownPaymentValueChange}
            value={downPaymentValue}
            addonAfter="zł"
          />
        </BoxFour>
        <BoxFive>
          <SectionTitle>Wybierz długość trwania kredytu</SectionTitle>
          <FormContainer.Item name="loan_term">
            <CustomSlider
              tipFormatter={formatter}
              min={0}
              max={35}
              step={5}
              marks={{ 0: '0', 35: '35' }}
              value={typeof loanTermValue === 'number' ? loanTermValue : 0}
              onChange={onLoanTermValueChange}
            />
          </FormContainer.Item>
          <CustomInput
            min={0}
            max={35}
            onChange={onLoanTermValueChange}
            value={loanTermValue}
            addonAfter="lat"
          />
        </BoxFive>
        <BoxSix>
          <SectionTitle>Wprowadź Oprocentowanie</SectionTitle>
          <FormContainer.Item name="interest_rate">
            <CustomSlider
              tipFormatter={formatter}
              min={0}
              max={20}
              step={0.1}
              marks={{ 0: '0', 20: '20' }}
              value={
                typeof interestRateValue === 'number' ? interestRateValue : 0
              }
              onChange={onSetInterestRateValueChange}
            />
          </FormContainer.Item>
          <CustomInput
            min={0}
            max={1000000}
            onChange={onSetInterestRateValueChange}
            value={interestRateValue}
            addonAfter="%"
          />
        </BoxSix>
        <BoxSeven>
          <SectionTitle>Wprowadź prowizję</SectionTitle>
          <FormContainer.Item name="commission">
            <CustomSlider
              tipFormatter={formatter}
              min={0}
              max={10}
              step={0.1}
              marks={{ 0: '0', 10: '10' }}
              value={typeof commissionValue === 'number' ? commissionValue : 0}
              onChange={onComissionValueChange}
            />
          </FormContainer.Item>
          <CustomInput
            min={0}
            max={1000000}
            onChange={onComissionValueChange}
            value={commissionValue}
            addonAfter="%"
          />
        </BoxSeven>
        <ButtonContainer>
          <FormContainer.Item>
            <CalculatorSubmitButton htmlType="submit">
              Oblicz ratę kredytu!
            </CalculatorSubmitButton>
          </FormContainer.Item>
        </ButtonContainer>
      </FormContainer>
      <Footer />
    </>
  );
}
export default Calculator;
