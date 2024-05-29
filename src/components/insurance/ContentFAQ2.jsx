import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <TextContainer>
            <Subject>실비보험 청구는 어떻게 해야 하나요?</Subject>
            <Text>
              <SubText>
              실비보험 청구는 본인이 입원, 수술 등을 진행했을 경우 실제로 지출한 병원비를 보험사에 청구하여 보상 받는 절차입니다. 실비보험 청구를 위해서는 우선 보험 가입 시 약관에서 정의된 기준에 의해 자격이 확인됐는지 확인해야 합니다. 일반적으로 실비보험의 진료비 청구는 진료비 영수증, 진료비 상세내역서, 병원 진료 기록 등이 필요합니다.
              </SubText>
              <SubText>
              그리고 실비보험 청구를 요청하려면 보험사에서 요구하는 서류를 제출해야 합니다. 서류 제출방법은 대부분 보험사에서 온라인으로 제공하나, 일부 필수 서류는 우편으로 제출해야하는 경우도 있습니다. 인터넷이나 모바일 청구 서비스를 이용하는 것도 편리한 방법 중 하나입니다. 디지털 청구를 위해서는 청구서를 작성하고 영수증 등 청구 자료를 스캔하여 보험사에 전송해야 합니다.
              </SubText>
              <SubText>
              다음으로, 보험사에서 진행하는 심사절차가 있습니다. 서류가 모두 제출되면 보험사에서 실비보험 청구 내용을 확인하고, 청구 내용이 보험 약관에 부합하는지를 심사합니다. 이 과정에서 누락된 서류나 보충이 필요한 경우 보험사에서 연락을 할 수 있으니 유의해야 합니다.
              </SubText>
              <SubText>
              마지막으로 실비보험 청구 절차를 끝낸 후에는 보험금이 지급되고, 이는 대부분 계약자가 지정한 계좌로 입금이 됩니다. 보험금 지급까지의 시일은 보험사마다 차이가 있고, 청구 내용이 복잡할수록 심사 기간이 길어질 수 있습니다. 실비보험 청구의 전 과정을 숙지하고 사전에 준비하면 보다 빠르고 원활하게 청구 작업을 진행할 수 있습니다.
              </SubText>
            </Text>
          </TextContainer>
        </Section>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  padding: 20px 0;
  width: 40%;
  max-width: 1200px;
  background: var(--Sub-color, #FFF);
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  h2 {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
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

const SubText = styled.h2`
  color: #2F2F2F;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: nomal;
  margin-bottom: 1rem;
`;

const SubImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default Content;
