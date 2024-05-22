import React from 'react';
import styled from 'styled-components';
import Header from '../../components/MyPage/Header'
import ProfileSection from '../../components/MyPage/ProfileSection';
import MenuSection from '../../components/MyPage/MenuSection';
import Footer from '../../components/MyPage/Footer';

const MyPage = () => {
  return (
    <Container>
      <Header />
      <ProfileSection />
      <MenuSection />
      <Footer />
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
