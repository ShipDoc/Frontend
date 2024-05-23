import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import Content from "../../components/MyPage/History/Content";

const History = () => {
  return (
    <PageContainer>
      <NavBar 
      title="마이페이지 &gt; 진료내역 보기"
      />
      <Content />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

export default History;
