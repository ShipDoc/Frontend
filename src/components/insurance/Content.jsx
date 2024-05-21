// src/components/insurance/Content.js
import React from 'react';
import styled from 'styled-components';
import FAQ from './FAQ';

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <Title>보험청구</Title>
          <FAQ />
        </Section>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  padding: 20px 0;
  width: 40%;
  max-width: 1200px;
  background: var(--Sub-color, #FFF);
  
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  h2 {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  color: #A3A3A3;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default Content;
