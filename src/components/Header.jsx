import styled from "styled-components"
import profileImg from "../assets/images/profile.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
`

const ButtonBox = styled.div `
  display: flex;
  justify-contetnt: center;
  align-items: center;
  gap: 0.56rem;
`

const Button = styled.button `
  display: inline-flex;
  padding: 0.4375rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.0625rem;
  background: #005BE2;
  color: #FFF;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const LogoText = styled.p `
  color: #005BE2;
  text-shadow: 0px 0.326px 0.326px rgba(0, 0, 0, 0.25);
  font-family: ChangwonDangamAsac;
  font-size: 2.0625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5vw;
  margin-right: 5vw;
  // margin: 0 auto;
`

const UserText = styled.p`
  color: #4F4F4F;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 2vw;
`

export default function Header({user}) {
  return (
    <HeaderContainer>
      <ButtonBox>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonBox>
      <LogoText>쉽닥</LogoText>
      <UserText>{user}(님)</UserText>
      <div>
        <img src={profileImg} alt="profileImg" />
      </div>
    </HeaderContainer>
  )
}