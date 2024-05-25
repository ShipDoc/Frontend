import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// HealthCareRecordItem 컴포넌트
const HealthCareRecordItem = ({ name, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/healthcare/history/detail', { state: { name, date } });
  };

  return (
    <RecordItem onClick={handleClick}>
      <InfoContainer>
        <StyledInfoText>{name}</StyledInfoText>
        <StyledSubText>건강검진 1일 | {date}</StyledSubText>
      </InfoContainer>
      <ArrowIcon>&gt;</ArrowIcon>
    </RecordItem>
  );
};

// styled-components
const RecordItem = styled.div`
  height: 6rem;
  background-color: '#FFF';
  border: 1px solid #A8A8A8;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInfoText = styled.p`
  margin: 0;
  padding: 1rem 0 0 1rem;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
`;

const StyledSubText = styled.p`
  margin: 0;
  padding: 1rem;
  color: #b3b3b3;
  font-weight: 500;
  font-size: 0.8rem;
`;

const ArrowIcon = styled.div`
  font-size: 1.5rem;
  color: #A3A3A3;
`;

export default HealthCareRecordItem;
