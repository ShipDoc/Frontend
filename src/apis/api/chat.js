/**
 * 채팅 페이지 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 특정 병원 가져오기
export const sendChat = async (info) => {
    try {
        const result = await authInstance.post(`/api/chatbot/msg`, info);
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
