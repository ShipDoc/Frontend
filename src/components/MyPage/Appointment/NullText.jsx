import React from 'react';
import styled from 'styled-components';
import fileImg from "../../../assets/images/fileImg.svg";
import searchImg from "../../../assets/images/search.svg";

const NullText = () => {
  return (
    <Container>
      <Subject>병원 예약내역 보기</Subject>
      <Main>
        <FileImg>
          <img src={fileImg} alt="fileImg" />
        </FileImg>
        <SearchImg>
          <img src={searchImg} alt="searchImg" />
        </SearchImg>
      </Main>
      <Text>예약된 병원이 없어요</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 5rem 0 15rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Subject = styled.h1`
  width: 100%;
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 1rem 0 5rem 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5rem 0 1rem 0;
  position: relative;
`;

const FileImg = styled.div`
  position: relative;
  z-index: 1;
  margin-right: -1rem; /* Adjust this value to control the overlap */
`;

const SearchImg = styled.div`
  position: relative;
  z-index: 0;
`;

const Text = styled.div`
  color: #999;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
`;

export default NullText;
