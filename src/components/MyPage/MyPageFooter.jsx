import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MyPageFooter = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // 로컬 스토리지 비우기
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <Footer>
      <FooterLink onClick={handleLogout}>로그아웃</FooterLink>
    </Footer>
  );
};

const Footer = styled.div`
  margin-top: auto;
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: white;
`;

const FooterLink = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  font-size: 1rem;
  font-family: Pretendard;
  font-style: normal;
  color: #4F4F4F;
  font-weight: 600;
  cursor: pointer;
`;

export default MyPageFooter;
