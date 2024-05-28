/**
 * 마이페이지 진료내역 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 진료 내역 가져오기
export const getConsultations = async () => {
    try {
        const result = await authInstance.get(`/api/consultations/check-all`);
        return result.data;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

