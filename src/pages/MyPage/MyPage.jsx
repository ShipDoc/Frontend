import React from 'react';
import styled from 'styled-components';
import MyPageHeader from '../../components/MyPage/MyPageHeader'
import MyPageProfile from '../../components/MyPage/MyPageProfile';
import MyPageMenu from '../../components/MyPage/MyPageMenu';
import MyPageFooter from '../../components/MyPage/MyPageFooter';

const MyPage = () => {
  return (
    <Container>
      <MyPageHeader />
      <MyPageProfile />
      <MyPageMenu />
      <MyPageFooter />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  color: black;
`;

export default MyPage;