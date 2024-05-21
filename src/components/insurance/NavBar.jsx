import logoImg from "../../assets/images/logoImg.svg";
import profileWhite from "../../assets/images/profileWhite.svg";
import loginBar from "../../assets/images/loginBar.svg";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [user, setUser] = useState("User");

  return (
    <HeaderContainer>
      <BackgroundCircle />
      <TopContainer>
        <Auth>
          <Link to="/signin">로그인</Link>
          <img src={loginBar} alt="login bar" />
          <Link to="/signup">회원가입</Link>
        </Auth>
        <LogoDiv>
          <Logo>쉽닥</Logo>
          <img src={logoImg} alt="logoImg" />
        </LogoDiv>
        <UserDiv>
          <User>{user}(님)</User>
          <img src={profileWhite} alt="profile" />
        </UserDiv>
      </TopContainer>
      <BottomContainer>
        <Nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/health-check">건강검진</Link></li>
            <li><StyledLink to="/insurance">보험청구</StyledLink></li>
            <li><Link to="/community">커뮤니티</Link></li>
          </ul>
        </Nav>
      </BottomContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
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
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  text-shadow: 0px 0.326px 0.326px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  font-family: ChangwonDangamAsac;
`;

const Nav = styled.nav`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
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

const StyledLink = styled(Link)`
  background-color: white;
  color: #2E7EF3 !important;
  padding: 0.5rem 1rem 3rem 1rem;
  border-radius: 25px 25px 0 0;
  text-decoration: none;
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
    color: var(--Sub-color, #FFF);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    text-decoration: none;
    font-family: Pretendard;
  }
  img{
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
  color: var(--Sub-color, #FFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: Pretendard;
  text-align: center;
  flex-grow: 1;
  margin-right: 1rem;
`;

export default NavBar;
