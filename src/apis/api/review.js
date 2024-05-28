/**
 * 리뷰 페이지 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 특정 병원의 리뷰 가져오기
export const getReviews = async (info) => {
    try {
        const result = await authInstance.get(
            `api/hospitals/${info.hospitalId}/reviews?page=${info.page}&size=${info.size}&sort=${info.sort}`
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 특정 병원의 리뷰 등록하기
export const postReview = async (info) => {
    try {
        const result = await authInstance.post(
            `api/hospitals/${info.hospitalId}/reviews`,
            {
                score: info.score,
                content: info.content,
            }
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 리뷰 추천하기
export const recoReview = async (info) => {
    try {
        const result = await authInstance.put(
            `api/reviews/${info.id}/recommend`
        );
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
