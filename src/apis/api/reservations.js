/**
 * 마이페이지 병원 예약내역 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 예약 내역 가져오기
export const getReservations = async () => {
    try {
        const result = await authInstance.get(`/api/reservations/check-all`);
        return result.data;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

