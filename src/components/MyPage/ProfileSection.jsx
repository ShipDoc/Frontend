import React from 'react';
import styled from 'styled-components';
import profileImage from '../../assets/images/profile.svg';
import camera from "../../assets/images/camera.svg";
import pencil from "../../assets/images/pencil.svg";

const ProfileSection = () => {
  return (
    <ProfileContainer>
      <ProfileImage>
        <ProfileImg src={profileImage} alt="Profile" />
        <CameraEditIcon><img src={camera} alt='camera' /></CameraEditIcon>
      </ProfileImage>
      <User>
        <UserName>김아현</UserName>
        <EditIcon src={pencil} alt="pencil" />
      </User>
      <ButtonsContainer>
        <ProfileButton>병원 예약내역</ProfileButton>
        <ProfileButton>진료내역</ProfileButton>
      </ButtonsContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 8rem 0 4rem 0;
`;

const ProfileImage = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CameraEditIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #606060;
  border-radius: 50%;
  padding: 0.4rem;
  cursor: pointer;
  z-index: 1;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  font-family: Pretendard;
  margin-left: 2rem;
  margin-right: 1rem;
`;

const EditIcon = styled.img`
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 4rem;
`;

const ProfileButton = styled.button`
  width: 17vw;
  height: 14vh;
  background-color: #1371ff;
  color: white;
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  line-height: normal;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export default ProfileSection;
