import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import blueBackImg from "../../assets/images/blueBack.svg"
import HealthCareShipdoc from '../../assets/images/HealthCareShipdoc.svg';
import Checkbox from "react-custom-checkbox";
import { FaCheck } from "react-icons/fa6";
import Modal from '../../components/HealthCare/Modal';

const ReminderPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleGotoHome = () => {
    navigate("/home");
  }

  const handleChange = (checked) => {
    if (checked) {
      setModalText('수신허용이 완료되었습니다.');
      setModalTitle('허용완료');
    } else {
      setModalText('수신허용이 해제되었습니다.');
      setModalTitle('해제완료');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <PageContainer>
      <NavBar activeIndex={1}>
        <PageDetailTextContainer>
          <img src={blueBackImg} alt="blueBackImg" onClick={handleGotoHome} />
          <PageDetailText>홈 &gt; 건강검진 &gt; 건강검진 내역 보기</PageDetailText>
        </PageDetailTextContainer>
      </NavBar>
      <ContentContainer>
        <ReminderContainer>
          <ReminderImage src={HealthCareShipdoc} alt="Reminder" />
          <ReminderText>
            <ReminderTitle>건강검진 알려줘요 쉽닥!</ReminderTitle>
            <br />
            <ReminderSub>수신알람 설정을 하면 쉽닥이 건강검진 시기를 문자로 알려드려요.</ReminderSub>
          </ReminderText>
        </ReminderContainer>

        <GeneralContainer>
          <TitleContainer>
              <CalenderText>
                  건강검진 시기가 다가오면 문자로 연락드릴게요.
              </CalenderText>
          </TitleContainer>

          <TelWrapper>
              <InputDiv>
                  <InputComp placeholder="010-1234-5678" />
                  <EditButton>변경하기</EditButton>
              </InputDiv>
              <CheckBoxContainer>
                  <ReceptionText2>수신 허용</ReceptionText2>
                  <Checkbox
                      icon={<FaCheck style={FaCheckStyle} />}
                      checked={false}
                      borderRadius="50%"
                      borderWidth="2.5px"
                      onChange={handleChange}
                      borderColor="#005BE2"
                      style={{ cursor: "pointer" }}
                      labelStyle={LabelStyle}
                  />
                  <ReceptionText>건강검진 한 달 전에 알려드릴게요!</ReceptionText>
              </CheckBoxContainer>
          </TelWrapper>
        </GeneralContainer>

        <ConfirmButton
          onClick={handleGotoHome}
        >확인</ConfirmButton>
      </ContentContainer>

      <Modal
        show={showModal}
        handleClose={closeModal}
        title={modalTitle}
        text={modalText}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

const PageDetailTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PageDetailText = styled.p`
  color: #A3A3A3;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 4rem;
  margin-bottom: 10rem;
`;

const ReminderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1371FF;
  width: 70%;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: 0.5rem 1rem 0 1rem;
  border-radius: 1.5rem;
  box-shadow: 0px 3.453px 3.453px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  cursor: pointer; /* 클릭 가능한 커서 표시 */
`;

const ReminderImage = styled.img`
  height: 100%;
`;

const ReminderText = styled.p`
  color: #FFF;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const ReminderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.32px;
  text-shadow: 0px 0.789px 3.157px rgba(0, 0, 0, 0.25);
`;

const GeneralContainer = styled.div`
    text-align: start;
    align-items: center;
    justify-content: center;
    font-family: Pretendard;
    width: 30vw;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CalenderText = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
`;

const TelWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
`;

const InputDiv = styled.div`
    border: 0.08rem solid #c3c3c3;
    border-radius: 9px;
    width: 70%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InputComp = styled.input`
    margin-left: 1rem;
    width: 60%;
    height: 100%;
    color: #525252;
    font-family: Pretendard;
`;

const EditButton = styled.button`
  background-color: #5f5f5f;
  border: none;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  font-weight: 600;
  height: 70%;
  width: 30%;
  margin-right: 0.3rem;
  color: #FFF;
  font-family: Pretendard;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 9.297px;
  letter-spacing: -0.31px;
`;

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
`;

const ReceptionText2 = styled.div`
    color: #525252;
    font-weight: 500;
    font-size: 0.9rem;
`;

const ReceptionText = styled.div`
    color: #979797;
    font-size: 0.8rem;
    font-weight: 500;
`;

const FaCheckStyle = {
    color: "#1371FF",
    fontSize: "13px",
};

const LabelStyle = { marginLeft: "1rem", userSelect: "none" };

const ConfirmButton = styled.button`
  background-color: #1371FF;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  border-radius: 20px;
  width: 33vw;
  height: 6rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  cursor: pointer;

  &:hover {
    background-color: #0a5fcc;
  }
`;

const ReminderSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  font-family: Pretendard;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.18px;
  text-shadow: 0px 0.789px 3.157px rgba(0, 0, 0, 0.25);
`;

export default ReminderPage;
