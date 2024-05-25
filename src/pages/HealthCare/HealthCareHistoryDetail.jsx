import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import blueBackImg from "../../assets/images/blueBack.svg"

const HealthCareRecordDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, date } = location.state;
  const handleGotoHome = () => {
    navigate("/home");
  }

  return (
    <PageContainer>
      <NavBar activeIndex={1}>
        <PageDetailTextContainer>
          <img src={blueBackImg} alt="blueBackImg" onClick={handleGotoHome} />
          <PageDetailText>홈 &gt; 건강검진 &gt; 건강검진 내역 보기</PageDetailText>
        </PageDetailTextContainer>
      </NavBar>
      <ContentContainer>
        <HospitalName>{name}</HospitalName>
        <DateText>{date}</DateText>
        <Details>
          <DetailItem>
            <DetailTitle>진료형태: </DetailTitle>
            <DetailContent>건강검진</DetailContent>
          </DetailItem>
          <DetailItem>
            <DetailTitle>내원(입원)일수: </DetailTitle>
            <DetailContent>1일</DetailContent>
          </DetailItem>
        </Details>
        <ReservationButton>다시 예약하기</ReservationButton>
      </ContentContainer>
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

const PageDetailTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PageDetailText = styled.p`
  color: #A3A3A3;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ContentContainer = styled.div`
  color: #000;
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10rem 0;
`;

const HospitalName = styled.h1`
  font-family: Pretendard;
-  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 1.5rem;
  color: #000;
`;

const DateText = styled.p`
  font-size: 1rem;
  color: #A3A3A3;
  margin-top: 0.8rem;
  margin-bottom: 5rem;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DetailTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
`;

const DetailContent = styled.p`
  font-size: 1rem;
  color: #4f4f4f;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ReservationButton = styled.button`
  background-color: #1371FF;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  border-radius: 20px;
  width: 35vw;
  height: 6rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  cursor: pointer;
`;

export default HealthCareRecordDetail;
