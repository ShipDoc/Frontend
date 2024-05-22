import React, { useState, useEffect } from "react";
import ShipDoc from "../../assets/images/ShipDoc.svg";
import Vector from "../../assets/images/Vector.svg";
import Input from "../../components/account/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const SignUpInfo = () => {
    const navigate = useNavigate();

    // 모든 값들이 유효한지
    const [allSatisfied, setAllSatisfied] = useState(false);

    // 인증하기를 클릭했는지
    const [checkAuth, setCheckAuth] = useState(false);

    // 인증 완료 모달 표시 여부
    const [showModal, setShowModal] = useState(false);

    // 입력한 값들
    const [signUpVal, setSignUpVal] = useState({
        id: null,
        password: null,
        checkPwd: null,
        auth: null,
    });

    // 입력한 값들이 유효한지 검사
    const [signUpValid, setSignUpValid] = useState({
        id: false,
        password: false,
        checkPwd: false,
        auth: false,
    });

    const handleChangeId = (e) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let val = e.target.value;

        setSignUpVal({ ...signUpVal, id: e.target.value });

        if (val === "" || emailRegex.test(val)) {
            setSignUpValid({ ...signUpValid, id: true });
        } else {
            setSignUpValid({ ...signUpValid, id: false });
        }
    };

    const handleChangePw = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
        let val = e.target.value;

        setSignUpVal({ ...signUpVal, password: e.target.value });
        if (val === "" || passwordRegex.test(val)) {
            setSignUpValid({ ...signUpValid, password: true });
        } else {
            setSignUpValid({ ...signUpValid, password: false });
        }
    };

    const handleCheckPw = (e) => {
        let val = e.target.value;

        setSignUpVal({ ...signUpVal, checkPwd: e.target.value });
        if (val === signUpVal.password) {
            setSignUpValid({ ...signUpValid, checkPwd: true });
        } else {
            setSignUpValid({ ...signUpValid, checkPwd: false });
        }
    };

    const handleAuth = (e) => {
        let val = e.target.value;

        setSignUpVal({ ...signUpVal, auth: e.target.value });

        if (val !== "" || val !== null) {
            setSignUpValid({ ...signUpValid, auth: true });
        } else {
            setSignUpValid({ ...signUpValid, auth: false });
        }
    };

    const onClickAuth = (e) => {
        setCheckAuth(true);
        setShowModal(true); // 인증 완료 모달 표시
    };

    const handleSubmit = () => {
        if (checkAuth) {
            navigate("/signUp/success");
        }
    };

    useEffect(() => {
        if (Object.values(signUpValid).every(Boolean)) setAllSatisfied(true);
        else {
            setAllSatisfied(false);
        }
    }, [signUpValid]);

    return (
        <Frame>
            <Div>
                <ImgDiv>
                    <Logo src={ShipDoc}></Logo>
                    <LogoIcon src={Vector}></LogoIcon>
                </ImgDiv>
                <Title>회원가입</Title>
                <BoxTitle>회원정보 입력</BoxTitle>
                <SignUpFrame>
                    <InputFrame>
                        <InputTitle>
                            아이디(이메일)
                            <span style={{ color: "red", fontWeight: 400 }}>
                                *
                            </span>
                        </InputTitle>

                        <Input
                            type="text"
                            placeholder="아이디(이메일)를 입력하세요."
                            handling={handleChangeId}
                            border="20px"
                            marginTop="0.2rem"
                        ></Input>
                        {!signUpValid.id && signUpVal.id && (
                            <ErrorMessage>
                                올바른 이메일 형식으로 작성해주세요.
                            </ErrorMessage>
                        )}
                    </InputFrame>
                    <InputFrame>
                        <InputTitle>
                            비밀번호
                            <span style={{ color: "red", fontWeight: 400 }}>
                                *
                            </span>
                        </InputTitle>

                        <Input
                            type="password"
                            placeholder="영문,숫자를 포함한 8~20자리 이내"
                            handling={handleChangePw}
                            border="20px"
                            marginTop="0.2rem"
                        ></Input>
                        {!signUpValid.password && signUpVal.password && (
                            <ErrorMessage>
                                영문, 숫자를 포함한 8~20자리 이내로
                                입력해주세요.
                            </ErrorMessage>
                        )}
                    </InputFrame>
                    <InputFrame>
                        <InputTitle>
                            비밀번호 확인
                            <span style={{ color: "red", fontWeight: 400 }}>
                                *
                            </span>
                        </InputTitle>

                        <Input
                            type="password"
                            placeholder="비밀번호 확인"
                            handling={handleCheckPw}
                            border="20px"
                            marginTop="0.2rem"
                        ></Input>
                        {!signUpValid.checkPwd && signUpVal.checkPwd && (
                            <ErrorMessage>
                                비밀번호가 일치하지 않아요!
                            </ErrorMessage>
                        )}
                    </InputFrame>

                    <InputFrame>
                        <InputTitle>
                            문자 본인 인증
                            <span style={{ color: "red", fontWeight: 400 }}>
                                *
                            </span>
                        </InputTitle>

                        <AuthFrame>
                            <Input
                                type="tel"
                                placeholder="전화번호를 입력하세요."
                                handling={handleAuth}
                                border="20px"
                                marginTop="0.2rem"
                            ></Input>
                            <AuthBtn onClick={onClickAuth}>인증하기</AuthBtn>
                        </AuthFrame>
                        {!signUpValid.auth && !checkAuth && signUpVal.auth && (
                            <ErrorMessage>인증을 완료해 주세요.</ErrorMessage>
                        )}
                    </InputFrame>
                </SignUpFrame>

                <Btn disabled={!allSatisfied} onClick={handleSubmit}>
                    다음으로
                </Btn>
            </Div>
            {showModal && (
                <Modal
                    title="본인 인증완료"
                    onClose={() => setShowModal(false)}
                >
                    본인 인증이 완료되었습니다.
                </Modal>
            )}
        </Frame>
    );
};

const Frame = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-left: 3rem;
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

const Title = styled.div`
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const BoxTitle = styled.div`
    color: #646464;
    font-size: 1.4em;
    margin-bottom: 0.8rem;
`;

const SignUpFrame = styled.div`
    text-align: start;
`;

const InputTitle = styled.div`
    margin-left: 1rem;
    font-weight: 500;
`;

const InputFrame = styled.div`
    margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 0.8rem;
    margin-top: 0.2rem;
    margin-left: 1rem;
`;

const Btn = styled.button`
    background-color: ${(props) => (props.disabled ? "#D9D9D9" : "#1371ff")};
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 10px;
    width: 100%;
    height: 3rem;
    margin-top: 0.8rem;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const AuthFrame = styled.div`
    display: flex;
`;

const AuthBtn = styled.button`
    background-color: #1371ff;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 65px;
    width: 60%;
    height: 3rem;
    margin-top: 0.2rem;
    margin-left: 1rem;
    cursor: pointer;
`;

export default SignUpInfo;
