/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import {
  FormContainer,
  ButtonContainer,
  CalculatorSubmitButton,
  IllustrationContainer,
} from './CalculatorElements';
import Footer from '../../components/footerPurple';
import calculatorIllustration from '../../images/calculatorIllustration.svg';
import { BackendURL } from '../../global';
import formData from './formData';
import FormItem from '../../components/formItem';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

function Calculator() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const data = formData;
  const initialValues = {
    interest_type: 'fixed',
    installment_type: 'fixed',
    credit_amount: 0,
    down_payment: 0,
    loan_term: 0,
    interest_rate: 0,
    commission: 0,
  };

  return (
    <>
      <FormContainer
        {...formItemLayout}
        form={form}
        initialValues={initialValues}
        onFinish={(values) => {
          axios
            .put({ BackendURL }, JSON.stringify(values), {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((response) =>
              navigate('/wyniki-obliczen', {
                state: { response: response.data },
              })
            )
            .catch((error) => {
              console.error(error);
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
        {data.map((item) => (
          <FormItem key={item.id} item={item} />
        ))}
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
