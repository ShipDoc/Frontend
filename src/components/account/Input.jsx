import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, handling, border, margintop }) => {
    return (
        <InputDiv border={border} margintop={margintop}>
            <InputComp
                type={`${type}`}
                placeholder={`${placeholder}`}
                onChange={handling}
                border={border}
            ></InputComp>
        </InputDiv>
    );
};

const InputDiv = styled.div`
    border: 0.08rem solid #000;
    border-radius: ${(props) => props.border};
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${(props) => props.margintop} auto 0 auto;
`;

const InputComp = styled.input`
    width: 90%;
    height: 100%;
    border-radius: ${(props) => props.border};
`;

export default Input;
