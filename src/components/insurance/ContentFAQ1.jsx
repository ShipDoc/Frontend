import React from 'react';
import styled from 'styled-components';
import WhereText from './TextFAQ1';

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <Title>보험청구 &gt; 실손보험 청구는 어디서 할 수 있나요?</Title>
          <WhereText />
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
    width: 100%;
    margin-bottom: 2rem;
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
