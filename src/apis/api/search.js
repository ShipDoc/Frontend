/**
 * Main 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 주변 병원 전체 가져오기
export const getHospitalList = async (info) => {
    try {
        const result = await authInstance.post(
            `/api/search`,
            info
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
