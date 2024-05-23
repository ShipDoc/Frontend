import React from 'react';
import styled from 'styled-components';
import SubjectContainer from '../SubjectContainer';
import Button from '../History/Button';

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <SubjectContainer
            subject="진료내역 보기"
            subSubject="*최근 2년이내 받은 진료내역"
          />
        </Section>
        <Button />
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

export default Content;
