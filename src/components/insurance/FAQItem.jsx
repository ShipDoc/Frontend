// src/components/insurance/FAQItem.js
import React from 'react';
import styled from 'styled-components';

const FAQItem = ({ question, answer }) => {
  return (
    <FAQItemContainer className="faq-item">
      <Question>{question}</Question>
      <Answer>{answer}</Answer>
    </FAQItemContainer>
  );
};

const FAQItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  border-radius: 37px;
  border: 2px solid var(--Primary-color, #1371FF);
  box-shadow: 6px 6px 9px 0px rgba(0, 0, 0, 0.25);
  background: var(--Sub-color, #FFF);
  flex-shrink: 0;
  justify-content: center;
  margin-top: 2rem;
  letter-spacing: -0.1rem;
`;

const Question = styled.h3`
  color: var(--Primary-color, #1371FF);
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 800;
  line-height: 175%;
  text-shadow: 0rem 1.538px 6.151px rgba(19, 113, 255, 0.25);
`;

const Answer = styled.p`
  color: var(--Primary-color, #1371FF);
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 175%;
  text-shadow: 0px 1.538px 6.151px rgba(0, 0, 0, 0.25);
`;

export default FAQItem;
