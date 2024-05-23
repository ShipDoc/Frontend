import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import success from "../../assets/icons/detail/success.svg";
import { useNavigate } from "react-router-dom";

const SuccessRes = () => {
    const navigate = useNavigate();

    const nextHandle = () => {};

    return (
        <>
            <NavBar></NavBar>
            <Frame>
                <Div>
                    <Container>
                        <img src={success}></img>
                        <Title>예약이 완료되었습니다.</Title>
                        <NextBtn onClick={nextHandle}>
                            예약 내역 확인하기
                        </NextBtn>
                    </Container>
                </Div>
            </Frame>
        </>
    );
};

const Frame = styled.div`
    font-family: Pretendard;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
`;

const Div = styled.div`
    text-align: center;
    width: 42rem;
    padding: 1rem 1rem 4rem 1rem;
`;

const Container = styled.div`
    margin-top: 3rem;
`;

const Title = styled.div`
    margin-top: 2rem;
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;

    text-align: center;
`;

const NextBtn = styled.button`
    background-color: #1371ff;
    cursor: pointer;
    margin-top: 2rem;

    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 21px;
    width: 80%;
    height: 3rem;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export default SuccessRes;
