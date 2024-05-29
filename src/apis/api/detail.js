/**
 * 상세정보 페이지 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 특정 병원 가져오기
export const getDetail = async (info) => {
    try {
        const result = await authInstance.get(
            `/api/hospitals/${info.hospitalId}`,
            info
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 특정 병원 상세정보 가져오기
export const getMoreDetail = async (info) => {
    try {
        const result = await authInstance.get(
            `/api/hospitals/${info.hospitalId}/reservation`
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 병원 예약하기
export const reserveHospital = async (info) => {
    try {
        const result = await authInstance.post(`/api/reservations`, info);
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
