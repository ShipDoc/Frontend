import React from 'react';
import styled from 'styled-components';
import NullText from "../NullText";

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <NullText 
            subject="진료내역 보기"
            subSubject="*최근 2년이내 받은 진료내역"
            noText="진료내역이 없어요"
          />
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

export default Content;
