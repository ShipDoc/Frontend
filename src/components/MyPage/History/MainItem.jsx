import React from "react";
import styled from "styled-components";
import { useState } from "react";

const MainItem = ({ subject, text, highlight }) => {
    const [user, setUser] = useState("User");

    return (
        <Container>
            <MainContainer>
                <Subject>{subject}</Subject>
                <Text highlight={highlight}>{text}</Text>
            </MainContainer>
        </Container>
    )
};

const Container=styled.div`
  width: 100%;
  display: flex;
`
const MainContainer=styled.div`
  margin: 1rem;
`

const Subject=styled.h2`
  height: 1.5rem;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 175%;
  text-align: left;
`;

const Text=styled.h2`
  height: 1.5rem;
  flex-shrink: 0;
  color: ${(props) => (props.highlight ? "#1371FF" : "#646464")};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 175%;
  text-align: left;
`;

export default MainItem;