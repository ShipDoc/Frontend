import React from "react";
import Checkbox from "react-custom-checkbox";
import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";

const AgreeText = (props) => {
    return (
        <>
            <TitleText>약관 동의</TitleText>
            <AgreeContainer>
                <AgreeDescription>
                    (필수)
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </AgreeDescription>
                <Checkbox
                    icon={<FaCheck style={FaCheckStyle} />}
                    name="required1"
                    checked={props.requiredChecked1}
                    borderWidth="1px"
                    onChange={props.handleRequiredChange1}
                    borderColor="#4F4F4F"
                    style={{ cursor: "pointer" }}
                />
            </AgreeContainer>
            <AgreeContainer>
                <AgreeDescription>
                    (필수)
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </AgreeDescription>
                <Checkbox
                    icon={<FaCheck style={FaCheckStyle} />}
                    name="required1"
                    checked={props.requiredChecked2}
                    borderWidth="1px"
                    onChange={props.handleRequiredChange2}
                    borderColor="#4F4F4F"
                    style={{ cursor: "pointer" }}
                />
            </AgreeContainer>
            <AllAgreeContainer>
                <SubTitleText>전체 동의</SubTitleText>
                <Checkbox
                    icon={<FaCheck style={FaCheckStyle} />}
                    name="required1"
                    checked={props.allChecked}
                    borderWidth="1px"
                    onChange={props.handleAllChange}
                    borderColor="#4F4F4F"
                    style={{ cursor: "pointer" }}
                />
            </AllAgreeContainer>
        </>
    );
};

const TitleText = styled.div`
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
`;

const AgreeContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-top: 0.8rem;
`;

const AgreeDescription = styled.div`
    color: #979797;
    font-size: 0.8rem;
    font-weight: 500;
`;

const FaCheckStyle = {
    color: "#1371FF",
    fontSize: "13px",
};

const SubTitleText = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
`;

const AllAgreeContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-top: 1.2rem;
`;

export default AgreeText;
