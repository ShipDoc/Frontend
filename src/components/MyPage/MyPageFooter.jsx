import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyPageFooter = () => {
  return (
    <Footer>
      <FooterLink to="/logout">로그아웃</FooterLink>
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

const FooterLink = styled(Link)`
  text-decoration: underline;
  font-size: 1rem;
  font-family: Pretendard;
  font-style: normal;
  color: #4F4F4F;
  font-weight: 600;
`;

export default MyPageFooter;
