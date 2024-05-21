import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../assets/images/bottomBannerImg.svg';
import chatImg from '../../assets/images/chatImg.svg';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src={bannerImage} alt="banner" />
      <BannerContent>
        <BannerText>보험청구 어렵지 않으신가요?</BannerText>
        <BannerSubText>쉽닥이 차근차근 알려드릴게요!</BannerSubText>
        <BannerButton>
            <img src={chatImg} alt='chatImg' />
            <ButtonText>1:1 상담 채팅 봇 바로가기</ButtonText>
        </BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0 0;
  background: linear-gradient(180deg, #488EF5 0%, #7AB7F0 100%);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.50);
  color: white;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
`;

const BannerText = styled.h3`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 800;
  font-style: normal;
  line-height: 100%;
  letter-spacing: -0.1rem;

`;

const BannerSubText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-shadow: 0px 0.883px 3.531px rgba(0, 0, 0, 0.25);
`;

const BannerButton = styled.button`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 11px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: bold;
`;

const ButtonText = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #1371FF;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 175%;
  justify-content: center;
`

const BannerImage = styled.img`
  width: 10rem;
  height: 100%;
  flex-shrink: 0;
  height:100%;
  margin-bottom: 0;
  margin-right: 2rem;
`;

export default Banner;
