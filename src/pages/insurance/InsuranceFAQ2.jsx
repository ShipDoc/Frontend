import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/insurance/ContentFAQ2';
import styled from 'styled-components';

const InsuranceQna2 = () => {
  return (
    <PageContainer>
      <NavBar activeIndex={2}>
        보험청구 &gt; 실비보험 청구는 어떻게 해야 하나요?
      </NavBar>
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

export default InsuranceQna2;
