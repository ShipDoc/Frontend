import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/insurance/MainContent';
import Banner from '../../components/insurance/Banner';
import styled from 'styled-components';


const InsuranceMain = () => {
  return (
    <PageContainer>
      <NavBar activeIndex={2}>
        보험청구  
      </NavBar> {/* activeIndex prop을 통해 기본 활성화 아이템 설정 */}
      <Content />
      <Banner />
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

export default InsuranceMain;
