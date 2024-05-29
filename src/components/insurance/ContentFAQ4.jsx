import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <TextContainer>
            <Subject>실손보험 청구 시 필요한 서류와 절차는 무엇인가요?</Subject>
            <Text>
              <SubText>
              먼저 실비와 병원 청구에 대해 간단히 설명해 드리겠습니다. 실비는 병원에서 발생한 실제 의료비를 보상받는 제도입니다.              
              </SubText>
              <SubText>
              병원 청구는 병원에서 발생한 비용을 청구하는 절차를 의미합니다. 이 두 가지를 이해하면 서류 준비와 청구 절차가 훨씬 쉬워질 것입니다.              
              </SubText>
              <SubText>
              병원에서 준비해야 하는 서류<br/>
              1. 의료비 영수증: 병원에서 발급한 의료비 지출 증빙서류입니다.<br/>
              2. 진단서: 질병의 진행과 치료 과정을 기록한 문서입니다.<br/>
              3. 처방전: 의사가 처방한 약물의 상세 내용을 기록한 문서입니다.              
              </SubText>
              <SubText>
              청구를 위해 준비해야 하는 서류<br/>
              1. 청구 양식: 회사에서 제공하는 양식에 맞춰 작성한 청구서입니다.<br/>
              2. 신분증 사본: 본인 확인을 위한 신분증 사본입니다.<br/>
              3. 통장 사본: 보상금을 받을 통장의 사본입니다.<br/>
              4. 기타 추가 서류: 회사에서 요구하는 추가 서류(예: 퇴원 확인서, 수술 기록 등)입니다.<br/>              
              </SubText>
              <SubText>
              실비 청구 절차는 다음과 같은 몇 단계로 이루어집니다.
              </SubText>
              <SubText>
              1. 진료비 영수증 및 진료 기록지 준비
              병원에서 진료를 받고 난 후, 진료비 영수증과 진료 기록지를 반드시 받아 두세요. 이 문서들은 청구에 필요한 기본 자료입니다.
              </SubText>
              <SubText>
              2. 청구 서류 작성
              해당 서류에는 개인 정보, 진료받은 내용, 요청하는 금액 등이 포함되어야 합니다. 여기에 필요한 서류로는 신분증 사본, 은행 계좌 사본 등이 있으며, 경우에 따라 처방전 사본이나 추가 진단서가 요구될 수 있습니다.
              </SubText>
              <SubText>
              3. 서류 제출
              준비한 서류를 모두 모은 후, 이를 보험사에 제출합니다. 서류 제출은 우편, 방문, 또는 온라인을 통해 할 수 있으며, 각 보험사마다 제출 방법이 다를 수 있으니 사전에 확인하는 것이 좋습니다.
              </SubText>
              <SubText>
              4. 처리 과정 및 결과 확인
              서류 제출 후, 보험사에서는 제출된 서류를 검토하고 처리 과정을 거칩니다. 처리 기간 동안에는 보험사의 웹사이트나 고객센터를 통해 진행 상황을 확인할 수 있습니다. 최종적으로, 청구가 승인되면 지정한 계좌로 금액이 입금됩니다.
              </SubText>
              <SubText>
              실비 청구는 본인이 직접 할 수도 있고, 일부 병원에서는 대행 서비스를 제공하기도 합니다.<br/>
              청구 과정이 복잡하거나 시간이 부족한 경우, 병원의 대행 서비스를 이용하는 것도 좋은 방법입니다.<br/>
              청구 절차를 잘 이해하고 필요한 서류를 정확히 준비하여, 원활한 청구가 이루어지길 바랍니다.
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
