/**
 * category 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 카테고리로 병원 검색
export const getSymptomList = async (info) => {
    try {
        const result = await authInstance.post(
            `/api/search/symptom`,
            info
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
