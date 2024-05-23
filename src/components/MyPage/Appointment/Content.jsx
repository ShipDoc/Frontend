import React from 'react';
import styled from 'styled-components';
import SubjectContainer from '../SubjectContainer';
import Button from './Button';

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <SubjectContainer
            subject="병원 예약내역 보기"
            subSubject=""
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
`;

export default Content;
