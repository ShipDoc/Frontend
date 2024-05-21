import React, { useState, useEffect } from "react";
import ShipDoc from "../../assets/images/ShipDoc.svg";
import Vector from "../../assets/images/Vector.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Checkbox from "react-custom-checkbox";
import { FaCheck } from "react-icons/fa6";

const SignUp = () => {
    const navigate = useNavigate();

    const [allChecked, setAllChecked] = useState(false);
    const [requiredChecked1, setRequiredChecked1] = useState(false);

    const [requiredChecked2, setRequiredChecked2] = useState(false);

    const [requiredChecked3, setRequiredChecked3] = useState(false);

    const [requiredChecked4, setRequiredChecked4] = useState(false);

    const [optionalChecked, setOptionalChecked] = useState(false);

    const handleAllChange = (checked, e) => {
        setAllChecked(checked);

        setRequiredChecked1(checked);
        setRequiredChecked2(checked);
        setRequiredChecked3(checked);
        setRequiredChecked4(checked);

        setOptionalChecked(checked);
    };

    const handleRequiredChange1 = (checked, e) => {
        setRequiredChecked1(checked);
    };

    const handleRequiredChange2 = (checked, e) => {
        setRequiredChecked2(checked);
    };

    const handleRequiredChange3 = (checked, e) => {
        setRequiredChecked3(checked);
    };

    const handleRequiredChange4 = (checked, e) => {
        setRequiredChecked4(checked);
    };

    const handleOptionalChange = (checked, e) => {
        setOptionalChecked(checked);
    };

    const handleSubmit = () => {
        // if (requiredChecked) {
        //     alert("동의가 완료되었습니다.");
        // } else {
        //     alert("필수 이용약관에 동의해주셔야 합니다.");
        // }
        navigate("/SignUp/Info");
    };

    // 필수 이용약관이 모두 체크되었는지 확인
    // const allRequiredChecked = Object.values(requiredChecked).every(Boolean);
    const [allRequiredChecked, setAllRequiredChecked] = useState(false);

    useEffect(() => {
        setAllRequiredChecked(
            requiredChecked1 &&
                requiredChecked2 &&
                requiredChecked3 &&
                requiredChecked4
        );

        if (
            requiredChecked1 &&
            requiredChecked2 &&
            requiredChecked3 &&
            requiredChecked4 &&
            optionalChecked
        )
            setAllChecked(true);
        else setAllChecked(false);
    }, [
        requiredChecked1,
        requiredChecked2,
        requiredChecked3,
        requiredChecked4,
        optionalChecked,
    ]);

    return (
        <Frame>
            <Div>
                <ImgDiv>
                    <Logo src={ShipDoc}></Logo>
                    <LogoIcon src={Vector}></LogoIcon>
                </ImgDiv>
                <Title>회원가입</Title>
                <BoxTitle>이용약관 동의</BoxTitle>
                <CheckBoxFrame>
                    <CheckBoxTitle>
                        <Checkbox
                            icon={<FaCheck style={FaCheckStyle} />}
                            name="my-input"
                            checked={allChecked}
                            borderRadius="50%"
                            borderWidth="1px"
                            onChange={handleAllChange}
                            borderColor="black"
                            labelStyle={LabelStyle}
                            label="전체 동의"
                        />
                    </CheckBoxTitle>

                    <StyledHr></StyledHr>

                    <CheckBoxStyle>
                        <Checkbox
                            icon={<FaCheck style={FaCheckStyle} />}
                            name="required1"
                            checked={requiredChecked1}
                            borderRadius="50%"
                            borderWidth="1px"
                            onChange={handleRequiredChange1}
                            borderColor="black"
                            style={{ cursor: "pointer" }}
                            labelStyle={LabelStyle}
                            label={
                                <>
                                    <span style={LabelHeadStyle}>(필수)</span>{" "}
                                    서비스 이용약관
                                </>
                            }
                        />
                    </CheckBoxStyle>
                    <CheckBoxStyle>
                        <Checkbox
                            icon={<FaCheck style={FaCheckStyle} />}
                            name="required2"
                            checked={requiredChecked2}
                            borderRadius="50%"
                            borderWidth="1px"
                            onChange={handleRequiredChange2}
                            borderColor="black"
                            style={{ cursor: "pointer" }}
                            labelStyle={LabelStyle}
                            label={
                                <>
                                    <span style={LabelHeadStyle}>(필수)</span>{" "}
                                    개인정보 처리방침
                                </>
                            }
                        />
                    </CheckBoxStyle>

                    <CheckBoxStyle>
                        <Checkbox
                            icon={<FaCheck style={FaCheckStyle} />}
                            name="required3"
                            checked={requiredChecked3}
                            borderRadius="50%"
                            borderWidth="1px"
                            onChange={handleRequiredChange3}
                            borderColor="black"
                            style={{ cursor: "pointer" }}
                            labelStyle={LabelStyle}
                            label={
                                <>
                                    <span style={LabelHeadStyle}>(필수)</span>{" "}
                                    개인(민감)정보 수집 및 이용 동의
                                </>
                            }
                        />
                    </CheckBoxStyle>

                    <CheckBoxStyle>
                        <Checkbox
                            icon={<FaCheck style={FaCheckStyle} />}
                            name="required4"
                            checked={requiredChecked4}
                            borderRadius="50%"
                            borderWidth="1px"
                            onChange={handleRequiredChange4}
                            borderColor="black"
                            style={{ cursor: "pointer" }}
                            labelStyle={LabelStyle}
                            label={
                                <>
                                    <span style={LabelHeadStyle}>(필수)</span>{" "}
                                    위치기반서비스 이용약관
                                </>
                            }
                        />
                    </CheckBoxStyle>

                    <CheckBoxStyle>
                        <Checkbox
                            icon={<FaCheck style={FaCheckStyle} />}
                            checked={optionalChecked}
                            borderRadius="50%"
                            borderWidth="1px"
                            onChange={handleOptionalChange}
                            borderColor="black"
                            style={{ cursor: "pointer" }}
                            labelStyle={LabelStyle}
                            label={
                                <>
                                    <span
                                        style={{
                                            color: "#646464",
                                            fontWeight: 700,
                                        }}
                                    >
                                        (선택)
                                    </span>{" "}
                                    혜택 이벤트 알림 수신동의
                                </>
                            }
                        />
                    </CheckBoxStyle>
                </CheckBoxFrame>
                <Btn disabled={!allRequiredChecked} onClick={handleSubmit}>
                    가입하기
                </Btn>
            </Div>
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

const CheckBoxFrame = styled.div`
    border: 1.7px solid #878787;
    border-radius: 45px;
    margin-bottom: 2rem;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.1), -6px 6px 6px rgba(0, 0, 0, 0.1);
`;

const StyledHr = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid #878787;
    margin: 1rem 0;
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

const CheckBoxTitle = styled.div`
    margin: 2rem 0 1rem 2rem;
    font-size: 1.4rem;
    font-weight: 700;
`;

const CheckBoxStyle = styled.div`
    margin: 2rem 0 2rem 2rem;
    font-size: 1rem;
    font-weight: 500;
`;

const FaCheckStyle = {
    color: "#1371FF",
    fontSize: "13px",
};

const LabelHeadStyle = { color: "#1371FF", fontWeight: 700 };

const LabelStyle = { marginLeft: "1rem", userSelect: "none" };

export default SignUp;
