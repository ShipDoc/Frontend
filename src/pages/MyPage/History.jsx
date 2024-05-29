import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import Content from "../../components/MyPage/History/Content";
import { getConsultations } from "../../apis/api/consultations";
import { useNavigate } from "react-router-dom";

const History = () => {
    const [consultations, setConsultations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchConsultations = async () => {
            const data = await getConsultations();
            if (
                data.result === null ||
                data.result.consultations.length === 0
            ) {
                console.log(data);
                navigate("/mypage/historyNull");
            } else {
                setConsultations(data.result.consultations);
            }
        };

        fetchConsultations();
    }, [navigate]);

    return (
        <PageContainer>
            <NavBar>마이페이지 &gt; 진료내역 보기</NavBar>
            <Content consultations={consultations} />
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

export default History;
