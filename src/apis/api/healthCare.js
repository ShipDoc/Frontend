/**
 * healthCare 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 건강검진 가능 병원 가져오기
export const getHealthCareList = async (info) => {
    try {
        const result = await authInstance.post(
            `/api/search/health-checkup`,
            info
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
