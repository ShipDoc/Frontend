import React from 'react';
import styled from 'styled-components';

const SubjectContainer = ({ subject, subSubject }) => {
  return (
    <Container>
      <Subject>{ subject }</Subject>
      <SubSubject>{ subSubject }</SubSubject>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
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

const SubSubject = styled.h2`
  width: 100%;
  color: #808080;
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default SubjectContainer;
