import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SubjectContainer from '../SubjectContainer';

const Content = ({ reservations }) => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <SubjectContainer
            subject="병원 예약내역 보기"
            subSubject=""
          />
        </Section>
        <Button reservations={reservations} />
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
