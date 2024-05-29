import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <TextContainer>
            <Subject>실손보험 청구 간소화법이 무엇인가요?</Subject>
            <Text>
              <SubText>
              실손보험청구 간소화가 14년 만에 국회 본회의에 상정되었으며, 2024년부터는 자동청구가 가능할 것으로 예상됩니다.
              </SubText>
              <SubText>
              현재는 ① 치료 -&gt; ② 영수증 및 상세증명서 발급 (실비보험 청구서류 준비) -&gt; ③ 앱 또는 보험설계사를 통해 신청 -&gt; ④ 보험금 지급의 순서로 실비를 청구합니다.              
              </SubText>
              <SubText>
              최근 3년간 실손보험 미청구 금액이 7,400억 원에 달합니다. 소액의 경우 귀찮아서 청구를 안 하거나, 본인이 실손보험에 가입한 사실을 까먹기도 합니다. 그러나 보험업법 개정으로 14년 만에 자동청구가 도입되어, 앞으로는 쉽게 신청할 수 있을 것으로 보입니다.              
              </SubText>
              <SubText>
              이러한 시스템은 오랫동안 필요했지만, 보험사의 영향력으로 인해 도입이 지연되었습니다.              
              </SubText>
              <SubText>
              공식적인 시행은 2024년 10월로 예상되며, 약국에 관한 시행은 2025년 10월로 예정되어 있습니다. 실손보험청구 간소화를 위한 보험업법 개정안이 국회를 통과하여 공포 후 1년 뒤부터 시행될 예정입니다. 이에 따라 병원에서의 적용은 2024년 10월부터, 약국에서는 2025년 10월부터 시작됩니다.              
              </SubText>
              <SubText>
              현재 실비보험 청구를 위해서는 환자가 병원에서 청구 서류를 발급받아 제출해야 하며, 일일 한도가 적용됩니다. 이 한도는 통원 치료 기준으로 일일 최대 250,000원(약제비 50,000원 별도)입니다. 따라서 환자는 자신의 일일 한도를 확인해야 하며, 고가의 치료를 받을 경우 입원 치료가 일반적입니다.
              </SubText>
              <SubText>
              실비보험은 실손보험청구 간소화에 따라 4세대로 나뉘며, 각 세대별 특징은 다음과 같습니다: <br/>

                - 1세대: 2009년 7월 이전 가입<br/>
                - 2세대: 2009년 8월부터 2017년 3월까지<br/>
                - 3세대: 2017년 4월부터 2021년 6월까지<br/>
                - 4세대: 2021년 7월 이후 가입<br/>

              실손보험청구 간소화는 가입 시기에 따라 혜택이 달라지며, 일반적으로 더 일찍 가입할수록 유리합니다.
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
