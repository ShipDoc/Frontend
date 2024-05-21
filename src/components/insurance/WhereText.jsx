import React from 'react';
import styled from 'styled-components';

const Where = () => {
  return (
      <Container>
          <Subject>실손보험 청구는 어디서 할 수 있나요?</Subject>
          <Text>
            <Text1>
                카카오톡 카카오페이, 네이버페이, 토스 등 핀테크 기업이 보험청구<br/> 
                간단 서비스를 제공하고 있습니다. 소액의 진료비 실손보험청구 카카오<br/>
                페이 네이버페이 토스로 30초 내 신청이 가능합니다. 10만 원 이하 진료<br/>
                비 영수증 약국 영수증 사진만 있으면 됩니다.<br/>
                신청 후 2~5일 이내 보험금을 받을 수 있습니다.<br/>
                다만 10만 원이 넘으면 추가 제출 서류가 있습니다.<br/>
                그리고 무엇보다 병원 개인정보가 포털 사이트로 넘어가는 단점이 있습<br/>
                니다.
            </Text1>
            <Text2>
              카카오톡 카카오페이, 네이버페이, 토스 등 핀테크 기업이 보험청구<br/> 
              간단 서비스를 제공하고 있습니다. 소액의 진료비 실손보험청구 카카오<br/>
              페이 네이버페이 토스로 30초 내 신청이 가능합니다. 10만 원 이하 진료<br/>
              비 영수증 약국 영수증 사진만 있으면 됩니다.<br/>
              신청 후 2~5일 이내 보험금을 받을 수 있습니다.<br/>
              다만 10만 원이 넘으면 추가 제출 서류가 있습니다.<br/>
              그리고 무엇보다 병원 개인정보가 포털 사이트로 넘어가는 단점이 있습<br/>
              니다.
            </Text2>
            <Text3>
              카카오톡 카카오페이, 네이버페이, 토스 등 핀테크 기업이 보험청구<br/> 
              간단 서비스를 제공하고 있습니다. 소액의 진료비 실손보험청구 카카오<br/>
              페이 네이버페이 토스로 30초 내 신청이 가능합니다. 10만 원 이하 진료<br/>
              비 영수증 약국 영수증 사진만 있으면 됩니다.<br/>
              신청 후 2~5일 이내 보험금을 받을 수 있습니다.<br/>
              다만 10만 원이 넘으면 추가 제출 서류가 있습니다.<br/>
              그리고 무엇보다 병원 개인정보가 포털 사이트로 넘어가는 단점이 있습<br/>
              니다.            
            </Text3>
          </Text>
      </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1rem;
`;

const Subject = styled.h1`
  width: 100%;
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: nomal;
  font-weight: 800;
  line-height: normal;
  margin: 3rem 0 5rem 0;
`;

const Text = styled.div`
  text-align: center;
`;

const Text1=styled.h2`
  color: #2F2F2F;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: nomal;
`;

const Text2 = Text1;
const Text3 = Text2;

export default Where;
