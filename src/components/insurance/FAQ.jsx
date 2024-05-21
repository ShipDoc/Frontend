import React from 'react';
import styled from 'styled-components';
import FAQItem from './FAQItem';
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  const handleFAQ1 = () => {
    navigate("FAQ1");
  };

  return (
    <FAQContainer>
      <ClickableFAQItem onClick={handleFAQ1}>
        <FAQItem
          question="실손보험 청구는 어디서 할 수 있나요?"
          answer="실손보험 간단하게 청구하는 방법 알려드려요!"
        />
      </ClickableFAQItem>
      
      <FAQItem
        question="실손보험 청구는 어떻게 하나요?"
        answer="실손보험 청구 이렇게 하면 된다!"
      />
      <FAQItem
        question="실손보험 청구 간소화법이 무엇인가요?"
        answer="간소화법 알고 계신가요?"
      />
      <FAQItem
        question="실손보험 청구 시 필요한 서류는 무엇인가요?"
        answer="서류 발급 방법 알려드려요!"
      />
    </FAQContainer>
  );
};

const FAQContainer = styled.div`
  font-family: Pretendard;
`;

const ClickableFAQItem = styled.div`
  cursor: pointer;
`;

export default FAQ;
