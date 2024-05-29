import React from 'react';
import styled from 'styled-components';
import kakaoImg from "../../assets/images/kakaoImg.png";
import naverImg from "../../assets/images/naverImg.png";
import tossImg from "../../assets/images/tossImg.png";

const Content = () => {
  return (
    <MainContainer>
      <Container>
        <Section>
          <TextContainer>
            <Subject>실손보험 청구는 어디서 할 수 있나요?</Subject>
            <Text>
              <SubText>
                소액의 진료비 실손보험청구 카카오페이 네이버페이 토스로 30초 이내 신청이 가능합니다.
                10만 원 이하 진료비 영수증 약국 영수증 사진만 있으면 됩니다. 
                신청 후 2~5일 이내 보험금을 받을 수 있습니다. 
                다만 10만 원이 넘으면 추가 제출 서류가 있습니다. 
                그리고 무엇보다 병원 개인정보가 포털 사이트로 넘어가는 단점이 있습니다.
              </SubText>
              <SubText>
                사실 실손보험에 가입하고도 진료비나 약값이 소액이라 청구하지 않은 사람들이 많았습니다. 이유는 청구 절차가 복잡하고 귀찮고 금액에 비해 시간 낭비가 크기 때문입니다.
              </SubText>
              <SubText>
                예를 들어 진료 병원에서 보험청구용 진단서를 받아 보험사에 제출해야 합니다. 특히 10만 원 이하 소액인 경우 일부러 병원 다시 찾아가서 진단서 발급받고, 다시 보험사에 제출하는 과정이 쉬운 일은 아닙니다.           
              </SubText>
              <SubText>
                하지만 카카오페이, 네이버페이, 토스 등이 진료비 그리고 약제비 영수증 사진만 올리면 30초 이내 신청이 됩니다. 그리고 2~5일 이내 보험금을 받을 수 있습니다. 매우 간단하죠.
              </SubText>
              <SubText>
                다만 10만 원 이상인 경우는 추가 제출 서류가 필요합니다. 통원확인서, 진단서, 처방전 중 한 가지가 반드시 필요합니다. 입원비 청구 시 진단서, 입원 퇴원 확인서 중 하나가 필요하고, 비급여인 경우 진료비 내역서가 필요합니다. 수술비 청구는 진단서와 수술확인서가 필요합니다. 응급실인 경우 응급실 외래진료 기록지가 필요합니다. 이들을 사진 찍어서 올리기만 하면 됩니다. 그럼 10만 원 이상도 청구가 가능합니다.
              </SubText>
              <SubText>
                카카오톡 카카오페이, 네이버페이, 토스 등 핀테크 기업이 보험청구 간단 서비스를 제공하고 있습니다.
              </SubText>
              <SubText>
                1) 카카오페이 - 카카오톡에서 더보기 또는 설정에서 카카오페이에서 보험을 클릭합니다. 그러면 병원비 청구 항목이 있습니다. 본인인증 하고, 병원 약국 영수증 사진을 첨부하여 신청하면 됩니다. 그럼 5일 이내 보험금이 지급됩니다.
                <SubImg>
                  <img src={kakaoImg} alt="카카오페이" />
                </SubImg>
              </SubText>
              <SubText>
              2) 네이버페이 - 네이버에서 네이버페이 앱을 설치하고, 보험금 청구를 클릭하여, 개인정도 동의하고, 준비된 병원 약국 영수증 사진 등록하면 신청이 완료됩니다. 그럼 5일 이내 보험금이 지급됩니다.
              <SubImg>
                <img src={naverImg} alt="네이버페이" />
              </SubImg>
              </SubText>
              <SubText>
              3) 토스 - 토스앱에서 보험금을 청구할 수 있습니다. 하단으로 내리면 보험 메뉴가 있고, 거기에 병원비 돌려받기가 있습니다. 클릭하고 주민번호등록하고 병원 방문 사유를 입력하고, 필요한 서류 등록하면 신청 완료 2일 이내 보험금 지급됩니다. 토스는 조금 카카오페이, 네이버페이보다 덜 간단합니다.
              <SubImg>
                <img src={tossImg} alt='토스' />
              </SubImg>
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
