import React from "react";
import ShipDoc from "../../assets/images/ShipDoc.svg";
import Vector from "../../assets/images/Vector.svg";
import Input from "../../components/account/Input";
import SignInBtn from "../../components/account/SignInBtn";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { signin } from "../../apis/api/user";
import { useAuth } from "../../utils/context/AuthContext";

const SignIn = () => {
    const { login } = useAuth();

    const navigate = useNavigate();
    const [loginVal, setLoginVal] = useState({
        name: null,
        password: null,
    });

    const handleChangeId = (e) => {
        setLoginVal({ ...loginVal, name: e.target.value });
    };

    const handleChangePw = (e) => {
        setLoginVal({ ...loginVal, password: e.target.value });
    };

    const handleSignIn = async () => {
        if (
            !loginVal.name ||
            loginVal.name.length === 0 ||
            !loginVal.password ||
            loginVal.password.length === 0
        ) {
            alert("입력하지 않은 값이 있습니다.");
            return;
        }

        try {
            const res = await signin({
                loginId: loginVal.name,
                password: loginVal.password,
            });
            console.log(res);

            if (res.data.code === "COMMON200") {
                login(res.headers.authorization);

                navigate("/Home");
            } else {
                console.log(res.data.code);
                alert("로그인에 실패했습니다.");
            }
        } catch (e) {
            alert("아이디 또는 비밀번호가 올바르지 않습니다.");
            console.log(e);
        }
    };

    const handleSignUp = () => {
        navigate("/SignUp");
    };

    const handlelFindAccount = () => {
        navigate("/findAccount");
    };

    return (
        <Frame>
            <Div>
                <ImgDiv>
                    <Logo src={ShipDoc}></Logo>
                    <LogoIcon src={Vector}></LogoIcon>
                </ImgDiv>
                <Input
                    type="text"
                    placeholder="아이디(이메일)를 입력하세요."
                    handling={handleChangeId}
                    border="60px"
                    margintop="0.8rem"
                ></Input>
                <Input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    handling={handleChangePw}
                    border="60px"
                    margintop="0.8rem"
                ></Input>
                <SignInBtn
                    text="로그인"
                    border="60px"
                    handle={handleSignIn}
                ></SignInBtn>
                <LinkFrame>
                    <Link
                        style={{ marginRight: "6rem", marginLeft: "2rem" }}
                        onClick={handleSignUp}
                    >
                        회원가입
                    </Link>
                    <Link onClick={handlelFindAccount}>
                        아이디·비밀번호 찾기
                    </Link>
                </LinkFrame>
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
`;

const Div = styled.div`
    text-align: center;
    width: 30rem;
    padding-bottom: 9rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
`;

const Logo = styled.img`
    width: 9rem;
    height: 7rem;
    object-fit: contain;
`;

const LogoIcon = styled.img`
    width: 7rem;
    height: 5rem;
    object-fit: contain;
`;

const LinkFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 0.8rem;
`;

const Link = styled.div`
    cursor: pointer;
    color: #878787;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
`;

export default SignIn;
