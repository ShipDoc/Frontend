import React from 'react';
import styled from 'styled-components';

const ButtonItem = ({ name, hospital, date, ment, min }) => {
  return (
    
    <ButtonItemContainer>
      <LeftContainer>
        <Name>진료자: {name}</Name>
        <Hospital>{hospital}</Hospital>
        <Date>{date}</Date>
      </LeftContainer>
      <RightContainer>
        <Ment>{ment}</Ment>
        <Min>{min}</Min>
      </RightContainer>
      <GoToIcon>
        &gt;
      </GoToIcon>
    </ButtonItemContainer>
  );
};

const ButtonItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  border-radius: 29.061px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-top: 3rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.h6`
  color: #4F4F4F;
  font-family: Pretendard;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-style: normal;
  font-weight: 600;
  line-height: 1.75;
`;

const Hospital = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-style: normal;
  font-weight: 600;
  line-height: 1.75;
  text-align: left;
`;

const Date = styled.h5`
  color: #1371FF;
  font-family: Pretendard;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: 1.75;
`;

const Ment = styled.h4`
  color: #4F4F4F;
  font-family: Pretendard;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: 1.75;
`;

const Min = styled.div`
  color: #D00;
  font-family: Pretendard;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: 1.75;
`;

const GoToIcon = styled.h1`
  color: #4F4F4F;
  font-family: Pretendard;
  font-size: clamp(2rem, 6vw, 3rem);
  font-style: normal;
  font-weight: 600;
  line-height: 175%;
`

export default ButtonItem;
