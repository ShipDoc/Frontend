import React from 'react';
import styled from 'styled-components';
import fileImg from "../../assets/images/fileImg.svg";
import searchImg from "../../assets/images/search.svg";

const NullText = ({ subject, subSubject, noText}) => {
  return (
    <Container>
      <SubjectContainer>
        <Subject>{ subject }</Subject>
        <SubSubject>{ subSubject }</SubSubject>
      </SubjectContainer>
      
      <Main>
        <FileImg>
          <img src={fileImg} alt="fileImg" />
        </FileImg>
        <SearchImg>
          <img src={searchImg} alt="searchImg" />
        </SearchImg>
      </Main>
      <Text>{noText}</Text>
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

const SubjectContainer = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 8rem;

`;

const Subject = styled.h1`
  width: 100%;
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 1rem 0;
`;

const SubSubject = styled.h1`
  width: 100%;
  color: #808080;
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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