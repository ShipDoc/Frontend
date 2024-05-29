import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/insurance/ContentFAQ4';
import styled from 'styled-components';

const InsuranceQna2 = () => {
  return (
    <PageContainer>
      <NavBar activeIndex={2}>
        보험청구 &gt; 실손보험 청구 시 필요한 서류와 절차는 무엇인가요?
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
