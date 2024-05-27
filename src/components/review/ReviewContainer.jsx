import React from "react";
import styled from "styled-components";
import profile from "../../assets/images/profile.svg";
import Star from "../common/Star";

const ReviewContainer = (props) => {
    return (
        <div>
            <ProfileContainer>
                <Profile>
                    <img src={profile}></img>
                    <Username>
                        {props.username ? props.username : "김*히"}
                    </Username>
                    <Star
                        textColor="#949494"
                        rate={props.starRate ? props.starRate : 2}
                    ></Star>
                </Profile>
                <DateText>
                    {props.date ? props.date : "2024년 5월 26일"}
                </DateText>
            </ProfileContainer>
            <GeneralContainer>
                <Description>
                    {props.text
                        ? props.text
                        : "안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여."}
                </Description>
            </GeneralContainer>
        </div>
    );
};

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Username = styled.div`
    margin: 0 1rem;
    font-weight: 700;
    font-size: 1rem;
`;

const DateText = styled.div`
    font-weight: 700;
    font-size: 0.7rem;
    color: #949494;
`;

const GeneralContainer = styled.div`
    text-align: start;
    width: 100%;
    padding: 1.5rem 3rem 0 3rem;
`;

const Description = styled.div`
    line-height: 1.5rem;
`;
export default ReviewContainer;
