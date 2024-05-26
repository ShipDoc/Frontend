import React, { useEffect, useState } from "react";
import hospitalMarker from "../../assets/icons/hospitalMarker.svg";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const HospitalMap = (props) => {
    const [coordinate, setCoordinate] = useState({
        lat: props.data.latitude,
        lng: props.data.longitude,
    });

    const [hospitalAddress, setHospitalAddress] = useState(
        "서울 성북구 동서문로 12 청암빌딩"
    );

    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(hospitalAddress);
        } catch (error) {
            console.log("실패");
        }
    };

    useEffect(() => {
        setCoordinate({ lat: props.data.latitude, lng: props.data.longitude });
    }, [props.data]);

    return (
        <HospitalMapContainer>
            <Titlecontainer>
                <img src={hospitalMarker}></img>
                <ImgTitle>병원 위치</ImgTitle>
            </Titlecontainer>
            <AddressAndBtnContainer>
                <AddressContainer>
                    <div>{hospitalAddress}</div>
                    <CopyAddress onClick={handleCopyClipBoard}>
                        복사
                    </CopyAddress>
                </AddressContainer>
                <AddressBtn>지도보기</AddressBtn>
            </AddressAndBtnContainer>
            <MapContainer>
                <Map
                    center={coordinate}
                    style={{ width: "100%", height: "360px" }}
                >
                    <MapMarker position={coordinate}></MapMarker>
                </Map>
            </MapContainer>
        </HospitalMapContainer>
    );
};

// 마커 이미지 변경시
// image={{
//     src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
//     size: {
//       width: 64,
//       height: 69,
//     }, // 마커이미지의 크기입니다
//     options: {
//       offset: {
//         x: 27,
//         y: 69,
//       }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
//     },
//   }}

const HospitalMapContainer = styled.div``;

const Titlecontainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
`;

const ImgTitle = styled.div`
    margin-left: 0.5rem;
    font-weight: 600;
`;

const AddressAndBtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AddressContainer = styled.div`
    display: flex;
    color: #808080;
    font-size: 0.75rem;
`;

const CopyAddress = styled.div`
    cursor: pointer;
    color: #57aeff;
    margin-left: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

const AddressBtn = styled.button`
    background-color: #1371ff;
    color: white;
    font-weight: 500;
    font-size: 0.75rem;
    border-radius: 5px;

    padding: 0.15rem 0.5rem;
`;

const MapContainer = styled.div`
    border: 1px solid black;
    margin-top: 0.7rem;
`;

export default HospitalMap;
