import React from 'react';
import HealthCareRecordItem from '../../components/HealthCare/HealthCareRecordItem';
import testImg from "../../assets/images/testImg.svg";
import iIcon from "../../assets/icons/iIcon.svg";
import HealthCareShipdoc from '../../assets/images/HealthCareShipdoc.svg';
import styled from 'styled-components';

// HealthCareRecordList 컴포넌트
const HealthCareRecordList = () => {
  return (
    <RecordListContainer>
      <TitleContainer>
        <TitleText>내 건강검진 기록 <img src={iIcon} alt='iIcon' /></TitleText>
        <DateText>2024년 5월 7일 기준</DateText>
      </TitleContainer>
      <HealthCareRecordItem
        name="바로선병원 건강검진센터"
        date="2024-05-06"
      />
      <HealthCareRecordItem
        name="서울척병원 건강검진센터"
        date="2023-04-12"
      />
      <ReminderContainer>
        <ReminderImage src={HealthCareShipdoc} alt="Reminder" />
        <ReminderText>
          <ReminderTitle>건강검진 알려줘요 쉽닥!</ReminderTitle>
          <br />
          <ReminderSub>수신알람 설정을 하면 쉽닥이 건강검진 시기를 문자로 알려드려요.</ReminderSub>
        </ReminderText>
      </ReminderContainer>
    </RecordListContainer>
  );
};

const RecordListContainer = styled.div`
  width: 35vw;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 0px 0px 23.1px 0px rgba(0, 0, 0, 0.20);
  background: #FFF;
  flex-shrink: 0;
  font-family: Pretendard;
  padding: 2rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const TitleText = styled.h2`
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 0.5rem;
`;

const DateText = styled.p`
  font-size: 0.875rem;
  color: #A3A3A3;
`;

const ReminderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1371FF;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0.5rem 1rem 0 1rem;
  border-radius: 1.5rem;
  box-shadow: 0px 3.453px 3.453px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
`;

const ReminderImage = styled.img`
  height: 100%;
`;

const ReminderText = styled.p`
  color: #FFF;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const ReminderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.32px;
  text-shadow: 0px 0.789px 3.157px rgba(0, 0, 0, 0.25);
`

const ReminderSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  font-family: Pretendard;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.18px;
  text-shadow: 0px 0.789px 3.157px rgba(0, 0, 0, 0.25);
`

export default HealthCareRecordList;
