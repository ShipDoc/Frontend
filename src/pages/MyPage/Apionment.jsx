import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import Content from "../../components/MyPage/Appointment/Content";

const Appointment = () => {
  return (
    <PageContainer>
      <NavBar />
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

export default Appointment;
