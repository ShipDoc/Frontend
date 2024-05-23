import React, { useState } from "react";
import styled from "styled-components";
import toss from "../../assets/images/payments/toss.svg";
import naver from "../../assets/images/payments/naver.svg";
import payco from "../../assets/images/payments/payco.svg";
import kakaopay from "../../assets/images/payments/kakaopay.svg";

const PaymentMethod = ({ companyName, isSelected, onSelect }) => {
    const imgSrc = (name) => {
        if (name === "토스페이") return toss;
        if (name === "네이버페이") return naver;
        if (name === "페이코") return payco;
        if (name === "카카오페이") return kakaopay;
    };

    return (
        <MethodContainer>
            <StyledRadioButton
                type="radio"
                checked={isSelected}
                onChange={() => onSelect(companyName)}
            />
            <CompanyLogo src={imgSrc(companyName)} />
            <CompanyName>{companyName}</CompanyName>
        </MethodContainer>
    );
};

const Payments = () => {
    const [selectedCompany, setSelectedCompany] = useState("토스페이");

    const handleSelectCompany = (companyName) => {
        setSelectedCompany(companyName);
    };

    return (
        <Container>
            <PaymentMethod
                companyName="토스페이"
                isSelected={selectedCompany === "토스페이"}
                onSelect={handleSelectCompany}
            />
            <PaymentMethod
                companyName="네이버페이"
                isSelected={selectedCompany === "네이버페이"}
                onSelect={handleSelectCompany}
            />
            <PaymentMethod
                companyName="페이코"
                isSelected={selectedCompany === "페이코"}
                onSelect={handleSelectCompany}
            />
            <PaymentMethod
                companyName="카카오페이"
                isSelected={selectedCompany === "카카오페이"}
                onSelect={handleSelectCompany}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const MethodContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 0.5rem;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
`;

const StyledRadioButton = styled.input`
    margin-right: 1rem;
    width: 1.3rem;
    height: 1.3rem;
`;

const CompanyLogo = styled.img`
    width: 8rem;
    height: 3rem;
    margin-right: 3rem;
    object-fit: contain;
`;

const CompanyName = styled.div`
    font-size: 1rem;
    color: #4f4f4f;
`;

export default Payments;
