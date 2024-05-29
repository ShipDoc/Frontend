import React from 'react';
import styled from 'styled-components';
import FAQItem from './FAQItem';
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  const handleFAQ1 = () => {
    navigate("FAQ1");
  };

  const handleFAQ2 = () => {
    navigate("FAQ2");
  }

  const handleFAQ3 = () => {
    navigate("FAQ3");
  }

  const handleFAQ4 = () => {
    navigate("FAQ4");
  }

  return (
    <FAQContainer>
      <ClickableFAQItem onClick={handleFAQ1}>
        <FAQItem
          question="실손보험 청구 어디서 간단하게 신청할 수 있나요?"
          answer="카카오페이, 네이버페이, 토스로 30초 이내에 신청하는 방법"
        />
      </ClickableFAQItem>
      
      <ClickableFAQItem onClick={handleFAQ2}>
        <FAQItem
          question="실비보험 청구는 어떻게 해야 하나요?"
          answer="실비보험 청구 이렇게 하면 돼요!"
        />
      </ClickableFAQItem>
      <ClickableFAQItem onClick={handleFAQ3}>
        <FAQItem 
          question="실손보험 청구 간소화법이 무엇인가요?"
          answer="간소화법 알고 계신가요?"
        />
      </ClickableFAQItem>
      <ClickableFAQItem onClick={handleFAQ4}>
        <FAQItem
          question="실손보험 청구 시 필요한 서류와 절차는 무엇인가요?"
          answer="서류 발급 방법과 절차 알려드려요!"
        />
      </ClickableFAQItem>
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
