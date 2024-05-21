import React from "react";
import styled from "styled-components";

const SignInBtn = ({ text, border, handle }) => {
    return (
        <div>
            <Btn border={border} onClick={handle}>
                {text}
            </Btn>
        </div>
    );
};

const Btn = styled.button`
    background-color: #1371ff;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: ${(props) => props.border};
    width: 100%;
    height: 3rem;
    margin-top: 0.8rem;
`;

export default SignInBtn;
