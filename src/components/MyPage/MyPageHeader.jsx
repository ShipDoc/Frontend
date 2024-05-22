import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/images/logoImgBlue.svg";

const MyPageHeader = () => {
  return (
    <Header>
      <BackLink to="/Home">&lt; 홈</BackLink>
      <LogoDiv>
        <Logo>쉽닥</Logo>
        <img src={logoImg} alt="logoImg" />
      </LogoDiv>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background-color: white;
  color: #2E7EF3;
  position: relative;
`;

const BackLink = styled(Link)`
  color: #005BE2;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  position: absolute;
  left: 25%;
  font-weight: 600;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 0px 0.326px 0.326px rgba(0, 0, 0, 0.25);
  font-family: ChangwonDangamAsac;
  color: #1371FF;
`;

export default MyPageHeader;
