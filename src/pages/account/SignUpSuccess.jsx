import React, { useState, useEffect } from "react";
import ShipDoc from "../../assets/images/ShipDoc.svg";
import Vector from "../../assets/images/Vector.svg";
import Character from "../../assets/images/Character.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpSuccess = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/Home");
    };

    return (
        <Frame>
            <Div>
                <ImgDiv>
                    <Logo src={ShipDoc}></Logo>
                    <LogoIcon src={Vector}></LogoIcon>
                </ImgDiv>
                <Title>가입 완료!</Title>
                <CharacterImg src={Character}></CharacterImg>
                <Welcome>환영해요!</Welcome>
                <Descript>
                    쉽닥이 쉽게 건강을 관리할 수 있도록 도와드릴게요.
                </Descript>

                <Btn onClick={handleSubmit}>메인 홈으로 가기</Btn>
            </Div>
        </Frame>
    );
};

const Frame = styled.div`
    font-family: Pretendard;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        width: 32rem; /* 원의 크기 */
        height: 32rem; /* 원의 크기 */
        background-color: #1371ff;
        border-radius: 50%;
        top: 23%;
        left: 54%;
        transform: translate(-50%, -50%);
        z-index: -1; /* 배경 원이 뒤에 오도록 설정 */
    }
`;

const Div = styled.div`
    text-align: center;
    width: 33rem;
    padding-bottom: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 9rem;
    height: 7rem;
    object-fit: contain;
    filter: brightness(0) invert(1);
`;

const LogoIcon = styled.img`
    width: 7rem;
    height: 5rem;
    object-fit: contain;
    filter: brightness(0) invert(1);
`;

const CharacterImg = styled.img`
    width: 13rem;
    height: 13rem;
    object-fit: contain;
`;

const Title = styled.div`
    font-size: 1.7em;
    font-weight: 800;
    margin-bottom: 2rem;
`;

const Btn = styled.button`
    background-color: #1371ff;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 10px;
    width: 80%;
    height: 3rem;
    margin-top: 2rem;
    cursor: pointer;
`;

const Welcome = styled.div`
    font-size: 1.5em;
    font-weight: 800;
    margin: 2rem 0 0.6rem 0;
`;

const Descript = styled.div`
    font-size: 1em;
    font-weight: 500;
`;

export default SignUpSuccess;
