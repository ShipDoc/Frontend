import React, { useState } from "react";
import styled from "styled-components";

const ButtonGroup = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 20px auto;
`;

const RadioButton = styled.button`
    background-color: ${(props) => (props.isSelected ? "#1371FF" : "#ffffff")};
    color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
    border: ${(props) => (props.isSelected ? "none" : "1px solid #C3C3C3")};
    border-radius: 9px;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    outline: none;
    transition: background-color 0.3s, color 0.3s;
    flex: 1;

    &:hover {
        background-color: #1371ff;
        color: #ffffff;
    }
`;

const ButtonRadioGroup = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleButtonClick = (value) => {
        setSelectedOption(value);
    };

    return (
        <ButtonGroup>
            <RadioButton
                isSelected={selectedOption === "option1"}
                onClick={() => handleButtonClick("option1")}
            >
                자동 예약 해주세요!
            </RadioButton>
            <RadioButton
                isSelected={selectedOption === "option2"}
                onClick={() => handleButtonClick("option2")}
            >
                괜찮아요!
            </RadioButton>
        </ButtonGroup>
    );
};

export default ButtonRadioGroup;
