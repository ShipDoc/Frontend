import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profileImg from "../../assets/images/profile.svg";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.56rem;
`;

const Button = styled.button`
  display: inline-flex;
  padding: 0.4375rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.0625rem;
  background: #005be2;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LogoText = styled.p`
  color: #005be2;
  text-shadow: 0px 0.326px 0.326px rgba(0, 0, 0, 0.25);
  font-family: ChangwonDangamAsac;
  font-size: 2.0625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5vw;
  margin-right: 5vw;
`;

const UserText = styled.p`
  color: #4f4f4f;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 2vw;
`;

export default function MainHeader({ user }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // 로컬스토리지에서 토큰 또는 사용자 정보를 확인
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.clear(); // 로컬스토리지 비우기
      setIsLoggedIn(false);
      navigate("/"); // 로그아웃 후 메인 페이지로 이동
    } else {
      navigate("/"); // 로그인 페이지로 이동
    }
  };

  const goSignUp = () => {
    navigate("/SignUp");
  };

  const goMyPage = () => {
    navigate("/mypage");
  };

  return (
    <HeaderContainer>
      <ButtonBox>
        <Button onClick={handleLoginLogout}>{isLoggedIn ? "로그아웃" : "로그인"}</Button>
        {!isLoggedIn && <Button onClick={goSignUp}>회원가입</Button>}
      </ButtonBox>
      <LogoText>쉽닥</LogoText>
      {isLoggedIn && (
        <>
          <UserText>{user}(님)</UserText>
          <div onClick={goMyPage}>
            <img src={profileImg} alt="profileImg" style={{ cursor: "pointer" }} />
          </div>
        </>
      )}
    </HeaderContainer>
  );
}
