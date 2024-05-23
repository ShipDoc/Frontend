import logoImg from "../../assets/images/logoImg.svg";
import profileWhite from "../../assets/images/profileWhite.svg";
import loginBar from "../../assets/images/loginBar.svg";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ title }) => {
  const [user, setUser] = useState("User");
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/mypage");
  };

  return (
    <HeaderContainer>
      <MainContainer>
        <BackgroundCircle />
        <TopContainer>
          <Auth>
            <Link to="/">로그인</Link>
            <img src={loginBar} alt="login bar" />
            <Link to="/signup">회원가입</Link>
          </Auth>
          <LogoDiv>
            <Logo>쉽닥</Logo>
            <img src={logoImg} alt="logoImg" />
          </LogoDiv>
          <UserDiv>
            <User>{user}(님)</User>
            <ProfileImage src={profileWhite} alt="profile" onClick={handleProfileClick} />
          </UserDiv>
        </TopContainer>
        <BottomContainer>
          <Nav>
            <ul>
              <li><Link to="/home">홈</Link></li>
              <li><Link to="/HealthCare">건강검진</Link></li>
              <li><Link to="/insurance">보험청구</Link></li>
              <li><Link to="/community">커뮤니티</Link></li>
            </ul>
          </Nav>
        </BottomContainer>
      </MainContainer>
      <Section>
        <Title>{title}</Title>
      </Section>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: linear-gradient(180deg, #2E7EF3 0%, #7BB8F0 100%);
  box-shadow: 0px -8px 22.7px 0px rgba(0, 91, 226, 0.17) inset;
  color: white;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const MainContainer = styled.header`
  background: linear-gradient(180deg, #2E7EF3 0%, #7BB8F0 100%);
  box-shadow: 0px -8px 22.7px 0px rgba(0, 91, 226, 0.17) inset;
  color: white;
  padding: 5rem 0 1rem 0;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  top: 17%;
  left: 50%;
  width: 350px;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translateX(-50%, -50%);
  z-index: 0;
`;

const TopContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 12rem;
`;

const BottomContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-bottom: 0rem;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 0px 0.326px 0.326px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  font-family: ChangwonDangamAsac;
`;

const Nav = styled.nav`
  font-family: Pretendard;
  font-size: 1rem
  line-height: normal;
  font-weight: 600;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 7rem;
  }
  li {
    margin-left: 20px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  margin-bottom: 0;
`;

const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 170px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #FFF;
  color: white;
  z-index: 1;
  position: relative;
  a {
    color: #FFF;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    font-family: Pretendard;
  }
  img {
    stroke-width: 1px;
    stroke: #FFF;
    width: 2px;
    height: 30px;
    flex-shrink: 0;
    z-index: 2;
  }
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const User = styled.div`
  color: #FFF;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: Pretendard;
  text-align: center;
  flex-grow: 1;
  margin-right: 1rem;
`;

const ProfileImage = styled.img`
  cursor: pointer;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #fff;
`;

const Title = styled.h2`
  margin-left: clamp(10rem, 20vw, 40rem);
  width: 50vw;
  padding: 2rem 2rem;
  color: #A3A3A3;
  font-family: Pretendard;
  font-size: clamp(0.8rem, 1.5vw, 0.8rem);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default NavBar;
