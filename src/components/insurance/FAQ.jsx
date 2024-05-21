import React from 'react';
import styled from 'styled-components';
import FAQItem from './FAQItem';
import { Link } from 'react-router-dom';


const FAQ = () => {
  return (
    <FAQContainer>
      <Link to="/insurance/qna1">
        <FAQItem
          question="실손보험 청구는 어디서 할 수 있나요?"
          answer="실손보험 간단하게 청구하는 방법 알려드려요!"
        />
      </Link>
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
  .faq-item {
    background-color: #fff;
    border: 2px solid #1371FF;
    padding: 2rem;
    margin-bottom: 10px;
    border-radius: 37px;
  }
  .faq-item h3 {
    margin-top: 0;
  }
  .faq-item p {
    margin: 5px 0 0 0;
  }
  a {
    text-decoration: none;
  }
`;

export default FAQ;
