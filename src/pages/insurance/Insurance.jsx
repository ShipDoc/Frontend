import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/insurance/MainContent';
import Banner from '../../components/insurance/Banner';
import styled from 'styled-components';

const InsuranceMain = () => {
  return (
    <PageContainer>
      <NavBar />
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
