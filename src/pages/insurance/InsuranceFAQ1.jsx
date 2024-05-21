import React from 'react';
import NavBar from '../../components/insurance/NavBar';
import Content from '../../components/insurance/WhereContent';
import styled from 'styled-components';

const InsuranceQna1 = () => {
  return (
    <PageContainer>
      <NavBar />
      <Content />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

export default InsuranceQna1;
