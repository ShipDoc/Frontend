import React, { useState, useEffect } from "react";
import ShipDoc from "../../assets/images/ShipDoc.svg";
import Vector from "../../assets/images/Vector.svg";
import Input from "../../components/account/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { signup, sms, verifyCode } from "../../apis/api/user";
import Timer from "../../components/account/Timer";

const SignUpInfo = () => {
    const navigate = useNavigate();

    // 모든 값들이 유효한지
    const [allSatisfied, setAllSatisfied] = useState(false);

    // 인증하기를 클릭했는지
    const [checkAuth, setCheckAuth] = useState(false);

    // 인증 완료 모달 표시 여부
    const [showModal, setShowModal] = useState(false);

    // 코드 전송 버튼을 눌렀는지
    const [transmit, setTransmit] = useState(false);

    const [count, setCount] = useState();

    // 입력한 값들
    const [signUpVal, setSignUpVal] = useState({
        id: null,
        password: null,
        checkPwd: null,

        name: null,
        birth: null,
        number: null,
        auth: null,
    });

    // 입력한 값들이 유효한지 검사
    const [signUpValid, setSignUpValid] = useState({
        id: false,
        password: false,
        checkPwd: false,
        name: false,
        birth: false,
        number: null,
        auth: null,
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

    const handleName = (e) => {
        let val = e.target.value;

        setSignUpVal({ ...signUpVal, name: e.target.value });

        if (val !== "" || val !== null) {
            setSignUpValid({ ...signUpValid, name: true });
        } else {
            setSignUpValid({ ...signUpValid, name: false });
        }
    };

    const handleBirth = (e) => {
        const regex = /^\d{8}$/;
        let val = e.target.value;

        setSignUpVal({ ...signUpVal, birth: e.target.value });

        if (!isNaN(val)) {
            if (val === "" || regex.test(val)) {
                setSignUpValid({ ...signUpValid, birth: true });
            } else {
                setSignUpValid({ ...signUpValid, birth: false });
            }
        } else {
            setSignUpValid({ ...signUpValid, birth: false });
        }
    };

    const handleNumber = (e) => {
        let val = e.target.value;

        setSignUpVal({ ...signUpVal, number: e.target.value });

        if (val !== "" || val !== null) {
            setSignUpValid({ ...signUpValid, number: true });
        } else {
            setSignUpValid({ ...signUpValid, number: false });
        }
    };

    const handleAuth = (e) => {
        setSignUpVal({ ...signUpVal, auth: e.target.value });
    };

    // 코드 전송하기 눌렀을 때
    const onClickNumber = async () => {
        const res = await sms({
            phoneNumber: signUpVal.number,
        });

        if (res.data.code === "COMMON200") {
            setTransmit(true);
            alert(
                "인증번호를 성공적으로 발송했습니다. 발송된 인증코드는 5분간 유효합니다."
            );
        } else {
            alert("로그인에 실패했습니다.");
        }
    };

    // 인증하기 눌렀을 때
    const onClickAuth = async () => {
        const res = await verifyCode({
            phoneNumber: signUpVal.number,
            verifyCode: signUpVal.auth,
        });

        if (res.data.code === "COMMON200") {
            setSignUpValid({ ...signUpValid, auth: true });
            setCheckAuth(true);
            setShowModal(true); // 인증 완료 모달 표시
        } else {
            alert("인증에 실패했습니다.");
        }
    };

    const handleSubmit = async () => {
        console.log(signUpVal.id);
        console.log(signUpVal.password);
        console.log(signUpVal.checkPwd);
        console.log(signUpVal.name);
        console.log(signUpVal.birth);
        console.log(signUpVal.number);
        console.log(signUpVal.auth);
        if (checkAuth) {
            const res = await signup({
                loginId: signUpVal.id,
                password: signUpVal.password,
                passwordCheck: signUpVal.checkPwd,
                name: signUpVal.name,
                birth: signUpVal.birth,
                phoneNumber: signUpVal.number,
                verifyCode: signUpVal.auth,
            });

            console.log(res);
            if (res.status === 400) {
                alert(res.message);
            } else {
                if (res.data.code === "COMMON200") {
                    navigate("/signUp/success");
                } else {
                    alert("로그인에 실패했습니다.");
                }
            }
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
                            margintop="0.2rem"
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
                            margintop="0.2rem"
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
                            margintop="0.2rem"
                        ></Input>
                        {!signUpValid.checkPwd && signUpVal.checkPwd && (
                            <ErrorMessage>
                                비밀번호가 일치하지 않아요!
                            </ErrorMessage>
                        )}
                    </InputFrame>

                    <InputFrame>
                        <InputTitle>
                            이름
                            <span style={{ color: "red", fontWeight: 400 }}>
                                *
                            </span>
                        </InputTitle>

                        <Input
                            type="text"
                            placeholder="이름"
                            handling={handleName}
                            border="20px"
                            margintop="0.2rem"
                        ></Input>
                        {!signUpValid.name && signUpVal.name && (
                            <ErrorMessage>
                                이름을 정확하게 입력해주세요.
                            </ErrorMessage>
                        )}
                    </InputFrame>

                    <InputFrame>
                        <InputTitle>
                            생년월일 8자리
                            <span style={{ color: "red", fontWeight: 400 }}>
                                *
                            </span>
                        </InputTitle>

                        <Input
                            type="text"
                            placeholder="생년월일 8자리"
                            handling={handleBirth}
                            border="20px"
                            margintop="0.2rem"
                        ></Input>
                        {!signUpValid.birth && signUpVal.birth && (
                            <ErrorMessage>
                                올바른 형식으로 작성해주세요.
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
                                handling={handleNumber}
                                border="20px"
                                margintop="0.2rem"
                            ></Input>
                            <AuthBtn onClick={onClickNumber}>코드 전송</AuthBtn>
                        </AuthFrame>
                        {!signUpValid.auth && !checkAuth && signUpVal.auth && (
                            <ErrorMessage>인증을 완료해 주세요.</ErrorMessage>
                        )}
                    </InputFrame>

                    {transmit && (
                        <InputFrame>
                            <InputTitle>
                                코드 입력
                                <span style={{ color: "red", fontWeight: 400 }}>
                                    *
                                </span>
                            </InputTitle>

                            <AuthFrame>
                                <Input
                                    type="tel"
                                    placeholder="코드."
                                    handling={handleAuth}
                                    border="20px"
                                    margintop="0.2rem"
                                ></Input>
                                <AuthBtn onClick={onClickAuth}>
                                    인증하기
                                </AuthBtn>
                            </AuthFrame>
                            <ErrorMessage>{<Timer />}</ErrorMessage>
                        </InputFrame>
                    )}
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
    font-family: Pretendard;
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
