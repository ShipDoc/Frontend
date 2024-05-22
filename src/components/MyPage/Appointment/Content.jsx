import React from 'react';
import styled from 'styled-components';
import NullText from "../../MyPage/Appointment/NullText";

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <Title>마이페이지 &gt; 병원 예약내역 보기</Title>
          <NullText />
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
  margin-top: 2rem;
  color: #A3A3A3;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default Content;
