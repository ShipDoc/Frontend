import React from "react";
import styled from "styled-components";

const SignInBtn = ({ text, border, handle }) => {
    const Btn = styled.button`
        background-color: #1371ff;
        color: white;
        font-weight: 800;
        font-size: 1.2rem;
        border-radius: ${border};
        width: 100%;
        height: 3rem;
        margin-top: 0.8rem;
    `;

    return (
        <div>
            <Btn onClick={handle}>{text}</Btn>
        </div>
    );
};

export default SignInBtn;
